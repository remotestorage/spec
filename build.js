var fs = require('fs'),
  lines = fs.readFileSync('source.txt').toString().split('\n'),
  breaker1a = '\n\nde Jong                                                         [Page ',
  breaker1b = '\n\nde Jong                                                        [Page ',
  breaker2 = ']\n'
    +'\n'
    +'Internet-Draft              remoteStorage                  December 2013\n\n\n',
  page = 1, line = 0;

while (line < lines.length) {
  console.log(lines[line]);
  line++;
  if (line > 7 && line%43 === 7) {
    console.log((page < 10 ? breaker1a : breaker1b) + page + breaker2);
    page++;
  }
}