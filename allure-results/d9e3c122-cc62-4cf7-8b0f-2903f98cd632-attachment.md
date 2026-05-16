# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.js >> end to end test
- Location: tests\E2E.spec.js:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://thinking-tester-contact-list.herokuapp.com/contactList"
Received: "https://thinking-tester-contact-list.herokuapp.com/addUser"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    6 × unexpected value "https://thinking-tester-contact-list.herokuapp.com/addUser"
    - waiting for navigation to finish...

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - heading "Contact List" [level=1] [ref=e4]
      - button "Logout" [ref=e5]
    - paragraph [ref=e6]: Click on any contact to view the Contact Details
    - paragraph [ref=e7]:
      - button "Add a New Contact" [ref=e8]
    - table [ref=e10]:
      - rowgroup [ref=e11]:
        - row "Name Birthdate Email Phone Address City, State/Province, Postal Code Country" [ref=e12]:
          - columnheader "Name" [ref=e13]
          - columnheader "Birthdate" [ref=e14]
          - columnheader "Email" [ref=e15]
          - columnheader "Phone" [ref=e16]
          - columnheader "Address" [ref=e17]
          - columnheader "City, State/Province, Postal Code" [ref=e18]
          - columnheader "Country" [ref=e19]
      - rowgroup
  - contentinfo [ref=e20]:
    - paragraph [ref=e21]: Created by Kristin Jackvony, Copyright 2021
    - img [ref=e22]
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { RegisterPage } from '../pages/RegisterPage';
  4  | import { contactlistPage } from '../pages/contactlistPage';
  5  | import { contactdetailsPage } from '../pages/contactdetailsPage';
  6  | import { testData } from '../fixtures/testData';
  7  | import { register } from 'node:module';
  8  | 
  9  | const data = new testData();
  10 | 
  11 | test('end to end test',async({page})=>{
  12 |      //step-1 --register
  13 | 
  14 |      const login = new LoginPage(page)
  15 |      await login.goto(data.url);
  16 |      await login.SignUpLink();
  17 | 
  18 |      const register = new RegisterPage(page);
  19 |      await register.getRegisterForm(
  20 |         data.users.validUser.firstName,
  21 |         data.users.validUser.lastName,
  22 |         data.users.validUser.email,
  23 |         data.users.validUser.password
  24 |      )
> 25 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
     |                         ^ Error: expect(page).toHaveURL(expected) failed
  26 |      console.log('registered successfully');
  27 | 
  28 |      //step-2 - login
  29 |     //  await login.Login(
  30 |     //     data.login_user.valid_login.email,
  31 |     //     data.login_user.valid_login.password
  32 |     //  )
  33 |     //  await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  34 |     //  console.log('Login successfully.')
  35 | 
  36 | 
  37 |      //step-3 add contact
  38 |      const contact = new contactlistPage(page);
  39 |      await contact.clickAddContactBtn();
  40 |      await contact.getContactForm(
  41 |         data.newContact.validContact.firstName,
  42 |         data.newContact.validContact.lastName,
  43 |         data.newContact.validContact.birthdate,
  44 |         data.newContact.validContact.email,
  45 |         data.newContact.validContact.phone,
  46 |         data.newContact.validContact.address1,
  47 |         data.newContact.validContact.address2,
  48 |         data.newContact.validContact.city,
  49 |         data.newContact.validContact.state,
  50 |         data.newContact.validContact.postalcode,
  51 |         data.newContact.validContact.country
  52 |      )
  53 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  54 |      console.log('Contact added successfully.');
  55 |      await contact.clickContact('dilruba akter');
  56 |      await page.waitForTimeout(3000)
  57 |      //await page.waitForURL(/contactDetails/);
  58 | 
  59 | 
  60 |      //step-4 edit contact
  61 |      const contactdetails = new contactdetailsPage(page);
  62 |      await contactdetails.clickEditContactBtn();
  63 |      await contactdetails.getEditContact(data.updateContact);
  64 |      const firstName = await contactdetails.getfirstName();
  65 |      await expect(firstName).toContain(data.updateContact.firstname);
  66 |      console.log('Contact updated successfully.');
  67 | 
  68 |      //step-5 delete contact
  69 |      await contactdetails.clickDeleteContactBtn();
  70 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  71 |      console.log('Contact deleted successfully.');
  72 | 
  73 |      //step-6 logout
  74 |      await contact.clicklogoutBtn();
  75 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/logout');
  76 |      console.log('Logout successfully.');
  77 | 
  78 | })
```