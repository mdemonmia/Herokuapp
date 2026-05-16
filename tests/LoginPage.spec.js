import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { testData } from '../fixtures/testData';

const data = new testData();
 
test.describe('Login Test', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page)
        await login.goto(data.url);
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('Invalid data for email and click to submit button',async({page})=>{
        const login = new LoginPage(page)
        await login.Login(
            data.login_user.invalidEmail_login.email,
            data.login_user.invalidEmail_login.password
        )

         const errorMsg=await login.getErrorMsg();
         await expect(errorMsg).toContain('Incorrect username or password');
         console.log(errorMsg);
    })

    test('Invalid data for password and click to submit button',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.login_user.invalidPassword_login.email,
            data.login_user.invalidPassword_login.password
        )
        const errorpassMsg=await login.getErrorMsg();
        expect(errorpassMsg).toContain('Incorrect username or password');
        console.log(errorpassMsg);

    })

    test('Invalid data for both email, password and click to submit button',async({page})=>{
        const login = new LoginPage(page)
        await login.Login(
            data.login_user.invalid_login.email,
            data.login_user.invalid_login.password
        )
        const invalidMsg= await login.getErrorMsg();
        expect(invalidMsg).toContain('Incorrect username or password');
        console.log(invalidMsg);
    })

    test('test the valid login',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.login_user.valid_login.email,
            data.login_user.valid_login.password
        )
        await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

})