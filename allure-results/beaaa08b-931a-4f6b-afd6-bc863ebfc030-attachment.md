# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactDetailsPage.spec.js >> test contact details page >> test return to contact list page
- Location: tests\ContactDetailsPage.spec.js:48:10

# Error details

```
TypeError: contactdetails.clickReturnContactListBtn is not a function
```

# Test source

```ts
  1  | import {test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { contactlistPage } from '../pages/contactlistPage';
  4  | import { contactdetailsPage } from '../pages/contactdetailsPage';
  5  | import { testData } from '../fixtures/testData';
  6  | 
  7  | const data = new testData();
  8  | 
  9  | test.describe('test contact details page', ()=>{
  10 |     test.beforeEach(async({page})=>{
  11 |         const login = new LoginPage(page);
  12 |         await login.goto(data.url);
  13 |         await login.Login(
  14 |             data.login_user.valid_login.email,
  15 |             data.login_user.valid_login.password
  16 |         );
  17 |         const contact = new contactlistPage(page);
  18 |         await page.waitForSelector('.contactTableBodyRow');
  19 |         await contact.clickContact('Dilrubacse Dipa');
  20 |     })
  21 | 
  22 |     test.afterEach(async({page})=>{
  23 |         await page.close();
  24 |     })
  25 | 
  26 |     test('edit first name', async({page})=>{
  27 |         const contactdetails = new contactdetailsPage(page);
  28 |         await page.waitForSelector('#edit-contact');
  29 |         await contactdetails.clickEditContactBtn();
  30 |         await contactdetails.getEditContact(data.updateContact);
  31 |         const FirstName = await contactdetails.getfirstName();
  32 |         expect(FirstName).toContain(data.updateContact.firstname);
  33 |         console.log(FirstName);
  34 | 
  35 |         const LastName = await contactdetails.getlastName();
  36 |         expect(LastName).toContain(data.updateContact.lastname);
  37 |         console.log(LastName);
  38 | 
  39 |     })
  40 | 
  41 |     test('check delete data',async({page})=>{
  42 |         const contactdetails = new contactdetailsPage(page);
  43 |         await page.waitForSelector('#edit-contact');
  44 |         await contactdetails.clickDeleteContactBtn();
  45 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');   
  46 |     })
  47 | 
  48 |     test.only('test return to contact list page',async({page})=>{
  49 |         const contactdetails = new contactdetailsPage(page);
  50 |         await page.waitForSelector('#edit-contact');
> 51 |         await contactdetails.clickReturnContactListBtn();
     |                              ^ TypeError: contactdetails.clickReturnContactListBtn is not a function
  52 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');   
  53 |     })
  54 | 
  55 |     
  56 | })
```