const { webkit } = require('playwright');

(async () => {
    const browser = await webkit.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');
    //logic to handle the iframes
    const frame1 = page.frame({ url: /\/sample/ });
    // locating h1 element handle inside frame 
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());
    const heading2 = page.frameLocator('#frame2').locator('h1');
    console.log(await heading2.innerText());
    await browser.close();
})();// function calls itself