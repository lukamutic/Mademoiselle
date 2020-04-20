$(document).ready(function () {

    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }

    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });

//    ANIMATION
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
        animateHeader();
    });

    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            autoplay: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    //   Animate Header function:
    function animateHeader() {
        let top = $(window).scrollTop();
        if (top > 100) {
            $('header').addClass('smallHeader');
        } else {
            $('header').removeClass('smallHeader');
        }
    }

//     Validacija / (validation)

    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true
                    }

                },
                messages: {

                    name: {
                        required: 'Name & Surname* is required field.'
                    },
                    email: {
                        required: 'Email* is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    subject: {
                        required: 'Subject* is required field.'
                    },
                    message: {
                        required: 'Message* is required field.'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }



});

