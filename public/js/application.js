$(document).ready(function() {

  console.log("page loaded!");

  createUserListener();
  gifButtonListener();

});


var createUserListener = function() {
  $('#createUser').on('click', function (event){
    event.preventDefault();

    var request = $.ajax({
      url: "/users",
      type: "POST",
      data: { "username": "TimTomToeBob" }
    })

    request.done(function(response){

      console.log(response);
      console.log(arguments);

      console.log('YAYAYAYAYA');
      $('body').append('<h1>I made a new ' + response.username + '</h1>');
    })

    request.fail(function(response){
      console.log(response);
      console.log(arguments);
      console.log('FAILLLLL');
    })

  })
};


var gifButtonListener = function() {

  $('#gifBTN').on('click', function(event){
    event.preventDefault();

    var request = $.ajax({
      type: 'GET',
      url: 'http://api.giphy.com/v1/gifs/trending',
      data: {"api_key": "dc6zaTOxFJmzC"}
    })

    request.done(function(response){

      console.log('YAY');
      console.log(arguments);

      // Work with response data to get the thing you want.

      // Just some code for selecting a random array element.
      var rand = response.data[Math.floor(Math.random() * response.data.length)];

      console.log(rand.images);
      var img = rand.images.fixed_width.url

      // Actual DOM manipulation.
      $('.gif_container').append('<img class="gif_img" src='+ img +'>')

    });

    request.fail(function(response){
      console.log("ohhh noooooo");
    });

  });

}
