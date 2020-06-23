$(document).ready(function () {
    // Set Flickity defaults
    var fOptions = {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
    };

    // center carousel items on page load when width > 768px
    if (matchMedia('screen and (min-width: 768px)').matches) {
        fOptions.cellAlign = 'center';
    }

    // initialise flickety carousel
    $('.cbd-carousel-container').flickity(fOptions);

    // adjust item alignment to left or center, based on current width
    $(window).on('resize', function () {
        if ($(this).width() > 575) {
            fOptions.cellAlign = 'center';
        } else {
            fOptions.cellAlign = 'left';
        }
        $('.cbd-carousel-container').flickity(fOptions);
    });

    // cbd product slider
    const $cbdSlider = $('.cbd-carousel-container');
    const dotPosArray = [1, 2, 3, 1, 2, 3];

    $cbdSlider.on('change.flickity', function (event, index) {
        $('.cbd-slider').children().removeClass('cbd-dot-active');
        $('.cbd-slider')
            .find("[data-dot-pos='" + dotPosArray[index] + "']")
            .addClass('cbd-dot-active');
    });
});
