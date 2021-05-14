
const { chromium } = require('playwright');

const GENCAT_URL = 'https://web.gencat.cat/ca/inici';
const SEARCH_WORD = 'agenda cultural';
const SEARCH_INPUT = '#cercadorOcultGoogle';
const SEARCH_ICON = '[aria-label="Cercar"]';

(async function gencatAutomateProcess () {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto(GENCAT_URL);
  await page.fill(SEARCH_INPUT, SEARCH_WORD);
  await page.click(SEARCH_ICON);
})();
