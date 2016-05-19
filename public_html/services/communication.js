(function() {
  angular.module('rsgycApp')
  .service("communication", communication);

  communication.$inject = [ '$http', 'backendUrl' ];

  function communication ($http, backendUrl) {

    function send(dataObj) {
      console.log('data to send',dataObj);

    $http({
        url: backendUrl,
        method: "POST",
        data: Object.toparams(dataObj),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
            // success
    }, 
    function(response) { // optional
            // failed
    });


// var username = 'test1';
// var password = 'test1';

//  var payload = 'j_username=' + username + '&j_password=' + password;
//   var config = {
//     headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
//   }
//         var data = $.param({
//             json: JSON.stringify(dataObj)
//         });

//   $http.post(backendUrl, dataObj, config)
//   .success(function(data) {
//     console.log('data',data)

//   });
 


      // var res = $http
      // .post(backendUrl, dataObj)
      // .success(function(dataReturn, status, headers, config) {
      //   console.log('data',dataReturn);
      //   return dataReturn;
      // })
      // .error(function(dataObj, status, headers, config) {
      //   console.warn( "failure message: " + JSON.stringify({dataObj: dataObj}));
      //   return dataObj;
      // });
    }


    return {
      send: send,
    }

  };
})();



