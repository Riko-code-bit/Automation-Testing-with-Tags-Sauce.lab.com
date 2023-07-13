

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productLabel () {
        return $('.product_label');
    }

    async verifyProduct() {
        return await expect(await this.productLabel).toBeDisplayed()
    }

    // item 

    async item(productName) {
        return await $(`//div[.='${productName}']`)
    }

    async clickItem(produckName) {
        await (await this.item(produckName)).click()
    }

    get cartBtn() {
        return $(`//button[@class='btn_primary btn_inventory']`)
    }

    async clickCart() {
        await this.cartBtn.click()
    }

    async backBrowser() {
        await browser.back()
    }   

    get keranjang() {
        return $(`path`)
    }

    async clickKeranjang() {
        await this.keranjang.click()
    }

    // assertion in cart/keranjang page

    async assertionItem(productName) {
        return await expect(await this.item(productName)).toBeDisplayed()
    }
}



export default new ProductPage();
