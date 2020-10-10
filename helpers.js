const puppeteer = require('puppeteer');

const createNewpage = async (headless, executablePath) => {
    let browser;
    let page;
    try {
        browser = await puppeteer.launch({
            headless,
            executablePath
        });
        page = await browser.newPage();
    } catch (error) {
        console.log(error);
    }
    return Promise.resolve(page);
}

const loginFaceBook = async (page, email, pwd, delay = 1) => {
    try {
        await page.setDefaultNavigationTimeout(1000000);
        await page.setViewport({ width: 1000, height: 600 });
        await page.goto('https://www.facebook.com',{ waitUntil: "networkidle0" });
        await page.waitForSelector('#email');
        await page.type('#email', email);
        await page.type('#pass', pwd);
        await page.click(`[type="submit"]`);
        await page.waitForNavigation();
        await page.waitForSelector(`div`);
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
    await page.waitFor(delay*1000*60);
    return Promise.resolve(page);
}

const getStyleSelector = () => {
    const styles = [
        'div[aria-label="Solid red, background"]',
        'div[aria-label="Beige illustration, background image"]',
        'div[aria-label="Dark purple illustration, background image"]',
        'div[aria-label="Pink and purple hearts on a pink background, background image"]',
        'div[aria-label="Black illustration, background image"]',
        'div[aria-label="Dark purple illustration, background image"]'
    ];
    return styles[Math.floor((Math.random() * (styles.length-1)) + 0)]
}

const processPost = async (page, groupId, sentence) => {
    try {
        await page.goto('https://www.facebook.com/groups/'+groupId, { waitUntil: "networkidle0" });
        await page.waitFor(5000);
        await page.click('div[class="m9osqain a5q79mjw jm1wdb64 k4urcfbm"]')
        await page.waitFor(5000)
        for (let i = 0; i < sentence.length; i++) {
            await page.keyboard.press(sentence[i]);
            if (i === sentence.length - 1) {
                try {
                    await page.waitFor(1000);
                    await page.click('img[src="/images/composer/SATP_Aa_square-2x.png"]');
                    await page.waitFor(2000);
                    await page.click(getStyleSelector());
                } catch (error) {
                    console.log(error);
                }
                await page.waitFor(2000);
                await page.click('div[aria-label="Post"]')
                await page.waitFor(5000)
            }
        }
        await page.waitFor(5000)
        return Promise.resolve(page)
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}

module.exports = {
    createNewpage,
    loginFaceBook,
    processPost
}