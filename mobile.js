const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext({
        ...iPhone, // spread operator unpacks iPhone const
        permissions: ['geolocation'], // allows geolocation
        geolocation: { latitude: 19.432608, longitude: -99.133209 }, // Mexico City coordinates
        locale: 'fr-FR' // French from France
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000);
    await browser.close();
})();