$(document).ready(function () {
    $(window).scroll((e) => {
        let pos_of_window = $(window).scrollTop() + $(window).height();

        if (pos_of_window < $('.content_first .content_title').offset().top) {
            $('.together_image img').removeClass('together_animate');
        }
        if (pos_of_window < $('.content_second .content_title').first().offset().top) {
            $('.snapshot_wrapper').removeClass('photo_wrapper_animate');
        }
        if (pos_of_window < $('.content_third .content_title').first().offset().top) {
            $('.video_wrapper').removeClass('photo_wrapper_animate');
        }

        $('.together_image img').each(function (e) {
            let pos_of_object = $(this).offset().top + $(this).outerHeight();

            if (pos_of_window > pos_of_object) {
                $(this).addClass('together_animate');
            }
        });

        $('.snapshot_wrapper').each(function (e) {
            let pos_of_object = $(this).offset().top + $(this).outerHeight();

            if (pos_of_window > pos_of_object / 2) {
                $(this).addClass('photo_wrapper_animate');
            }
        });

        $('.video_wrapper').each(function (e) {
            let pos_of_object = $(this).offset().top + $(this).outerHeight();

            if (pos_of_window > pos_of_object / 2) {
                $(this).addClass('photo_wrapper_animate');
            }
        });
    });
});