import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { testData } from '../fixtures/testData';

const data = new testData();

test.describe('Register Page test', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.SignUpLink();
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('Invalid data for firstname and click to submit button',async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.missingFirstName.firstName,
            data.users.missingFirstName.lastName,
            data.users.missingFirstName.email,
            data.users.missingFirstName.password
        )
        const regiFirstMsg= await register.getErrorMsg();
        expect(regiFirstMsg).toContain('User validation failed: firstName: Path `firstName` is required.');
        console.log('Missing First Name:',regiFirstMsg);

    })

    test('Invalid data for lastname and click to submit button', async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.missingLastName.firstName,
            data.users.missingLastName.lastName,
            data.users.missingLastName.email,
            data.users.missingLastName.password
        )
        const regiLastMsg= await register.getErrorMsg();
        expect(regiLastMsg).toContain('User validation failed: lastName: Path `lastName` is required.');
        console.log('Missing Last Name:',regiLastMsg);
    })

    test('Invalid data for email and click to submit button',async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.missingemail.firstName,
            data.users.missingemail.lastName,
            data.users.missingemail.email,
            data.users.missingemail.password
        )
        await register.getErrorMsg();
        const regiEmailMsg= await register.getErrorMsg();
        expect(regiEmailMsg).toContain('User validation failed: email: Email is invalid');
        console.log('Missing Email:',regiEmailMsg);
    })

    test('Invalid data for password and click to submit button',async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.missingPassword.firstName,
            data.users.missingPassword.lastName,
            data.users.missingPassword.email,
            data.users.missingPassword.password
        )
        await register.getErrorMsg();
        const regiPassMsg= await register.getErrorMsg();
        expect(regiPassMsg).toContain('User validation failed: password: Path `password` is required.');
        console.log('Missing Password:',regiPassMsg);
    })

    test('check short data for password and click to submit button',async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.ShortPassword.firstName,
            data.users.ShortPassword.lastName,
            data.users.ShortPassword.email,
            data.users.ShortPassword.password
        )
        await register.getErrorMsg();
        const shortPassMsg= await register.getErrorMsg();
        expect(shortPassMsg).toContain('User validation failed: password: Path `password` (`dipa12`) is shorter than the minimum allowed length (7).');
        console.log('Short Password:',shortPassMsg);
    })

    test('valid data for register',async({page})=>{
        const register = new RegisterPage(page);
        await register.getRegisterForm(
            data.users.validUser.firstName,
            data.users.validUser.lastName,
            data.users.validUser.email,
            data.users.validUser.password
        )
        await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

    test('check cancel button',async({page})=>{
        const register = new RegisterPage(page);
        await register.clickCancelBtn();
        await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/login');
    })
})