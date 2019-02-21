var Jimp = require('jimp');
 
// open a file called "lenna.png"
generate(1)
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
  }

