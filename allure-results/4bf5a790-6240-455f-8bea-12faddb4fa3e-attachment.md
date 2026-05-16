# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactlistPage.spec.js >> Contact list page test >> Invalid data for birthdate and click to submit button
- Location: tests\ContactlistPage.spec.js:64:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://thinking-tester-contact-list.herokuapp.com/contactList"
Received: "https://thinking-tester-contact-list.herokuapp.com/addContact"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "https://thinking-tester-contact-list.herokuapp.com/addContact"

```

# Test source

```ts
  1  | import { test,expect }  from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { contactlistPage } from '../pages/contactlistPage';
  4  | import { testData } from '../fixtures/testData';
  5  | 
  6  | const data = new testData();
  7  | 
  8  | test.describe('Contact list page test', ()=>{
  9  |     test.beforeEach(async({page})=>{
  10 |         const login = new LoginPage(page);
  11 |         await login.goto(data.url);
  12 |         await login.Login(
  13 |             data.login_user.valid_login.email,
  14 |             data.login_user.valid_login.password
  15 |         )
  16 |     })
  17 | 
  18 |     test.afterEach(async({page})=>{
  19 |         await page.close();
  20 |     })
  21 | 
  22 |     test('Invalid data for firstname and click to submit button',async({page})=>{
  23 |         const contact = new contactlistPage(page);
  24 |         await contact.clickAddContactBtn();
  25 |         await contact.getContactForm(
  26 |             data.newContact.missingFirstnameContact.firstName,
  27 |             data.newContact.missingFirstnameContact.lastName,
  28 |             data.newContact.missingFirstnameContact.birthdate,
  29 |             data.newContact.missingFirstnameContact.email,
  30 |             data.newContact.missingFirstnameContact.phone,
  31 |             data.newContact.missingFirstnameContact.address1,
  32 |             data.newContact.missingFirstnameContact.address2,
  33 |             data.newContact.missingFirstnameContact.city,
  34 |             data.newContact.missingFirstnameContact.state,
  35 |             data.newContact.missingFirstnameContact.postalcode,
  36 |             data.newContact.missingFirstnameContact.country
  37 |         )
  38 |         const firsterrormsg= await contact.getErrorMsg();
  39 |         expect(firsterrormsg).toContain('Contact validation failed: firstName: Path `firstName` is required.');
  40 |         console.log('Missing First Name:',firsterrormsg);
  41 |     })
  42 | 
  43 |     test('Invalid data for lastname and click to submit button',async({page})=>{
  44 |         const contact = new contactlistPage(page);
  45 |         await contact.clickAddContactBtn();
  46 |         await contact.getContactForm(
  47 |             data.newContact.missingLastnameContact.firstName,
  48 |             data.newContact.missingLastnameContact.lastName,
  49 |             data.newContact.missingLastnameContact.birthdate,
  50 |             data.newContact.missingLastnameContact.email,
  51 |             data.newContact.missingLastnameContact.phone,
  52 |             data.newContact.missingLastnameContact.address1,
  53 |             data.newContact.missingLastnameContact.address2,
  54 |             data.newContact.missingLastnameContact.city,
  55 |             data.newContact.missingLastnameContact.state,
  56 |             data.newContact.missingLastnameContact.postalcode,
  57 |             data.newContact.missingLastnameContact.country
  58 |         )
  59 |         const firsterrormsg= await contact.getErrorMsg();
  60 |         expect(firsterrormsg).toContain('Contact validation failed: lastName: Path `lastName` is required.');
  61 |         console.log('Missing First Name:',firsterrormsg);
  62 |     })
  63 | 
  64 |     test.only('Invalid data for birthdate and click to submit button',async({page})=>{
  65 |         const contact = new contactlistPage(page);
  66 |         await contact.clickAddContactBtn();
  67 |         await contact.getContactForm(
  68 |             data.newContact.missingBirthdateContact.firstName,
  69 |             data.newContact.missingBirthdateContact.lastName,
  70 |             data.newContact.missingBirthdateContact.birthdate,
  71 |             data.newContact.missingBirthdateContact.email,
  72 |             data.newContact.missingBirthdateContact.phone,
  73 |             data.newContact.missingBirthdateContact.address1,
  74 |             data.newContact.missingBirthdateContact.address2,
  75 |             data.newContact.missingBirthdateContact.city,
  76 |             data.newContact.missingBirthdateContact.state,
  77 |             data.newContact.missingBirthdateContact.postalcode,
  78 |             data.newContact.missingBirthdateContact.country
  79 |         )
> 80 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  81 |     })
  82 | })
```