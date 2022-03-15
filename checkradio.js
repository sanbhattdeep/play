const { firefox } = require('playwright');

(async () => {

    const browser = await firefox.launch({headless:false,slowMo:400});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    //click second check box
    const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]');
    await checks[1].check();
    await checks[0].uncheck();
    //click second radio button
    const radio = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]');
    await radio[1].check();
    await radio[0].uncheck();
    await browser.close();
})();