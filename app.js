// var Jimp = require('jimp');
var fs = require('fs')
var path = require('path');
// var filePath = path.resolve('./srcImage');
let files = fs.readdirSync('./srcImage');
 
for(let i = 0; i < files.length; i++){
  fs.rename(`srcImage/${files[i]}`,`destImage/pic${buZero(i+1,5)}.jpg`,function(){})
 }
 function buZero(num, length) {
  var len = (num + "").length;
  var diff = length - len;
  if(diff > 0) {
      return Array(diff).join("0") + num;
  }
  return num;
}
// open a file called "lenna.png"
/* generate(1)
  function generate(num){
    if(num > 2000) return
    Jimp.read('bg.jpg', (err, lenna) => {
      if (err) throw err;
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
        lenna.print(font, 10, 10, 'pic:'+num)
        .write('image/pic'+num+'.jpg')
        generate(num+1)
      });
    });
  } */

