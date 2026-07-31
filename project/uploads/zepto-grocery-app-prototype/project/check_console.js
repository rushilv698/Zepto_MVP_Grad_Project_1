const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('file:///Users/rushilv698/NextLeap/Grad%20Project%201/Part-3/zepto-grocery-app-prototype/project/Zepto%20Prototype%20v3.dc.html');
  
  // Wait a moment for rendering
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
})();
