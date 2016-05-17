(function() {
  angular.module('rsgycApp')
  .service('communication', communication);

  communication.$inject = [ '$http' ];

  function communication ($http) {

    function send(data) {
      
      var dataObj = {
          one : 'one',
          two : 'two',
          three : 'three',
      };  

      var res = $http
      .post('https://alltic.home.pl/rsgyc2.php', dataObj)
      .success(function(data, status, headers, config) {
        console.log('data',data);
      })
      .error(function(data, status, headers, config) {
        console.warn( "failure message: " + JSON.stringify({data: data}));
      });
    }


    return {
      send: send,
    }

  };
})();

