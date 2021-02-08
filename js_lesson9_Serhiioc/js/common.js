$(document).ready(function () {
 
    let phoneFields = $(".phone");
    let im = new Inputmask("+38 (099) 999-99-99");
    im.mask(phoneFields);

    
    $(".js-form").submit(function (evt) {
        evt.preventDefault();

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
        });
    
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "mail.php",
                data: $(".js-form").serialize(),
                success: function (response) {
                   console.log(response);
                   console.log("good");
                   $(".js-form").reset;
                },
                errors: function() {
                    console.log("bad");
                }
            });

    });
    
});