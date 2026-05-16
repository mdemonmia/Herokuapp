import { test, expect }       from '@playwright/test';
import { LoginPage }          from '../pages/loginPage.js';
import { RegisterPage }       from '../pages/registerPage.js';
import { contactlistPage }    from '../pages/contactlistPage.js';
import { contactdetailsPage } from '../pages/contactdetailsPage.js';
import { testData }           from '../fixtures/testData.js';

const data = new testData();

test('end to end test', async ({ page }) => {

    // step 1 — register
    const login = new LoginPage(page);
    await login.goto(data.url);
    await login.SignUpLink();

    const register = new RegisterPage(page);
    const uniqueEmail = `testuser_${Date.now()}@gmail.com`; // ✅ unique email
    await register.getRegisterForm(
        data.users.validUser.firstName,
        data.users.validUser.lastName,
        uniqueEmail,
        data.users.validUser.password
    );
    await expect(page).toHaveURL(/contactList/);
    console.log('✅ step 1 — registered successfully');

    // step 2 — add contact
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
    );
    await expect(page).toHaveURL(/contactList/);
    console.log('✅ step 2 — contact added successfully');

    // step 3 — contact click
    const fullName = `${data.newContact.validContact.firstName} ${data.newContact.validContact.lastName}`;
    await contact.clickContact(fullName); // ✅ clickContact এর ভেতরেই waitForURL আছে
    console.log('✅ step 3 — contact clicked successfully');

    // step 4 — edit contact
    const contactdetails = new contactdetailsPage(page);
    await contactdetails.clickEditContactBtn();
    await contactdetails.getEditContact(data.updateContact);
    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails'); // ✅ submit হওয়ার পরে details page
    
    console.log('✅ step 4 — contact updated successfully');

    // step 5 — delete contact
    await contactdetails.clickDeleteContactBtn();
    await expect(page).toHaveURL(/contactList/);
    console.log('✅ step 5 — contact deleted successfully');

    // step 6 — logout
    await contact.clicklogoutBtn();
    await expect(page).toHaveURL(data.url);
    console.log('✅ step 6 — logout successfully');

});