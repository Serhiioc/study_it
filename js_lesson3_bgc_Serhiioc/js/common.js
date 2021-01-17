
// document.addEventListener("DOMcontentloaded", function() {
   

// });

document.addEventListener("keydown", function (evt) {
    if (evt.code == "Space") {
    let hex = '#';
    let range = 'ABCDEF0123456789';

    for (var i = 0; i < 6; i++ ) {
      hex += range.charAt(Math.floor(Math.random() * range.length));
    }
     document.querySelector("body").style.backgroundColor = hex;
    } 
});
  