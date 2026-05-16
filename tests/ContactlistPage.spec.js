import { test,expect }  from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { contactlistPage } from '../pages/contactlistPage';
import { testData } from '../fixtures/testData';

const data = new testData();

test.describe('Contact list page test', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.login_user.valid_login.email,
            data.login_user.valid_login.password
        )
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('Invalid data for firstname and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingFirstnameContact.firstName,
            data.newContact.missingFirstnameContact.lastName,
            data.newContact.missingFirstnameContact.birthdate,
            data.newContact.missingFirstnameContact.email,
            data.newContact.missingFirstnameContact.phone,
            data.newContact.missingFirstnameContact.address1,
            data.newContact.missingFirstnameContact.address2,
            data.newContact.missingFirstnameContact.city,
            data.newContact.missingFirstnameContact.state,
            data.newContact.missingFirstnameContact.postalcode,
            data.newContact.missingFirstnameContact.country
        )
        const firsterrormsg= await contact.getErrorMsg();
        expect(firsterrormsg).toContain('Contact validation failed: firstName: Path `firstName` is required.');
        console.log('Missing First Name:',firsterrormsg);
    })

    test('Invalid data for lastname and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingLastnameContact.firstName,
            data.newContact.missingLastnameContact.lastName,
            data.newContact.missingLastnameContact.birthdate,
            data.newContact.missingLastnameContact.email,
            data.newContact.missingLastnameContact.phone,
            data.newContact.missingLastnameContact.address1,
            data.newContact.missingLastnameContact.address2,
            data.newContact.missingLastnameContact.city,
            data.newContact.missingLastnameContact.state,
            data.newContact.missingLastnameContact.postalcode,
            data.newContact.missingLastnameContact.country
        )
        const firsterrormsg= await contact.getErrorMsg();
        expect(firsterrormsg).toContain('Contact validation failed: lastName: Path `lastName` is required.');
        console.log('Missing First Name:',firsterrormsg);
    })

    test('Invalid data for birthdate and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingBirthdateContact.firstName,
            data.newContact.missingBirthdateContact.lastName,
            data.newContact.missingBirthdateContact.birthdate,
            data.newContact.missingBirthdateContact.email,
            data.newContact.missingBirthdateContact.phone,
            data.newContact.missingBirthdateContact.address1,
            data.newContact.missingBirthdateContact.address2,
            data.newContact.missingBirthdateContact.city,
            data.newContact.missingBirthdateContact.state,
            data.newContact.missingBirthdateContact.postalcode,
            data.newContact.missingBirthdateContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for email and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingEmailContact.firstName,
            data.newContact.missingEmailContact.lastName,
            data.newContact.missingEmailContact.birthdate,
            data.newContact.missingEmailContact.email,
            data.newContact.missingEmailContact.phone,
            data.newContact.missingEmailContact.address1,
            data.newContact.missingEmailContact.address2,
            data.newContact.missingEmailContact.city,
            data.newContact.missingEmailContact.state,
            data.newContact.missingEmailContact.postalcode,
            data.newContact.missingEmailContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for phone and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingPhoneContact.firstName,
            data.newContact.missingPhoneContact.lastName,
            data.newContact.missingPhoneContact.birthdate,
            data.newContact.missingPhoneContact.email,
            data.newContact.missingPhoneContact.phone,
            data.newContact.missingPhoneContact.address1,
            data.newContact.missingPhoneContact.address2,
            data.newContact.missingPhoneContact.city,
            data.newContact.missingPhoneContact.state,
            data.newContact.missingPhoneContact.postalcode,
            data.newContact.missingPhoneContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for address and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingAddressContact.firstName,
            data.newContact.missingAddressContact.lastName,
            data.newContact.missingAddressContact.birthdate,
            data.newContact.missingAddressContact.email,
            data.newContact.missingAddressContact.phone,
            data.newContact.missingAddressContact.address1,
            data.newContact.missingAddressContact.address2,
            data.newContact.missingAddressContact.city,
            data.newContact.missingAddressContact.state,
            data.newContact.missingAddressContact.postalcode,
            data.newContact.missingAddressContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for city and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingCityContact.firstName,
            data.newContact.missingCityContact.lastName,
            data.newContact.missingCityContact.birthdate,
            data.newContact.missingCityContact.email,
            data.newContact.missingCityContact.phone,
            data.newContact.missingCityContact.address1,
            data.newContact.missingCityContact.address2,
            data.newContact.missingCityContact.city,
            data.newContact.missingCityContact.state,
            data.newContact.missingCityContact.postalcode,
            data.newContact.missingCityContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for state and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingStateContact.firstName,
            data.newContact.missingStateContact.lastName,
            data.newContact.missingStateContact.birthdate,
            data.newContact.missingStateContact.email,
            data.newContact.missingStateContact.phone,
            data.newContact.missingStateContact.address1,
            data.newContact.missingStateContact.address2,
            data.newContact.missingStateContact.city,
            data.newContact.missingStateContact.state,
            data.newContact.missingStateContact.postalcode,
            data.newContact.missingStateContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for postalcode and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingPostalCodeContact.firstName,
            data.newContact.missingPostalCodeContact.lastName,
            data.newContact.missingPostalCodeContact.birthdate,
            data.newContact.missingPostalCodeContact.email,
            data.newContact.missingPostalCodeContact.phone,
            data.newContact.missingPostalCodeContact.address1,
            data.newContact.missingPostalCodeContact.address2,
            data.newContact.missingPostalCodeContact.city,
            data.newContact.missingPostalCodeContact.state,
            data.newContact.missingPostalCodeContact.postalcode,
            data.newContact.missingPostalCodeContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('Invalid data for country and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.missingCountryContact.firstName,
            data.newContact.missingCountryContact.lastName,
            data.newContact.missingCountryContact.birthdate,
            data.newContact.missingCountryContact.email,
            data.newContact.missingCountryContact.phone,
            data.newContact.missingCountryContact.address1,
            data.newContact.missingCountryContact.address2,
            data.newContact.missingCountryContact.city,
            data.newContact.missingCountryContact.state,
            data.newContact.missingCountryContact.postalcode,
            data.newContact.missingCountryContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
    })

    test('valid data and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.validContact.firstName,
            data.newContact.validContact.lastName,
            data.newContact.validContact.birthdate,
            data.newContact.validContact.email,
            data.newContact.validContact.phone,
            data.newContact.validContact.address1,
            data.newContact.validContact.address2,
            data.newContact.validContact.city,
            data.newContact.validContact.state,
            data.newContact.validContact.postalcode,
            data.newContact.validContact.country
        )
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact?');
    })

    test('invalid data and click to submit button',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.getContactForm(
            data.newContact.invalidContact.firstName,
            data.newContact.invalidContact.lastName,
            data.newContact.invalidContact.birthdate,
            data.newContact.invalidContact.email,
            data.newContact.invalidContact.phone,
            data.newContact.invalidContact.address1,
            data.newContact.invalidContact.address2,
            data.newContact.invalidContact.city,
            data.newContact.invalidContact.state,
            data.newContact.invalidContact.postalcode,
            data.newContact.invalidContact.country
        )
        const invalidmsg= await contact.getErrorMsg();
        expect(invalidmsg).toContain('Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.');
        console.log('invalid message:',invalidmsg);
    })

    test('check cancel button to redirect the back page',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.clickCancelBtn();
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

    test('check logout button to redirect the back page',async({page})=>{
        const contact = new contactlistPage(page);
        await contact.clickAddContactBtn();
        await contact.clicklogoutBtn();
        expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/logout');
    })

    test('check row count',async({page})=>{
        const contact = new contactlistPage(page);
        await page.waitForSelector('.contactTableBodyRow');
        const count =await contact.CountContactRow();
        expect(count).toBe(37);
        console.log('row count is:',count);
    })

   test('check specific row name',async({page})=>{
        const contact = new contactlistPage(page);
        await page.waitForSelector('.contactTableBodyRow');
        await contact.clickContact('dilruba akter');
    })
})