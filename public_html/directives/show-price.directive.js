(function() {
  angular.module('rsgycApp')
  .directive('showPrice', showPrice);

  showPrice.$inject = [ 'calculatePrice' ];
  
  function showPrice( calculatePrice ) {

    return {
      restrict : "C",
      scope: "=price",
      link: function(scope, element, attr){
        scope.price = calculatePrice.doCalculation();
      },
      template: function () {
        return '{{ price |  currency : "€" : 2 }}';
      }
    };
  };


})();