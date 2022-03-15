const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://applitools.com/');
  //screenshot code
  await page.screenshot({path:'screenshot.png'});
  //take screenshot of element
  const logo = page.locator('.logo');
  await logo.screenshot({path:'logo.png'})
  //take fullpage screenshot
  await page.screenshot({path:'fullpage.png',fullPage:true});
  await browser.close(); 
})();// function calls itself