export class RegisterPage{
    constructor(page){
        this.page=page;
        this.firstName= page.locator('#firstName');
        this.lastName= page.locator('#lastName');
        this.emailInput =page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.submitBtn = page.locator('#submit');
        this.errormsg= page.locator('#error');
        this.cancelBtn =  page.locator('#cancel');
    }

    async getRegisterForm(firstname,lastname,email,password){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitBtn.click();
    }

    async clickCancelBtn(){
        await this.cancelBtn.click();
    }

    async getErrorMsg(){
        await this.errormsg.waitFor({state:'visible'});
        return await this.errormsg.textContent();
    }
}