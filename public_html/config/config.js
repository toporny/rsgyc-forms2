(function() {
angular.module('rsgycApp', [
    'valdr',
    'pascalprecht.translate',
    'angular-stripe',
//    'ngRoute'
     // 'stripe',
    //'angularPayments'
  ])
})();


(function() {
  angular.module('rsgycApp')
    .constant('backendUrl', "http://alltic.home.pl/rsgyc2.php")
    .constant('publishableKey', 'pk_test_a7m5Q91it7KYngnGnfw2smDY')
    ;
})();

// (function() {
//   angular.module('rsgycApp').config(function ($httpProvider) {
//     // send all requests payload as query string
//     $httpProvider.defaults.transformRequest = function(data){
//         if (data === undefined) {
//             return data;
//         }
//         var result = [];
//         for (var property in data) {
//             result.push(encodeURIComponent(property) + "=" + encodeURIComponent(data[property]));
//             }
//         return result.join("&"); //return serialize(data);
//     };
//     // set all post requests content type
//     $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//   });
// })();


