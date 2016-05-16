(function() {
  angular.module('rsgycApp')
  .service('calculatePrice', calculatePrice);

  function calculatePrice () {

    var price = 123.23

    function doCalculation() {
      return price*2;
    }

    function getPrice() {
      return price;
    }

    function setPrice(newPrice) {
      console.log('newPrice', newPrice);
      price = newPrice;
    }


    return {
      setPrice: setPrice,
      getPrice: getPrice,
      doCalculation: doCalculation
    }

  };
})();

