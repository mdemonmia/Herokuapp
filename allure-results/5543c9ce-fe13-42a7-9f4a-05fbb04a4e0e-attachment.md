# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login Test >> Invalid data for password and click to submit button
- Location: tests\LoginPage.spec.js:29:10

# Error details

```
Error: toBeVisible can be only used with Locator object
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
  29 |     test.only('Invalid data for password and click to submit button',async({page})=>{
  30 |         const login = new LoginPage(page);
  31 |         await login.Login(
  32 |             data.login_user.invalidPassword_login.email,
  33 |             data.login_user.invalidPassword_login.password
  34 |         )
  35 |         const errorpassMsg=await login.getErrorMsg();
> 36 |         expect(errorpassMsg).toBeVisible();
     |                              ^ Error: toBeVisible can be only used with Locator object
  37 |         expect(errorpassMsg).toContain('Incorrect username or password');
  38 |         console.log(errorpassMsg);
  39 | 
  40 |     })
  41 | })
```