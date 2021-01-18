
let btl = document.querySelector(".top"),
    btr = document.querySelector(".right"),
    bbr = document.querySelector(".bottom"),
    bbl = document.querySelector(".left");

// document.querySelector(".sample").style.borderRadius= btl+`px `+btr+`px `+bbr+`px `+bbl+`px`;

// document.querySelector(".top").addEventListner("change", function () {
//         rtl = btl.value
//         document.querySelector(".sample").style.borderTopLeftRadius = btl+`px`;
//     });
 

btl.addEventListener("change", function () {
    document.querySelector(".sample").style.borderStartStartRadius= btl.value+`px`;
});

btr.addEventListener("change", function () {
    document.querySelector(".sample").style.borderStartEndRadius= btr.value+`px`;
});

bbr.addEventListener("change", function () {
    document.querySelector(".sample").style.borderEndStartRadius= bbr.value+`px`;
});

bbl.addEventListener("change", function () {
    document.querySelector(".sample").style.borderEndEndRadius= bbl.value+`px`;
});

