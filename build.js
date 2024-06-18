const version = 23;
const day = 18;
const expiresDay = 1;
const fileName =  `./release/draft-dejong-remotestorage-${version}.txt`;

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

let outStream = fs.createWriteStream(fileName);

while (line < lines.length) {
  lines[line] = lines[line].split('${EXPIRES}').join(expires);
  lines[line] = lines[line].split('${DATE}').join(date);
  lines[line] = lines[line].split('${YEAR}').join(year);
  lines[line] = lines[line].split('${VERSION}').join(version);
  outStream.write(lines[line] + '\n');
  if (lines[line].length > 72) {
    outStream.write('123456789012345678901234567890123456789012345678901234567890123456789012*****\n');
    break;
  }
  line++;
  if (line > 7 && line%43 === 7) {
    outStream.write((page < 10 ? breaker1a : breaker1b) + page + breaker2 + (line < lines.length ? breaker3 : '') +  '\n');
    page++;
  }
}
while (line%43 !== 7) {
  outStream.write('\n');
  line++;
}
outStream.write((page < 10 ? breaker1a : breaker1b) + page + breaker2 + (line < lines.length ? breaker3 : '') + '\n');
outStream.close();
