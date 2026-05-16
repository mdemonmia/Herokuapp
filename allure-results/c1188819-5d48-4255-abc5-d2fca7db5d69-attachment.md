# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.js >> Register Page test >> check cancel button
- Location: tests\RegisterPage.spec.js:99:10

# Error details

```
TypeError: register.cancelButton is not a function
```

# Test source

```ts
  1   | import { test,expect } from '@playwright/test';
  2   | import { LoginPage } from '../pages/LoginPage';
  3   | import { RegisterPage } from '../pages/RegisterPage';
  4   | import { testData } from '../fixtures/testData';
  5   | 
  6   | const data = new testData();
  7   | 
  8   | test.describe('Register Page test', ()=>{
  9   |     test.beforeEach(async({page})=>{
  10  |         const login = new LoginPage(page);
  11  |         await login.goto(data.url);
  12  |         await login.SignUpLink();
  13  |     })
  14  | 
  15  |     test.afterEach(async({page})=>{
  16  |         await page.close();
  17  |     })
  18  | 
  19  |     test('Invalid data for firstname and click to submit button',async({page})=>{
  20  |         const register = new RegisterPage(page);
  21  |         await register.getRegisterForm(
  22  |             data.users.missingFirstName.firstName,
  23  |             data.users.missingFirstName.lastName,
  24  |             data.users.missingFirstName.email,
  25  |             data.users.missingFirstName.password
  26  |         )
  27  |         const regiFirstMsg= await register.getErrorMsg();
  28  |         expect(regiFirstMsg).toContain('User validation failed: firstName: Path `firstName` is required.');
  29  |         console.log('Missing First Name:',regiFirstMsg);
  30  | 
  31  |     })
  32  | 
  33  |     test('Invalid data for lastname and click to submit button', async({page})=>{
  34  |         const register = new RegisterPage(page);
  35  |         await register.getRegisterForm(
  36  |             data.users.missingLastName.firstName,
  37  |             data.users.missingLastName.lastName,
  38  |             data.users.missingLastName.email,
  39  |             data.users.missingLastName.password
  40  |         )
  41  |         const regiLastMsg= await register.getErrorMsg();
  42  |         expect(regiLastMsg).toContain('User validation failed: lastName: Path `lastName` is required.');
  43  |         console.log('Missing Last Name:',regiLastMsg);
  44  |     })
  45  | 
  46  |     test('Invalid data for email and click to submit button',async({page})=>{
  47  |         const register = new RegisterPage(page);
  48  |         await register.getRegisterForm(
  49  |             data.users.missingemail.firstName,
  50  |             data.users.missingemail.lastName,
  51  |             data.users.missingemail.email,
  52  |             data.users.missingemail.password
  53  |         )
  54  |         await register.getErrorMsg();
  55  |         const regiEmailMsg= await register.getErrorMsg();
  56  |         expect(regiEmailMsg).toContain('User validation failed: email: Email is invalid');
  57  |         console.log('Missing Email:',regiEmailMsg);
  58  |     })
  59  | 
  60  |     test('Invalid data for password and click to submit button',async({page})=>{
  61  |         const register = new RegisterPage(page);
  62  |         await register.getRegisterForm(
  63  |             data.users.missingPassword.firstName,
  64  |             data.users.missingPassword.lastName,
  65  |             data.users.missingPassword.email,
  66  |             data.users.missingPassword.password
  67  |         )
  68  |         await register.getErrorMsg();
  69  |         const regiPassMsg= await register.getErrorMsg();
  70  |         expect(regiPassMsg).toContain('User validation failed: password: Path `password` is required.');
  71  |         console.log('Missing Password:',regiPassMsg);
  72  |     })
  73  | 
  74  |     test('check short data for password and click to submit button',async({page})=>{
  75  |         const register = new RegisterPage(page);
  76  |         await register.getRegisterForm(
  77  |             data.users.ShortPassword.firstName,
  78  |             data.users.ShortPassword.lastName,
  79  |             data.users.ShortPassword.email,
  80  |             data.users.ShortPassword.password
  81  |         )
  82  |         await register.getErrorMsg();
  83  |         const shortPassMsg= await register.getErrorMsg();
  84  |         expect(shortPassMsg).toContain('User validation failed: password: Path `password` (`dipa12`) is shorter than the minimum allowed length (7).');
  85  |         console.log('Short Password:',shortPassMsg);
  86  |     })
  87  | 
  88  |     test('valid data for register',async({page})=>{
  89  |         const register = new RegisterPage(page);
  90  |         await register.getRegisterForm(
  91  |             data.users.validUser.firstName,
  92  |             data.users.validUser.lastName,
  93  |             data.users.validUser.email,
  94  |             data.users.validUser.password
  95  |         )
  96  |         await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  97  |     })
  98  | 
  99  |     test.only('check cancel button',async({page})=>{
  100 |         const register = new RegisterPage(page);
> 101 |         await register.cancelButton();
      |                        ^ TypeError: register.cancelButton is not a function
  102 |         await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/');
  103 |     })
  104 | })
```