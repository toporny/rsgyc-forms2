(function() {
  angular.module('rsgycApp')
  .service("communication", communication);

  communication.$inject = ['$rootScope', '$http',  'stripe'  ];

  function communication ($rootScope, $http,  stripe    ) {

    function send(data) {

    console.log('data',data);
    $rootScope.payment = {
      card : {
        number: '4242424242424242',
        cvc:  '123',
        exp_month:  '12',
        exp_year:  '19',
      }
    }

    stripe.card.createToken($rootScope.payment.card)
      .then(function (response) {
        //console.log('token created for card ending in ', response.card.last4);
        var payment = angular.copy($rootScope.payment);
        payment.card = void 0;
        payment.token = response.id;
        console.log('payment.token',payment.token);
        console.log('data',data);

        return $http.post('https://alltic.home.pl/rsgyc2.php', data);
      })
      .then(function (payment) {
        console.log('successfully submitted payment for $', payment.amount);
      })
      .catch(function (err) {
        if (err.type && /^Stripe/.test(err.type)) {
          console.log('Stripe error: ', err.message);
        }
        else {
          console.log('Other error occurred, possibly with your API', err.message);
        }
      });
     //};


      //Stripe.card.createToken($form, stripeResponseHandler);
      
//      angularPayments
      
      // var dataObj = {
      //     one : 'one',
      //     two : 'two',
      //     three : 'three',
      //     comments : 'komentarz'

      // };  

      //   var config = {
      //       headers : {
      //           'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      //       }
      //   }


      // var res = $http
      // .post('https://alltic.home.pl/rsgyc2.php', dataObj)
      // .success(function(data, status, headers, config) {
      //   console.log('what comes? = ',data);
      // })
      // .then(function(response) {
      //         // success
      // }, 
      // function(response) { // optional
      //         // failed
      // });

    }


    return {
      send: send,
    }

  };
})();



