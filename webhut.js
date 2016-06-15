$(document).ready( function() {
    
    $('#dropdown').on('mouseenter', function () {
        $('.submenu').show();
    })

    $("#dropdown").on('mouseleave', function () {
        $('.submenu').hide();
    })
})
