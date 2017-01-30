$( document ).ready(function(){

    $('.col-lg-6, .col-md-6, .col-sm-6, .col-xs-12').on('click touchstart', function(){

        if($('.flip-container').hasClass('flip')){
            $('body').css({
                'overflow-y': 'hidden'
            });
        }
        else{
        $('body').css({
                'overflow-y': 'auto'
            }); 
        }
    });

    $(window).resize(function(){
            if ($(window).innerWidth() <= 768) {
                $('.propic').detach().insertBefore('.skills');
                $('.experience').detach().insertBefore('.education');
            }

            if ($(window).innerWidth() >= 768) {
                $('.propic').detach().insertAfter('.education');
                $('.experience').detach().insertAfter('.skills');
            }
    });

});