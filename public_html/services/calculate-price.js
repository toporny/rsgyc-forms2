(function() {
  angular.module('rsgycApp')
  .service('calculatePrice', calculatePrice);

  function calculatePrice () {


    function doCalculation() {
      return 123.233;
    }


    return {
      doCalculation: doCalculation
    }

  };
})();

