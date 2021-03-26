const puppeteer = require('puppeteer');
const fs = require("fs");

const dateFolder = new Date().toISOString().slice(0, 7);
const dateFile = new Date().getDate();

if (!fs.existsSync('screen')) {
    fs.mkdirSync('screen');
}


(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://dette.gcousin.site');

    await page.setViewport({
        width: 1500,
        height: 800
    });

    if (!fs.existsSync('screen/' + dateFolder)) {
        fs.mkdirSync('screen/' + dateFolder);
    }

    await page.screenshot({ path: 'screen/' + dateFolder + '/' + dateFile + '.png' });
    await browser.close();
})();
