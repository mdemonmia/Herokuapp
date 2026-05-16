# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactlistPage.spec.js >> Contact list page test >> Invalid data for firstname and click to submit button
- Location: tests\ContactlistPage.spec.js:22:9

# Error details

```
ReferenceError: ContactListPage is not defined
```

# Test source

```ts
  1  | import { test,expect }  from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ContactlistPage } from '../pages/ContactlistPage';
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
> 23 |         const contact = new ContactListPage(page);
     |                         ^ ReferenceError: ContactListPage is not defined
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
  42 | })
```