
let btl = document.querySelector(".top").value,
    btr = document.querySelector(".right").value,
    bbr = document.querySelector(".bottom").value,
    bbl = document.querySelector(".left").value;

document.querySelector(".sample").style.borderRadius= btl+`px `+btr+`px `+bbr+`px `+bbl+`px`;

document.querySelectorAll(".range").addEventListner("click", function() {
console.log(btl);

});

