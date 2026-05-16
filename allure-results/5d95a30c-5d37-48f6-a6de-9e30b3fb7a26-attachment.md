# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.js >> end to end test
- Location: tests\E2E.spec.js:11:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://thinking-tester-contact-list.herokuapp.com/contactDetails"
  navigated to "https://thinking-tester-contact-list.herokuapp.com/contactList"
  navigated to "https://thinking-tester-contact-list.herokuapp.com/contactDetails"
============================================================
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
  25 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
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
  55 |      await contact.clickContact(
  56 |         `${data.newContact.validContact.firstName} ${data.newContact.validContact.lastName}`
  57 |      );
  58 |      console.log('contact name:',`${data.newContact.validContact.firstName} ${data.newContact.validContact.lastName}`);
> 59 |      await page.waitForURL(/contacts\//);
     |                 ^ Error: page.waitForURL: Target page, context or browser has been closed
  60 | 
  61 | 
  62 |      //step-4 edit contact
  63 |      const contactdetails = new contactdetailsPage(page);
  64 |      await contactdetails.clickEditContactBtn();
  65 |      await contactdetails.getEditContact(data.updateContact);
  66 |      const firstName = await contactdetails.getfirstName();
  67 |      await expect(firstName).toContain(data.updateContact.firstname);
  68 |      console.log('Contact updated successfully.');
  69 | 
  70 |      //step-5 delete contact
  71 |      await contactdetails.clickDeleteContactBtn();
  72 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  73 |      console.log('Contact deleted successfully.');
  74 | 
  75 |      //step-6 logout
  76 |      await contact.clicklogoutBtn();
  77 |      await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/logout');
  78 |      console.log('Logout successfully.');
  79 | 
  80 | })
```