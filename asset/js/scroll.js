var scroll = function() {
        $(window).scroll(function() {
            let height =  $(window).scrollTop();
            if(height>10) {
                $('.navs').css("background-color", "rgb(53, 92, 125,.8)");
                $('.topnavs').css("background-color", "rgb(53, 92, 125,.8)");
            }
            else {
                $('.navs').css("background-color", "rgb(53, 92, 125)");
                $('.topnavs').css("background-color", "rgb(53, 92, 125)");
            }
        });
}

scroll();


$(document).ready(scroll);