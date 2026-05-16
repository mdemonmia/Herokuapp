# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactlistPage.spec.js >> Contact list page test >> Invalid data for firstname and click to submit button
- Location: tests\ContactlistPage.spec.js:22:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#add-contact')

```

# Test source

```ts
  1  | export class contactlistPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.Add_contactBtn= page.locator('#add-contact');
  5  |         this.contactRow = page.locator('.contactTableBodyRow');
  6  |         this.firstName= page.locator('#firstName');
  7  |         this.lastName = page.locator('#lastName');
  8  |         this.birthdate= page.locator('#birthdate');
  9  |         this.emailInput = page.locator('#email');
  10 |         this.phoneInput = page.locator('#phone');
  11 |         this.sAddress1 = page.locator('#street1');
  12 |         this.sAddress2= page.locator('#street2');
  13 |         this.cityInput = page.locator('#city');
  14 |         this.stateInput =  page.locator('#stateProvince');
  15 |         this.postalCode = page.locator('#postalCode');
  16 |         this.countryInput = page.locator('#country');
  17 |         this.submitBtn = page.locator('#submit');
  18 |         this.cancelBtn = page.locator('#cancel');
  19 |         this.errormsg = page.locator('#error');
  20 |         this.logoutBtn= page.locator('#logout')
  21 |     }
  22 | 
  23 |     async getContactForm(firstname,lastname,birthdate,email,phone,address1,address2,city,state,postalcode,country){
  24 |         await this.firstName.fill(firstname);
  25 |         await this.lastName.fill(lastname);
  26 |         await this.birthdate.fill(birthdate);
  27 |         await this.emailInput.fill(email);
  28 |         await this.phoneInput.fill(phone);
  29 |         await this.sAddress1.fill(address1);
  30 |         await this.sAddress2.fill(address2);
  31 |         await this.cityInput.fill(city);
  32 |         await this.stateInput.fill(state);
  33 |         await this.postalCode.fill(postalcode);
  34 |         await this.countryInput.fill(country);
  35 |         await this.submitBtn.click();
  36 | 
  37 |     }
  38 | 
  39 |     async clickAddContactBtn(){
> 40 |         await this.Add_contactBtn.click();
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  41 |     }
  42 | 
  43 |     async getErrorMsg(){
  44 |         await this.errormsg.waitFor({state:'visible'});
  45 |         return await this.errormsg.textContent();
  46 |     }
  47 | 
  48 |     async CountContactRow(){
  49 |         return await this.contactRow.count();
  50 |     }
  51 | 
  52 |     async clickContact(name){
  53 |         const rows = await this.contactRow.count();
  54 |         for(let i=0;i<rows;i++){
  55 |             const row = this.contactRow.nth(i);
  56 |             if((await row.textContent()).trim()===name){
  57 |                 await row.click();
  58 |                 break;
  59 |             }
  60 |         }
  61 |     }
  62 |     async clickCancelBtn(){
  63 |         await this.cancelBtn.click();
  64 |     }
  65 | 
  66 |     async clicklogoutBtn(){
  67 |         await this.logoutBtn.click();
  68 |     }
  69 | 
  70 | }
```