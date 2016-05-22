(function() {
  angular.module('rsgycApp')
  .controller('PriceController', PriceController);

  PriceController.$inject = ['$scope', '$rootScope', 'calculatePrice'];

  function PriceController ($scope, $rootScope, calculatePrice) {
    vm = this;
    vm.data = {
      price : '0'
    };
    that = vm;
    $rootScope.$on('recalculatePriceEvent', function (event, data) {
      that.data.price = calculatePrice.getPrice(data);
    });
  }
})();


(function() {
  angular.module('rsgycApp')
  .controller('TestController', TestController);

  TestController.$inject = ['$scope', '$rootScope', 'communication', 'calculatePrice',  'valdr', 'prepareSelectData'];

  function TestController ($scope, $rootScope, communication, calculatePrice, valdr, prepareSelectData) {


    window.Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


// cdn http://urish.github.io/ng-stripe-tutorial/step3/step3.html

    vm = this;
    vm.submit = submit;
    vm.fill_debug = fill_debug;
    vm.formSubm = false;
    vm.data = {};
    vm.recalculatePrice = recalculatePrice;

    vm.sailing_module = prepareSelectData.getSailingModules();
    vm.possible_ages = prepareSelectData.getPossibleAges();
    vm.posible_course_types = prepareSelectData.getCourseTypes();
    vm.possibleMonths = prepareSelectData.getMonths();
    vm.possibleYear = prepareSelectData.getCreditCardExpYears();
    vm.possible_amount_of_kids = prepareSelectData.getPossibleAmountOfKids();
    //$locationProvider.html5Mode(true);


    var child_data =  {
        name: '',
        dateOfBirth: '',
        medicalConditions: '',
        boatType: '',
        membershipNo: ''
    };

    vm.kidsIndexesArray = [0];

    vm.data = {
      sailingModuleToComplete_index: vm.sailing_module[0],
      possible_amount_of_kids_selected: vm.possible_amount_of_kids[0],
      courseDetails: false,
      price: 0,
      helpingWithEvents: false,
      acceptTerms: false,
      understandParkingPermit: false,
      age_index: vm.possible_ages[0],
      months_index: vm.possibleMonths[0],
      year_index: vm.possibleYear[0],
      child: [child_data, angular.copy(child_data), angular.copy(child_data), angular.copy(child_data)],
    };

    $rootScope.$on('recalculatePriceEvent', function (event, data) {
     console.log('testController data',data);
      vm.data.price = calculatePrice.getPrice(data);
    });



    function recalculatePrice() {
      console.log('vm.data = ', vm.data);
      $rootScope.$emit('recalculatePriceEvent', vm.data);
      console.log('emit ! ');
    }

    function fill_debug() {
      console.log('fill_debug');
      vm.data.sailingModuleToComplete_index = vm.sailing_module[1];
      vm.data.age_index = vm.possible_ages[3];
      vm.data.courseDetails = 'Course B: June 20th – July 1st';
      vm.data.possible_amount_of_kids_selected = vm.possible_amount_of_kids[1];
      vm.data.child[0].name = 'Mark Szyszko';
      vm.data.child[0].dateOfBirth = '20/09/2010';
      vm.data.child[0].medicalConditions = 'no allergies';
      vm.data.child[0].boatType ='Feva';
      vm.data.child[0].membershipNo = '123456789'
      vm.data.child[1].name = 'Brat Szyszko';
      vm.data.child[1].dateOfBirth = '20/09/2009';
      vm.data.child[1].medicalConditions = 'gluten allergies';
      vm.data.child[1].boatType = 'Laser';
      vm.data.child[1].membershipNo = '234567890';
      vm.data.comments = 'Only Mark can swim. Brat doesn\'t have this ability.';
      vm.data.parentName = 'Przemyslaw Rzeznik';
      vm.data.parentSponsor = 'Adidas';
      vm.data.parentMobile = '+353861055707';
      vm.data.secondParentMobile = '+353861055707';
      vm.data.parentEmail = 'przemyslaw.rzeznik@gmail.com';
      vm.data.helpingWithEvents = true;
      vm.data.acceptTerms = true;
      vm.data.understandParkingPermit = true;
      vm.data.cardholdername = 'Brian Zuckenberg';
      vm.data.cardnumber = '1234567890123456';
      vm.data.year_index = vm.possibleYear[3];
      vm.data.months_index = vm.possibleMonths[3];
      vm.data.cvv_index = '123';
    }


    function submit() {
      vm.formSubm = true;

      // vm.showAllErrors = function () {
      // }

      if (vm.form.$valid) {
        communication.send(vm.data);
        console.log('vm.data', vm.data);
      }
      else {
        console.warn('Form is not valid. Correct fields marked as red');
      }
    }
  };
})();