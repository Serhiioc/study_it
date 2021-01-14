let arr = {
    "eng": ["apple", "orange", "lime", "banana"],
    "rus": ["яблоко", "апельсин", "лайм"]
}

let btneng = document.querySelector(".button--eng");

let btnrus = document.querySelector(".button--rus");

btneng.addEventListener("click", function() {
    for (let i=0; i<arr["eng"].length; i++) {
        console.log(arr["eng"][i])
    }
    // console.log(arr ["eng"]);
})

btnrus.addEventListener("click", function() {
    console.log(arr ["rus"]);
})