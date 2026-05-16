# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactlistPage.spec.js >> Contact list page test >> Invalid data for lastname and click to submit button
- Location: tests\ContactlistPage.spec.js:43:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#submit')
    - locator resolved to <button id="submit">Submit</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | export class LoginPage{
  2  |     constructor(page){
  3  |         this.page= page;
  4  |         this.emailInput = page.locator('#email');
  5  |         this.passwordInput = page.locator('#password');
  6  |         this.SubmitBtn = page.locator('#submit');
  7  |         this.signupLink = page.locator('#signup');
  8  |         this.errormsg = page.locator('#error');
  9  |     }
  10 | 
  11 |     async goto(url){
  12 |         await this.page.goto(url);
  13 |     }
  14 | 
  15 |     async Login(email, password){
  16 |         await this.emailInput.fill(email);
  17 |         await this.passwordInput.fill(password);
> 18 |         await this.SubmitBtn.click();
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  19 |     }
  20 | 
  21 |     async getErrorMsg(){
  22 |         await this.errormsg.waitFor({state:'visible'});
  23 |         return await this.errormsg.textContent();
  24 |     }
  25 | 
  26 |     async SignUpLink(){
  27 |         await this.signupLink.click();
  28 |     }
  29 | }
```