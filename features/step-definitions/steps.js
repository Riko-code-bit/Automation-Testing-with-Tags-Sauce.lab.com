import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import productPage from '../pageobjects/product.page.js';



Given(`Im on login Page`, async () => {
    await LoginPage.open()
});

When(`Im trying to login with correct user`, async () => {
    await LoginPage.login(`standard_user`, `secret_sauce`)
});

Then(`Im succesfully logged in and in product Page`, async () => {
    await productPage.verifyProduct()
});

// negative functional

When(`Im trying to login with incorrect user`, async () => {
    await LoginPage.login(`locked_out_user`, `secret_sauce`)
});

Then(`Im locked in login page`, async () => {
    await LoginPage.messageAlert()
    await browser.pause(2000)
})

// shopping 

When(`Im adding item to cart:`,async (table) => {
    let data = table.hashes()
    for(let i = 0; i < data.length; i++) {
        await productPage.clickItem(data[i].productName)
        await browser.pause(2000)
        await productPage.clickCart()
        await productPage.backBrowser()
        await browser.pause(2000)

    }
})

Then(`Im checking and assertion if Im successfuly added item to cart:`, async (table) => {
    let dataItem = table.hashes()
    await productPage.clickKeranjang()
    for(let i = 0; i <dataItem.length; i++) {
        await productPage.assertionItem(dataItem[i].productName)
        await browser.pause(2000)
}

})