$(document).ready( function() {
    
    $('#dropdown').on('mouseenter', function() {
        $('.submenu').show();
    })

    $('#dropdown li .subitem').on('mouseleave', function () {
        $('.submenu').hide();
    })
    //$('.submenu').on('mouseleave').hide('.submenu')


    /*
    var menuItem = ['Item 1', 'Item 2', 'Item 3'];
   
    $.each( menuItem , function( i , val ){
        $('#dropdown').on('mouseenter', function ()
        {
            $('<li />', {  text: val }).appendTo('#dropdown')
        });
    });
    */

})
