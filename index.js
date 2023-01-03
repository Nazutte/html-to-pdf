const fs = require('fs');
const puppeteer = require('puppeteer')
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/page/home.html', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4', landscape: true, printBackground: true });
  await browser.close();

  fs.writeFile('./cpr.pdf', pdf, err => {
    if (err) {
      console.error(err);
    }
  });
}

printPDF();