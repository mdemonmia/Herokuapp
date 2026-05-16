# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login Test >> test the valid login
- Location: tests\LoginPage.spec.js:52:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "/contactList/"
Received: "https://thinking-tester-contact-list.herokuapp.com/contactList"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "https://thinking-tester-contact-list.herokuapp.com/"
    - waiting for" https://thinking-tester-contact-list.herokuapp.com/contactList" navigation to finish...
    - navigated to "https://thinking-tester-contact-list.herokuapp.com/contactList"
    5 × unexpected value "https://thinking-tester-contact-list.herokuapp.com/contactList"

```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { testData } from '../fixtures/testData';
  4  | 
  5  | const data = new testData();
  6  |  
  7  | test.describe('Login Test', ()=>{
  8  |     test.beforeEach(async({page})=>{
  9  |         const login = new LoginPage(page)
  10 |         await login.goto(data.url);
  11 |     })
  12 | 
  13 |     test.afterEach(async({page})=>{
  14 |         await page.close();
  15 |     })
  16 | 
  17 |     test('Invalid data for email and click to submit button',async({page})=>{
  18 |         const login = new LoginPage(page)
  19 |         await login.Login(
  20 |             data.login_user.invalidEmail_login.email,
  21 |             data.login_user.invalidEmail_login.password
  22 |         )
  23 | 
  24 |          const errorMsg=await login.getErrorMsg();
  25 |          await expect(errorMsg).toContain('Incorrect username or password');
  26 |          console.log(errorMsg);
  27 |     })
  28 | 
  29 |     test('Invalid data for password and click to submit button',async({page})=>{
  30 |         const login = new LoginPage(page);
  31 |         await login.Login(
  32 |             data.login_user.invalidPassword_login.email,
  33 |             data.login_user.invalidPassword_login.password
  34 |         )
  35 |         const errorpassMsg=await login.getErrorMsg();
  36 |         expect(errorpassMsg).toContain('Incorrect username or password');
  37 |         console.log(errorpassMsg);
  38 | 
  39 |     })
  40 | 
  41 |     test('Invalid data for both email, password and click to submit button',async({page})=>{
  42 |         const login = new LoginPage(page)
  43 |         await login.Login(
  44 |             data.login_user.invalid_login.email,
  45 |             data.login_user.invalid_login.password
  46 |         )
  47 |         const invalidMsg= await login.getErrorMsg();
  48 |         expect(invalidMsg).toContain('Incorrect username or password');
  49 |         console.log(invalidMsg);
  50 |     })
  51 | 
  52 |     test.only('test the valid login',async({page})=>{
  53 |         const login = new LoginPage(page);
  54 |         await login.Login(
  55 |             data.login_user.valid_login.email,
  56 |             data.login_user.valid_login.password
  57 |         )
> 58 |         await expect(page).toHaveURL('/contactList/');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  59 |     })
  60 | 
  61 | })
```