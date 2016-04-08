
$( document ).ready(function() {
  //var a = 4;
  //console.log(a);
  $('h1').css('color', 'blue');
  $('body').css('background-color', '#EFF');
  $('#everything').css('font-size', '1.5rem');
  $('#everything').prepend('<button id="buttonFadeOut" class="btn btn-primary">Fade Out</button>');
  $('#buttonFadeOut').on('click', function() {
    $('h1').fadeOut('slow');
  });
  $('#everything').prepend('<button id="buttonFadeIn" class="btn btn-primary">Fade In</button>');
  $('#buttonFadeIn').on('click', function() {
    $('h1').fadeIn(5000);
  });
  $('#change-me').css('display', 'inline');
  $('#secret').css('display', 'inline');
  $('li').append('<p>New text</p>');
  
  var newDiv = $('<h1 class="solution text-center">A new H1 in the header</h1>');
  $('header').append(newDiv);

  $('header').append('<button id="changebtn" class="btn btn-primary">Change</button>');
  $('#changebtn').on('click', function() {
  		newDiv.text("You clicked the button!");
  	});

  //add a click handler to the link:
  //For click and most other events, you can prevent the default behavior by calling 
  //event.preventDefault() in the event handler:
  /*$( 'a' ).click( function( event) {
  	alert( 'This prevents default link click behavior');
  	event.preventDefault();
  });*/

  //add the .addClass() call to the script:
  $('a').addClass('test');
  //To remove an existing class, use .removeClass():
  $('a').removeClass('test');
  
  // the link slowly disappears when clicked.
  $('a').click( function(event) {
  	event.preventDefault();
  	$( this ).hide( 'slow' );
  });


  });