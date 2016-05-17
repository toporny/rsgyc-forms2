(function() {
  angular.module('rsgycApp')
  .service('calculatePrice', calculatePrice);

  function calculatePrice () {

    var price = 123.23

    var prices = {
      'Course_A': {member: 315, not_member: 420 },
      'Course_B': {member: 350, not_member: 455 },
      'Course_C': {member: 350, not_member: 455 },
      'Course_D': {member: 315, not_member: 420 },
    };

    function doCalculation(data) {
      var aha = data.courseDetails;
      return prices[aha].member;
    }

    function getPrice(data) {
      if (!angular.isDefined(data)) return 0;
      return doCalculation(data);
    }

    function setPrice(newPrice) {
      //console.log('newPrice', newPrice);
      price = newPrice;
    }


    return {
      setPrice: setPrice,
      getPrice: getPrice,
      //doCalculation: doCalculation
    }

  };
})();

