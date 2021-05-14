const { chromium } = require('playwright');
const expect = require('expect');

const GENCAT_URL = 'https://web.gencat.cat/ca/inici';
const SEARCH_ICON = '[aria-label="Cercar"]';

describe('Given a chromium', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });
  afterAll(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  describe('When is go to GENCAT_URL ', () => {
    test('Then will go to gencat.cat web page', async () => {
      await page.goto(GENCAT_URL);
      expect(await page.title()).toBe('Inici. gencat.cat');
    });
    describe('And is click in SEARCH_ICON', () => {
      test('Then will go to  cercador page', async () => {
        await page.goto(GENCAT_URL);
        await page.click(SEARCH_ICON);
        expect(await page.title()).toBe('Cercador. gencat.cat');
      });
    });
  });
});
