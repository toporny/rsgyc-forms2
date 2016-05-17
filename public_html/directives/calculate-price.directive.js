(function() {
  angular.module('rsgycApp')
  .directive('showPrice', showPrice);

  showPrice.$inject = [ 'calculatePrice', '$rootScope' ];
  
  function showPrice( calculatePrice,  ) {

    return {
      restrict : "C",
      scope: "=",
      link: linkShowPrice,
      template: showTemplate
    };

    function linkShowPrice(scope, element, attr) {
      scope.price = calculatePrice.doCalculation();
    }

    function showTemplate() {
      return '{{ price |  currency : "€" : 2 }}';
    }

  };

})();