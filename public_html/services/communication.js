(function() {
  angular.module('rsgycApp')
  .service("communication", communication);

  communication.$inject = [ '$http', 'backendUrl' , '$httpParamSerializerJQLike'];

  function communication ($http, backendUrl, $httpParamSerializerJQLike) {

    function send(dataObj) {
      console.log('data to send',dataObj);

      $http({
          url: backendUrl,
          method: "POST",
          data: $httpParamSerializerJQLike(dataObj),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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



