const version = 12;
const day = 8;
const expiresDay = 1;

if (version % 2 === 0) {
  month = 'December';
  expiresMonth = 'June';
} else {
  month = 'June';
  expiresMonth = 'December';
}
const year = Math.floor(2013 + (version - 1) / 2);
const expiresYear = Math.floor(2013 + version / 2);
const date = `${day} ${month} ${year}`;
const expires = `${expiresDay} ${expiresMonth} ${expiresYear}`;
const monthYear = (month  === 'June' ? '    ' : '') + month + ' ' + year;

var fs = require('fs'),
  lines = fs.readFileSync('source.txt').toString().split('\n'),
  breaker1a = '\n\nde Jong                                                         [Page ',
  breaker1b = '\n\nde Jong                                                        [Page ',
  breaker2 = ']',
  breaker3 = '\n\nInternet-Draft              remoteStorage                  '+ monthYear + '\n\n',
  page = 1, line = 0;

while (line < lines.length) {
  lines[line] = lines[line].split('${EXPIRES}').join(expires);
  lines[line] = lines[line].split('${DATE}').join(date);
  lines[line] = lines[line].split('${YEAR}').join(year);
  lines[line] = lines[line].split('${VERSION}').join(version);
  console.log(lines[line]);
  if (lines[line].length > 72) {
    console.log('123456789012345678901234567890123456789012345678901234567890123456789012*****');
    break;
  }
  line++;
  if (line > 7 && line%43 === 7) {
    console.log((page < 10 ? breaker1a : breaker1b) + page + breaker2 + (line < lines.length ? breaker3 : ''));
    page++;
  }
}
while (line%43 !== 7) {
  console.log('');
  line++;
}
console.log((page < 10 ? breaker1a : breaker1b) + page + breaker2 + (line < lines.length ? breaker3 : ''));
