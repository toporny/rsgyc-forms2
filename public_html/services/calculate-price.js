(function() {
  angular.module('rsgycApp')
  .service('calculatePrice', calculatePrice);

  function calculatePrice () {


    function doCalculation() {
      return 123;
    }


    return {
      doCalculation: doCalculation
    }

  };
})();

