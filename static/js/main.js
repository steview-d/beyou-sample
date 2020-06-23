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
});
