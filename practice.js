$(document).ready(function() {

  console.log('Im ready!');
  // var $body = $('body');
  // var $h1 = $('<h1>' + 'FlyCheap' + '</h1>');
  // var $flightView = $('')

  // $h1.appendTo($body);

// ----------------------------------------------------------------------------
// Stubbed Data for a Single Trip
// ----------------------------------------------------------------------------
  var sampleData = [
    {
      currentDollarPrice: 430.00,
      currentPointsPrice: 28783,
      airline: 'Southwest',
      origin: 'SFO',
      destination: 'LGA',
      numberOfFlights: 3,
      travelTime: 'Amount of time in the air.',
      flights: {
        flight1: {
          flightNumber: 1428,
          departFrom: 'SFO',
          arriveAt: 'DEN',
          departTime: 'Date Data 1',
          arriveTime: 'Date Data 2'
        },
        flight2: {
          flightNumber: 4082,
          departFrom: 'DEN',
          arriveAt: 'LGA',
          departTime: 'Date Data 1',
          arriveTime: 'Date Data 2'
        }
      },
      lastView: {
        lastDollarPrice: {
          price: 500.00,
          purchased: false
        },
        lastPointsPrice: {
          price: 35000,
          purchased: false,
        },
        purchaseMethod: null
      }
    }
  ];
// ----------------------------------------------------------------------------

  // var $imageLibrary = $('table tbody');
  // var $img = $('#photoView img');
  // var $imgTitle = $('#imgTitle');
  // var $imgRating = $('#imgRating');
  // var $ratingSelect = $('#ratingSelect');

  // sampleImageData.forEach(function(item) {
  //   console.log(item.title);
  //   $imageLibrary.append('<tr><td>' + item.title + '</td></tr>');
  // });

  // var onImageLibraryEntryClick = function() {
  //   var title = $(this).text();
  //   var imageLibraryEntryClicked = sampleImageData.filter(function(item) {
  //     return item.title === title;
  //   });

  //   $img.attr('src', imageLibraryEntryClicked[0].url);
  //   $imgTitle.text(imageLibraryEntryClicked[0].title);
  //   $imgRating.text(imageLibraryEntryClicked[0].rating);
  // };

  // var onRatingSelectChange = function () {
  //   var sampleDataIndex;
  //   var newRating = $ratingSelect.val();
    
  //   $imgRating.text(newRating);
  //   sampleImageData.forEach(function(item, index) {
  //     if (item.title === $imgTitle.text()) {
  //       sampleDataIndex = index;
  //     }
  //   });
    
  //   sampleImageData[sampleDataIndex].rating = newRating;
  //   $ratingSelect.val('Rating');
  // };


  // $imageLibrary.on('click', 'tr', onImageLibraryEntryClick);
  // $ratingSelect.on('change', onRatingSelectChange);

});
