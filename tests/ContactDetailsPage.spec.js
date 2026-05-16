import {test,expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { contactlistPage } from '../pages/contactlistPage';
import { contactdetailsPage } from '../pages/contactdetailsPage';
import { testData } from '../fixtures/testData';

const data = new testData();

test.describe('test contact details page', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.login_user.valid_login.email,
            data.login_user.valid_login.password
        );
        const contact = new contactlistPage(page);
        await page.waitForSelector('.contactTableBodyRow');
        await contact.clickContact('Dilrubacse Dipa');
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('edit first name', async({page})=>{
        const contactdetails = new contactdetailsPage(page);
        await page.waitForSelector('#edit-contact');
        await contactdetails.clickEditContactBtn();
        await contactdetails.getEditContact(data.updateContact);
        const FirstName = await contactdetails.getfirstName();
        expect(FirstName).toContain(data.updateContact.firstname);
        console.log(FirstName);

        const LastName = await contactdetails.getlastName();
        expect(LastName).toContain(data.updateContact.lastname);
        console.log(LastName);

    })

    test('check delete data',async({page})=>{
        const contactdetails = new contactdetailsPage(page);
        await page.waitForSelector('#edit-contact');
        await contactdetails.clickDeleteContactBtn();
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');   
    })

    test.only('test return to contact list page',async({page})=>{
        const contactdetails = new contactdetailsPage(page);
        await page.waitForSelector('#edit-contact');
        await contactdetails.returnContactListBtn();
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');   
    })

    
})