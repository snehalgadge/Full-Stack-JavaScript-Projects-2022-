file1 = require("./countries.js");
file2 = require("./web_tech.js");

console.log(file1.countries);
console.log(file2.web_tech);

console.log("I am expecting the 2nd index element of countries=> "+file1.countries[2] +
" and 1st element of web_tech=> "+ file2.web_tech[1]);
