var fs = require('fs'),
  lines = fs.readFileSync('source.txt').toString().split('\n'),
  breaker1a = '\n\nde Jong                                                         [Page ',
  breaker1b = '\n\nde Jong                                                        [Page ',
  breaker2 = ']',
  breaker3 = '\n\nInternet-Draft              remoteStorage                  November 2015\n\n',
  page = 1, line = 0;

while (line < lines.length) {
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
