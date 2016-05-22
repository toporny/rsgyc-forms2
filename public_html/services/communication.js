(function() {
  angular.module('rsgycApp')
  .service("communication", communication);


 // https://www.airpair.com/javascript/integrating-stripe-into-angular-app

  communication.$inject = [ '$http'  ];

  function communication ($http   ) {

    function send(data) {

//      angularPayments
      
      var dataObj = {
          one : 'one',
          two : 'two',
          three : 'three',
      };  

      var res = $http
      .post('https://alltic.home.pl/rsgyc2.php', dataObj)
      .success(function(data, status, headers, config) {
        console.log('what comes? = ',data);
      })
      .then(function(response) {
              // success
      }, 
      function(response) { // optional
              // failed
      });

    }


    return {
      send: send,
    }

  };
})();



