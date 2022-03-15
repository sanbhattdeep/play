const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: { dir: './recordings' }
    });
    const page = await context.newPage();
    // navigating to site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    //click on start button
    await page.click('button');
    await page.waitForSelector('#loading')
    await page.waitForSelector('#loading', { state: 'hidden' });
    await page.waitForTimeout(100);
    await context.close();
    await browser.close();
})();