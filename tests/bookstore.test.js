const { chromium } = require('playwright');

describe('UI tests for bookstore using playwright', () => {

    jest.setTimeout(30000);

    let browser = null;
    let page = null;
    let context = null;

    beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should load page', async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('should be able to search for eloquent javascript', async () => {
        await page.fill('#searchBox', 'eloquent');
    });

    test('Should check if book image is okay', async () => {
        let bookImage = await page.locator('div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(1) img');
        expect(await bookImage.getAttribute('src')).not.toBeNull();
    });

    test('Should check if title is okay', async () => {
        let bookTitle = await page.locator('div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2) a');
        expect(await bookTitle.innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test('Should check if author is okay', async () => {
        let bookTitle = await page.locator('div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(3)');
        expect(await bookTitle.innerText()).toBe('Marijn Haverbeke');
    });

    test('Should check if publisher is okay', async () => {
        let bookTitle = await page.locator('div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(4)');
        expect(await bookTitle.innerText()).toBe('No Starch Press');
    });
});