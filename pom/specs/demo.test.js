const { chromium } = require('playwright');
const LoginPage = require('../models/Login.page');
const HomePage = require('../models/Home.page');
const { TestWatcher } = require('@jest/core');

describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async () => {
        // we launch browser and navigate to the loginpage 
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.navigate();
    });

    afterAll(async () => {
        await context.close();
        await browser.close();
    });

    test('should be able to login', async () => {
        await loginPage.login('username', 'password');
        expect(await page.title()).not.toBeNull();
    });

    test('Should be logged in as Jack Gomez', async () => {
        expect(await homePage.getUserName()).toBe('Jack Gomez');
    });

    test('Should have total balance of $350', async () => {
        expect(await homePage.getBalance('total')).toBe('$350');
    });

    test('Should have credit available of $17800', async () => {
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    });

    test('Should have due today of $180', async () => {
        expect(await homePage.getBalance('due')).toBe('$180');
    });
});