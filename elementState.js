const { chromium } = require('playwright');

(async () => {
   const browser = await chromium.launch();
   const page = await browser.newPage();
   await page.goto('https://demoqa.com/automation-practice-form');
   //print the element state
   const firstName = page.locator('#firstName');
   const sportsCheck = page.locator('#hobbies-checkbox-1');
   const submitBtn = page.locator('#submit');  
   
   console.log(await firstName.isDisabled());
   console.log(await firstName.isEnabled());
   console.log(await firstName.isEditable());
   console.log(await sportsCheck.isChecked());
   console.log(await sportsCheck.isVisible());
   console.log(await submitBtn.isHidden());
   console.log(await submitBtn.isVisible());
   await browser.close();
})();//function calls itself