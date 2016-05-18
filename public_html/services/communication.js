(function() {
  angular.module('rsgycApp')
  .service("communication", communication);

  communication.$inject = [ '$http', 'backendUrl' ];

  function communication ($http, backendUrl) {

    function send(dataObj) {
      console.log('dataObj',dataObj);
      var res = $http
      .post(backendUrl, dataObj)
      .success(function(data, status, headers, config) {
        console.log('data',data);
        return data;
      })
      .error(function(data, status, headers, config) {
        console.warn( "failure message: " + JSON.stringify({data: data}));
        return data;
      });
    }


    return {
      send: send,
    }

  };
})();

