document.addEventListener("DOMContentLoaded", function() {

    // Генерация цвета

    document.addEventListener("keyup", function (evt) {
        if (evt.code == "Space") {
        let hex = '#';
        let range = 'ABCDEF0123456789';
            
        for (var i = 0; i < 6; i++ ) {
            hex += range.charAt(Math.floor(Math.random() * range.length));
        }
            document.querySelector(".content-bg").style.backgroundColor = hex;
            document.querySelector(".tab-bg").style.backgroundColor = hex;
            document.querySelector(".desc-bg").innerHTML = `color: ${hex};`;
        } 
        
    });

    // Генерация радиуса

    let btl = document.querySelector(".top"),
        btr = document.querySelector(".right"),
        bbr = document.querySelector(".bottom"),
        bbl = document.querySelector(".left"),
        box = document.querySelector(".sample");
    let brv;

    function prev () {
        brv = `border-radius: ${btl.value}px ${btr.value}px ${bbr.value}px ${bbl.value}px;`;
        box.innerHTML = brv;
    };


    btl.addEventListener("input", function () {
        document.querySelector(".sample").style.borderStartStartRadius= btl.value+`px`;
        prev();
    });

    btr.addEventListener("input", function () {
        document.querySelector(".sample").style.borderStartEndRadius= btr.value+`px`;
        prev();
    });

    bbr.addEventListener("input", function () {
        document.querySelector(".sample").style.borderEndStartRadius= bbr.value+`px`;
        prev();
    });

    bbl.addEventListener("input", function () {
        document.querySelector(".sample").style.borderEndEndRadius= bbl.value+`px`;
        prev();
    });


    // Отправка формы


    let phoneFields = document.querySelector(".phone");
    let im = new Inputmask("+38 (099) 999-99-99");
    im.mask(phoneFields);

    new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            name: {
                required: "False",
                minLength: "Короткое имя"
            },
            email: {
                required: "False",
                email: "Не верю"
            },
            phone: {
                required: "False"
            }
        },
    
        submitHandler: function (form) {
            let xhr = new XMLHttpRequest();

            xhr.open("POST", "mail.php", true);

            let FormData = new FormData(form);

            xhr.addEventListener("load", function() {
                if( xhr.readyState === 4) {
                    switch (xhr.status) {
                        case 200:
                            console.log("Form send");
                            form.reset();
                            break;
                        case 404:
                            console.log("Warning");
                            break;
                        default:
                        console.log("Error server");
                        break;
                    }
                }
            });

            xhr.send(FormData);
        },
    });

    // Работа табов

    let tabSelect = document.querySelectorAll(".tab-item"),
        tabContent = document.querySelectorAll(".tab-content");


    tabContent[0].classList.add("tab-content--active");

    tabSelect[0].classList.add("tab-item--active");

    tabSelect[0].classList.add("tab-bg");

    
    function changebg (tabnum) {
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("tab-content--active");
        }
        tabContent[tabnum-1].classList.add("tab-content--active");
    }



    function showContent (tabnumber) {
        for (let i = 0; i < tabContent.length; i++) {
            tabSelect[i].classList.remove("tab-item--active");
        }
        tabSelect[tabnumber-1].classList.add("tab-item--active");

       
    }

    tabSelect.forEach(elem => {
        elem.addEventListener("click", function () {
            if (elem.dataset.tabnumber == 1) {
                tabSelect[0].classList.add("tab-bg")
                tabSelect[0].classList.remove("tab-item--default")
             } else {
                tabSelect[0].classList.remove("tab-bg")
                tabSelect[0].classList.add("tab-item--default")
            }
        });
    });


    tabSelect.forEach(elem => {
        elem.addEventListener("click", () => {
            showContent(elem.dataset.tabnumber);
            changebg(elem.dataset.tabnumber);
        });
    });




});