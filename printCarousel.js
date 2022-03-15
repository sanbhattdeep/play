const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.noon.com/');
    const carouselTitle = page.locator('//div[@id="__next"]//h3[contains(text(),"Selling fast")]');
    await carouselTitle.scrollIntoViewIfNeeded();
    const carouselItems = await page.$$('//div[@id="__next"]//h3[contains(text(),"Selling fast")]//parent::div//following-sibling::div//div[@title]');
    for (let i=0;i<carouselItems.length;i++) {
        console.log(await carouselItems[i].getAttribute('title'));
    }
    await browser.close();
})();