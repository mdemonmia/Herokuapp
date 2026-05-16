# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactlistPage.spec.js >> Contact list page test >> check row count
- Location: tests\ContactlistPage.spec.js:270:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 30
Received: 37
```

# Test source

```ts
  174 |         )
  175 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
  176 |     })
  177 | 
  178 |     test('Invalid data for postalcode and click to submit button',async({page})=>{
  179 |         const contact = new contactlistPage(page);
  180 |         await contact.clickAddContactBtn();
  181 |         await contact.getContactForm(
  182 |             data.newContact.missingPostalCodeContact.firstName,
  183 |             data.newContact.missingPostalCodeContact.lastName,
  184 |             data.newContact.missingPostalCodeContact.birthdate,
  185 |             data.newContact.missingPostalCodeContact.email,
  186 |             data.newContact.missingPostalCodeContact.phone,
  187 |             data.newContact.missingPostalCodeContact.address1,
  188 |             data.newContact.missingPostalCodeContact.address2,
  189 |             data.newContact.missingPostalCodeContact.city,
  190 |             data.newContact.missingPostalCodeContact.state,
  191 |             data.newContact.missingPostalCodeContact.postalcode,
  192 |             data.newContact.missingPostalCodeContact.country
  193 |         )
  194 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
  195 |     })
  196 | 
  197 |     test('Invalid data for country and click to submit button',async({page})=>{
  198 |         const contact = new contactlistPage(page);
  199 |         await contact.clickAddContactBtn();
  200 |         await contact.getContactForm(
  201 |             data.newContact.missingCountryContact.firstName,
  202 |             data.newContact.missingCountryContact.lastName,
  203 |             data.newContact.missingCountryContact.birthdate,
  204 |             data.newContact.missingCountryContact.email,
  205 |             data.newContact.missingCountryContact.phone,
  206 |             data.newContact.missingCountryContact.address1,
  207 |             data.newContact.missingCountryContact.address2,
  208 |             data.newContact.missingCountryContact.city,
  209 |             data.newContact.missingCountryContact.state,
  210 |             data.newContact.missingCountryContact.postalcode,
  211 |             data.newContact.missingCountryContact.country
  212 |         )
  213 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact');
  214 |     })
  215 | 
  216 |     test('valid data and click to submit button',async({page})=>{
  217 |         const contact = new contactlistPage(page);
  218 |         await contact.clickAddContactBtn();
  219 |         await contact.getContactForm(
  220 |             data.newContact.validContact.firstName,
  221 |             data.newContact.validContact.lastName,
  222 |             data.newContact.validContact.birthdate,
  223 |             data.newContact.validContact.email,
  224 |             data.newContact.validContact.phone,
  225 |             data.newContact.validContact.address1,
  226 |             data.newContact.validContact.address2,
  227 |             data.newContact.validContact.city,
  228 |             data.newContact.validContact.state,
  229 |             data.newContact.validContact.postalcode,
  230 |             data.newContact.validContact.country
  231 |         )
  232 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact?');
  233 |     })
  234 | 
  235 |     test('invalid data and click to submit button',async({page})=>{
  236 |         const contact = new contactlistPage(page);
  237 |         await contact.clickAddContactBtn();
  238 |         await contact.getContactForm(
  239 |             data.newContact.invalidContact.firstName,
  240 |             data.newContact.invalidContact.lastName,
  241 |             data.newContact.invalidContact.birthdate,
  242 |             data.newContact.invalidContact.email,
  243 |             data.newContact.invalidContact.phone,
  244 |             data.newContact.invalidContact.address1,
  245 |             data.newContact.invalidContact.address2,
  246 |             data.newContact.invalidContact.city,
  247 |             data.newContact.invalidContact.state,
  248 |             data.newContact.invalidContact.postalcode,
  249 |             data.newContact.invalidContact.country
  250 |         )
  251 |         const invalidmsg= await contact.getErrorMsg();
  252 |         expect(invalidmsg).toContain('Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.');
  253 |         console.log('invalid message:',invalidmsg);
  254 |     })
  255 | 
  256 |     test('check cancel button to redirect the back page',async({page})=>{
  257 |         const contact = new contactlistPage(page);
  258 |         await contact.clickAddContactBtn();
  259 |         await contact.clickCancelBtn();
  260 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
  261 |     })
  262 | 
  263 |     test('check logout button to redirect the back page',async({page})=>{
  264 |         const contact = new contactlistPage(page);
  265 |         await contact.clickAddContactBtn();
  266 |         await contact.clicklogoutBtn();
  267 |         expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/logout');
  268 |     })
  269 | 
  270 |     test('check row count',async({page})=>{
  271 |         const contact = new contactlistPage(page);
  272 |         await page.waitForSelector('.contactTableBodyRow');
  273 |         const count =await contact.CountContactRow();
> 274 |         expect(count).toBe(30);
      |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  275 |         console.log('row count is:',count);
  276 |     })
  277 | 
  278 |    test.only('check specific row name',async({page})=>{
  279 |         const contact = new contactlistPage(page);
  280 |         await page.waitForSelector('.contactTableBodyRow');
  281 |         await contact.clickContact('dilruba akter');
  282 |     })
  283 | })
```