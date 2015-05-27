$(document).ready(function() {

  console.log("page loaded!");

  // seedButtonListener();
  gifButtonListener();

});


// var seedButtonListener = function() {

//   $('#seedBTN').on('click', function(){

//     var allImgs = $('.gif_img');
//     var dataToSend = []
//     var arrayLength = allImgs.length

//     for(var i = 0; i < arrayLength; i += 1) {
//       dataToSend.push(allImgs[i].src)
//     }

//     // console.log(dataToSend)

//     var request = $.ajax({
//       type: 'POST',
//       url: '/pictures',
//       data: {'imgs': JSON.stringify(dataToSend)}
//     })

//     request.done(function(response){
//       console.log(response);
//       console.log('There and back again...Yay!')
//     });


//     request.fail(function(response){
//       console.log(response);
//       console.log('I have failed at all the things...')
//     });

//   })
// }


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
