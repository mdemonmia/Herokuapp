export class contactlistPage{
    constructor(page){
        this.page=page;
        this.Add_contactBtn= page.locator('#add-contact');
        this.contactRow = page.locator('.contactTableBodyRow');
        this.firstName= page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.birthdate= page.locator('#birthdate');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.sAddress1 = page.locator('#street1');
        this.sAddress2= page.locator('#street2');
        this.cityInput = page.locator('#city');
        this.stateInput =  page.locator('#stateProvince');
        this.postalCode = page.locator('#postalCode');
        this.countryInput = page.locator('#country');
        this.submitBtn = page.locator('#submit');
        this.cancelBtn = page.locator('#cancel');
        this.errormsg = page.locator('#error');
        this.logoutBtn= page.locator('#logout')
    }

    async getContactForm(firstname,lastname,birthdate,email,phone,address1,address2,city,state,postalcode,country){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.birthdate.fill(birthdate);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.sAddress1.fill(address1);
        await this.sAddress2.fill(address2);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.postalCode.fill(postalcode);
        await this.countryInput.fill(country);
        await this.submitBtn.click();

    }

    async clickAddContactBtn(){
        await this.Add_contactBtn.click();
    }

    async getErrorMsg(){
        await this.errormsg.waitFor({state:'visible'});
        return await this.errormsg.textContent();
    }

    async CountContactRow(){
        return await this.contactRow.count();
    }

    // async clickContact(name){
    //     const rows = await this.contactRow.count();
    //     for(let i=0;i<rows;i++){
    //         const row = this.contactRow.nth(i);
    //         // const td0 = await row.locator('td').nth(0).textContent();
    //         // const td1 = await row.locator('td').nth(1).textContent();
    //         // const td2 = await row.locator('td').nth(2).textContent();
    //         // console.log(`row ${i} → td0: "${td0}" | td1: "${td1}" | td2: "${td2}"`);
    //         const fullName = row.locator('td').nth(1);
    //         const text = (await fullName.textContent()).trim();
    //         if(text.toLowerCase()===name.toLowerCase()){
    //             await row.click();
    //             await this.page.waitForURL(/contactDetails/);
    //             break;
    //         }
    //     }
    // }

    async clickContact(name){
    console.log('clicking contact:', name);
    await this.page.locator('.contactTableBodyRow')
        .filter({ hasText: name })
        .click();
    await this.page.waitForURL(/contactDetails/);
    console.log('navigated to:', this.page.url());
}
    async clickCancelBtn(){
        await this.cancelBtn.click();
    }

    async clicklogoutBtn(){
        await this.logoutBtn.click();
    }

}