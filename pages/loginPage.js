export class LoginPage{
    constructor(page){
        this.page= page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.SubmitBtn = page.locator('#submit');
        this.signupLink = page.locator('#signup');
        this.errormsg = page.locator('#error');
    }

    async goto(url){
        await this.page.goto(url);
    }

    async Login(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.SubmitBtn.click();
    }

    async getErrorMsg(){
        await this.errormsg.waitFor({state:'visible'});
        return await this.errormsg.textContent();
    }

    async SignUpLink(){
        await this.signupLink.click();
    }
}