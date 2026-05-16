# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.js >> Register Page test >> Invalid data for email and click to submit button
- Location: tests\RegisterPage.spec.js:46:10

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "User validation failed: email: Path `email` is required."
Received string:    "User validation failed: email: Email is invalid"
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { RegisterPage } from '../pages/RegisterPage';
  4  | import { testData } from '../fixtures/testData';
  5  | 
  6  | const data = new testData();
  7  | 
  8  | test.describe('Register Page test', ()=>{
  9  |     test.beforeEach(async({page})=>{
  10 |         const login = new LoginPage(page);
  11 |         await login.goto(data.url);
  12 |         await login.SignUpLink();
  13 |     })
  14 | 
  15 |     test.afterEach(async({page})=>{
  16 |         await page.close();
  17 |     })
  18 | 
  19 |     test('Invalid data for firstname and click to submit button',async({page})=>{
  20 |         const register = new RegisterPage(page);
  21 |         await register.getRegisterForm(
  22 |             data.users.missingFirstName.firstName,
  23 |             data.users.missingFirstName.lastName,
  24 |             data.users.missingFirstName.email,
  25 |             data.users.missingFirstName.password
  26 |         )
  27 |         const regiFirstMsg= await register.getErrorMsg();
  28 |         expect(regiFirstMsg).toContain('User validation failed: firstName: Path `firstName` is required.');
  29 |         console.log('Missing First Name:',regiFirstMsg);
  30 | 
  31 |     })
  32 | 
  33 |     test('Invalid data for lastname and click to submit button', async({page})=>{
  34 |         const register = new RegisterPage(page);
  35 |         await register.getRegisterForm(
  36 |             data.users.missingLastName.firstName,
  37 |             data.users.missingLastName.lastName,
  38 |             data.users.missingLastName.email,
  39 |             data.users.missingLastName.password
  40 |         )
  41 |         const regiLastMsg= await register.getErrorMsg();
  42 |         expect(regiLastMsg).toContain('User validation failed: lastName: Path `lastName` is required.');
  43 |         console.log('Missing Last Name:',regiLastMsg);
  44 |     })
  45 | 
  46 |     test.only('Invalid data for email and click to submit button',async({page})=>{
  47 |         const register = new RegisterPage(page);
  48 |         await register.getRegisterForm(
  49 |             data.users.missingemail.firstName,
  50 |             data.users.missingemail.lastName,
  51 |             data.users.missingemail.email,
  52 |             data.users.missingemail.password
  53 |         )
  54 |         await register.getErrorMsg();
  55 |         const regiEmailMsg= await register.getErrorMsg();
> 56 |         expect(regiEmailMsg).toContain('User validation failed: email: Path `email` is required.');
     |                              ^ Error: expect(received).toContain(expected) // indexOf
  57 |         console.log('Missing Email:',regiEmailMsg);
  58 |     })
  59 | })
```