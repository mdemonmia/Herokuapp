# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactDetailsPage.spec.js >> test contact details page >> edit first name
- Location: tests\ContactDetailsPage.spec.js:26:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#edit-contact')

```

# Test source

```ts
  1  | export class contactdetailsPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.editContactBtn = page.locator('#edit-contact');
  5  |         this.deleteContactBtn = page.locator('#delete');
  6  |         this.returnContactBtn = page.locator('#return');
  7  |         this.logoutBtn = page.locator('#logout');
  8  |         this.firstNameInput = page.locator('#firstName');
  9  |         this.lastNameInput = page.locator('#lastName');
  10 |         this.emailInput = page.locator('#email');
  11 |         this.phoneInput = page.locator('#phone');
  12 |         this.SubmitBtn = page.locator('#submit');
  13 |         this.CancelBtn = page.locator('#cancel');
  14 |         this.firstname = page.locator('#firstName');
  15 |         this.lastname = page.locator('#lastName');
  16 |     }
  17 | 
  18 |     async clickEditContactBtn(){
> 19 |         await this.editContactBtn.click();
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  20 |     }
  21 | 
  22 |     async getEditContact(contact){
  23 |         await this.firstNameInput.fill(contact.firstname);
  24 |         await this.lastNameInput.fill(contact.lastname);
  25 |         await this.emailInput.fill(contact.email);
  26 |         await this.phoneInput.fill(contact.phone);
  27 |         await this.SubmitBtn.click();
  28 |     }
  29 | 
  30 |     async clickDeleteContactBtn(){
  31 |         this.page.on('dialog', async (dialog) =>{
  32 |             await dialog.type('confirm');
  33 |             await dialog.message('Are you sure you want to delete this contact?');
  34 |             await dialog.accept();
  35 |         })
  36 |         await this.deleteContactBtn.click();
  37 |     }
  38 | 
  39 |     async returnContactListBtn(){
  40 |         await this.returnContactBtn.click();
  41 |     }
  42 | 
  43 |     async getfirstName(){
  44 |         return await this.firstname.textContent();
  45 |     }
  46 | 
  47 |     async getlastName(){
  48 |         return await this.lastname.textContent();
  49 |     }
  50 | 
  51 | }
```