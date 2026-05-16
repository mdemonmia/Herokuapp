import { expect } from '@playwright/test';  
export class contactdetailsPage{
    constructor(page){
        this.page=page;
        this.editContactBtn = page.locator('#edit-contact');
        this.deleteContactBtn = page.locator('#delete');
        this.returnContactBtn = page.locator('#return');
        this.logoutBtn = page.locator('#logout');
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.SubmitBtn = page.locator('#submit');
        this.CancelBtn = page.locator('#cancel');
        this.Firstname = page.locator('#firstName');
        this.Lastname = page.locator('#lastName');
    }

    async clickEditContactBtn(){
        await this.editContactBtn.click();
    }

    async getEditContact(contact){
        await this.firstNameInput.fill(contact.firstname);
        await this.lastNameInput.fill(contact.lastname);
        await this.emailInput.fill(contact.email);
        await this.phoneInput.fill(contact.phone);
        await this.SubmitBtn.click();
    }

    async clickDeleteContactBtn(){
        this.page.on('dialog', async (dialog) =>{
            expect(dialog.message()).toContain('Are you sure you want to delete this contact?');
            await dialog.accept();
        })
        await this.deleteContactBtn.click();
    }

    async returnContactListBtn(){
        await this.returnContactBtn.click();
    }

    async getfirstName(){
        return await this.firstNameInput.inputValue();
    }

    async getlastName(){
        return await this.lastNameInput.inputValue();
    }

}