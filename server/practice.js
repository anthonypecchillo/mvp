$(document).ready(function() {

  console.log('Im ready!');

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
          departTime: '5:55am',
          arriveTime: 'Date Data 2'
        },
        flight2: {
          flightNumber: 4082,
          departFrom: 'DEN',
          arriveAt: 'LGA',
          departTime: 'Date Data 1',
          arriveTime: '3:50pm'
        }
      },
      lastView: {
        lastDollarPrice: {
          price: 489,
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


// ----------------------------------------------------------------------------
  // All Possible Southwest Airport Codes
  // ----------------------------------------------------------------------------
  var allCodes = 
  ['ALB',
   'ABQ',
   'AMA',
   'AUS',
   'BWI',
   'BHM',
   'BOI',
   'BOS',
   'BUF',
   'BUR',
   'CHS',
   'MDW',
   'CLE',
   'CMH',
   'CRP',
   'DAL',
   'DEN',
   'DTW',
   'ELP',
   'FLL',
   'RSW',
   'GSP',
   'HRL',
   'BDL',
   'HOU',
   'IND',
   'MCI',
   'LAS',
   'SAN',
   'LIT',
   'ISP',
   'LAX',
   'SDF',
   'LBB',
   'MHT',
   'MAF',
   'MKE',
   'MSP',
   'BNA',
   'MSY',
   'LGA',
   'EWR',
   'ORF',
   'OAK',
   'OKC',
   'OMA',
   'ONT',
   'SNA',
   'MCO',
   'ECP',
   'PHL',
   'PHX',
   'PIT',
   'PDX',
   'PVD',
   'RDU',
   'RNO',
   'SMF',
   'SLC',
   'SAT',
   'SFO',
   'SJC',
   'SEA',
   'GEG',
   'STL',
   'TPA',
   'TUS',
   'TUL',
   'IAD',
   'PBI',
   'JAX',
   'ATL',
   'CAK',
   'CLT',
   'DAY',
   'DCA',
   'DSM',
   'FNT',
   'GRR',
   'PNS',
   'PWM',
   'RIC',
   'ROC',
   'SJU',
   'ICT',
   'MEM',
   'BZE',
   'CUN',
   'LIR',
   'MBJ',
   'MEX',
   'NAS',
   'PUJ',
   'PVR',
   'SJD',
   'AUA',
   'LGB',
   'MEX',
   'PUJ',
   'SJO',
   'DCA'];
  // ----------------------------------------------------------------------------



// ----------------------------------------------------------------------------
// Set a cookie with the user's input to the browser
// ----------------------------------------------------------------------------
// 
// 2. on form submit, save the search parameters to a cookie/localStorage
  var $origin = $('#origin');
  var $destination = $('#destination');
  var $date = $('#date');
  var $submit = $('#submit');

  var $departTime = $('#departTime');
  var $arriveTime = $('#arriveTime'); 
  var $youPaid = $('#youPaid');
  var $currentPrice = $('#currentPrice');
  var $priceDiff = $('#priceDiff');

  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

  var setCookie = function(name, value) {
    document.cookie = name + '=' + escape(value) + ';' + 
                      'path=/;' + 
                      'expires=' + expiry.toUTCString();  // Convert to UTC or GMT time?????
    console.log(document.cookie);
  };

  // Could call this function 'storeValues'...
  var putCookie = function() {
    //('12/34').match(\d{2}\/\d{2}); ??
    if (allCodes.includes($origin.val()) && allCodes.includes($destination.val()) && $date) {
      setCookie('origin', $origin.val());
      setCookie('destination', $destination.val());
      setCookie('date', $date.val());
      return true;
    } else {
      console.log('Those aren\'t appropriate parameters!');
    }
  };

  $submit.on('click', function() {
    console.log($('#form')[0][0].value);
    localStorage.origin = $('#form')[0][0].value;
    localStorage.destination = $('#form')[0][1].value;
    localStorage.date = $('#form')[0][2].value;
    // event.preventDefault();
    
    putCookie();

    var data = localStorage;
    $.post('/searchSW', data, function(res) {
      console.log('Post Sent!');
      console.log('Data Sent: ', data);
      console.log('Got data back: ', res);
      $('<h1>' + 'New Price: $' + res.priceHTML + '!' + '</h1>').appendTo($('body'));

      var priceDiff = (sampleData[0].lastView.lastDollarPrice.price - Number(res.priceHTML)).toString();

      $departTime.append(sampleData[0].flights.flight1.departTime);
      $arriveTime.append(sampleData[0].flights.flight2.arriveTime);
      $youPaid.append(sampleData[0].lastView.lastDollarPrice.price);
      $currentPrice.append(res.priceHTML);
      $priceDiff.append(priceDiff);
    });
  });
  // ---------------------------------------------------------------------------- 
});
