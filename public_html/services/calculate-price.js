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
      if (!angular.isDefined(data.courseDetails) || data.courseDetails === false) return 0;
      console.log('data.courseDetails',data.courseDetails);
      var global_price = 0; 
      for (var i=0; i<data.possible_amount_of_kids_selected.value; i++) {
        who = 'not_member';
        console.warn('data',data.child[i].membershipNo);
        if (angular.isDefined(data.child[i].membershipNo) && data.child[i].membershipNo.length>3 ) {
          who = 'member';
        }
        console.log('who', who);
        global_price = global_price + prices[data.courseDetails][who];
      }
      return global_price;
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

