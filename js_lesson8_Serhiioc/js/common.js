$(document).ready(function () {

    // Смена фона
    $(document).keyup(function (evt) {
        if (evt.code == "Space") {
        let hex = '#';
        let range = 'ABCDEF0123456789';
            
        for (var i = 0; i < 6; i++ ) {
            hex += range.charAt(Math.floor(Math.random() * range.length));
        }
            $(".content-bg").css("backgroundColor", hex);
            $(".bg-desc").text( `color: ${hex};`);
        } 
        
    });

    // смена радиуса

    $(".top").val(0);
    $(".right").val(0);
    $(".bottom").val(0);
    $(".left").val(0);

   
    function viewBorder () {
        let bpreview = 'border: '+$(".top").val()+'px '+$(".right").val()+'px '+$(".bottom").val()+'px '+$(".left").val()+'px;';
        $(".sample").html(bpreview);
    };
    
    $(".range").on("input", function() {
        let border = +$(".top").val()+'px '+$(".right").val()+'px '+$(".bottom").val()+'px '+$(".left").val()+'px' ;
        $(".sample").css('border-radius', border);
        viewBorder();
    });

    // $(".right").on("input", function() {
    //     let border = +$(".top").val()+'px '+$(".right").val()+'px '+$(".bottom").val()+'px '+$(".left").val()+'px' ;
    //     $(".sample").css('border-radius', border);
    //     viewBorder();
    //     console.log(border);
    // });

    // $(".bottom").on("input", function() {
    //     $(".sample").css('border-end-end-radius', $(this).val()+'px');
    //     viewBorder();
    //     console.log();
    // });

    // $(".left").on("input", function() {
    //     $(".sample").css('border-end-start-radius', $(this).val()+'px');
    //     viewBorder();
    // });

   

    // Вывод масива в поле
    let arr = {
        "eng": ["apple", "orange", "lime", "banana"],
        "rus": ["яблоко", "апельсин", "лайм"]
    }

    $(".button--eng").on("click", function() {
            $(".desc-array").html(`${arr["eng"]}`);
        })

    $(".button--rus").on("click", function() {
        $(".desc-array").html(`${arr["rus"]}`);
        })

});