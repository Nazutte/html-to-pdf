// var fs = require('fs');
// var pdf = require('html-pdf');
// var html = fs.readFileSync('./page/home.html', 'utf8');
// var options = { 
//   format: 'A4',
//   orientation: "landscape",
// };

// pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res);
// });

const cashflow = require('./cashflow-obj.json');
console.log(cashflow);
const openingBalance = cashflow.cashflowObj[0].openingBalance;

let htmlOpeningBalance = '';

openingBalance.forEach(opening => {
  htmlOpeningBalance += `<td class="padding-3"><span>${(Math.round(opening * 100) / 100).toFixed(2)}</span></td>\n`;
});

console.log(htmlOpeningBalance);