angular.module('rsgycApp', ['valdr', 'pascalprecht.translate'])
  .config(valdrProviderAddConstraints)
  .config(valdrProviderAddCheckBoxValidator)
  .config(valdrProviderAddSelectListValidator);


  function valdrProviderAddCheckBoxValidator(valdrProvider) {
    valdrProvider.addValidator('checkboxRequired');
  }

  function valdrProviderAddSelectListValidator(valdrProvider) {
    valdrProvider.addValidator('selectListValidator');
  }

  function valdrProviderAddConstraints(valdrProvider) {
    valdrProvider.addConstraints({
      'rsgycForm': {
        'sailingModuleToComplete': {
          "selectList": {
            "required": true,
            "message": "message.required"
          }
        },      
        'age': {
          "selectList": {
            "required": true,
            "message": "message.required"
          }
        },
        'courseDetails': {
          'pattern': {
            'value': /^Course.*$/,
            'message': "message.required"
          },          
        },
        'boatType1': {
          'required': {
            'message': "message.required"
          },
        },
        'childName1': {
          'minLength': {
            'number': 3,
            'message': "message.minLength"
          },
          'pattern': {
            'value': /^[\w\s.'-]+$/,
            'message': "message.properName"
          },
          'maxLength': {
            'number': 22,
            'message': "message.maxLength"
          }
        },
        'parentMobile': {
          'required': {
            'message': "message.required"
          },
          'maxLength': {
            'number': 30,
            'message': "message.maxLength"
          },
          'pattern': {
            'value': /^[\d\s\+]+$/,
            'message': "message.properMobile"
          },
        },
        'secondParentMobile': {
          'maxLength': {
            'number': 30,
            'message': "message.maxLength"
          },
          'pattern': {
            'value': /^[\d\s\+]+$/,
            'message': "message.properMobile"
          },
        },
        'parentEmail': {
          'required': {
            'message': "message.required"
          },
          "email": {
            "message": "Must be a valid E-Mail address."
          }          
        },
        'parentName': {
          'minLength': {
            'number': 3,
            'message': "message.minLength"
          },
          'pattern': {
            'value': /^[\w\s.'-]+$/,
            'message': "message.properName"
          },
          'maxLength': {
            'number': 22,
            'message': "message.maxLength"
          }
        },
        'acceptTerms': {
          'checkboxRequired': {
            'value': true,
            'message': "message.required"
          },
        },
        'understandParkingPermit': {
          'checkboxRequired': {
            'value': true,
            'message': "message.required"
          },
        },
        'dateOfBirth1': {
          'required': {
            'message': "message.required"
          },
          'pattern': {
            'value': /^\d{2}\/\d{2}\/\d{4}$/,
            'message': "message.birthdate"
          }
        },
        'cardholdername': {
          'required': {
            'message': "message.required"
          }
        },
        'cardnumber': {
          'required': {
            'message': "message.required"
          },
          'pattern': {
            'value': /^\d.*$/,
            'message': "message.digits"
          }
        },
        'exp_month': {
          "selectList": {
            "required": true,
            "message": "message.required"
          }
        },
        'exp_year': {
          "selectList": {
            "required": true,
            "message": "message.required"
          }
        },
        'cvv': {
          'required': {
            'message': "message.required"
          },
          'pattern': {
            'value': /^\d\d\d$/,
            'message': "has to have 3 digits"
          }
        },

      }
    });
  };


(function() {
  angular.module('rsgycApp')
  .factory('checkboxRequired', checkboxRequired); 

    function checkboxRequired () {
    return {
      name: 'checkboxRequired', // this is the validator name that can be referenced from the constraints JSON
      validate: function (value, constraint) {
        // value: the value to validate
        // constraint: the validator arguments
        return value === constraint.value;
      }
    };
  };
})();


(function() {
    angular.module('rsgycApp')
      .factory('selectListValidator', selectListValidator);

  selectListValidator.$inject = [];

  function selectListValidator() {
    return {
      name: 'selectList',
      validate: function (value, constraint) {
        console.log('value',value);
        console.log('constraint',constraint);

        if ( constraint.required && angular.isDefined(value) ) {
          if (angular.isNumber(value.value)) {
            return value.value > 0;  
          } else if (angular.isString(value.value)) {
            return value.value !== ''
          }
        }
        return false;
      }
    };
  }
})();    
  



(function() {
  angular.module('rsgycApp')
  .service('prepareSelectData', prepareSelectData);

  function prepareSelectData () {

      // <input type="radio" ng-model="testController.data.courseDetails" name="courseDetails" value="Course B: June 20th – July 1st">
      // Course B: June 20th – July 1st, 10 days €350 member, €455 non- member

    function getCourseTypes() {
      return [  
        {id : "Course A: June 7th – 17th" , value: "Course A: June 7th – 17th (bank holiday Mon 6th) 9 days  €315 member, 420 non- member"},
        {id : "Course B: June 20th – July 1st" , value: "Course B: June 20th – July 1st, 10 days €350 member, €455 non- member"},
        {id : "Course C: July 4th – July 15th" , value: "Course C: July 4th – July 15th 10 days €350 member, €455 non- member"},
        {id : "Course D: August 2nd – 12th" , value: "Course D: August 2nd – 12th, 9 days (bank holiday 1st) 9 days  €315 member, €420 non- member"},
      ];
    }

    function getSailingModules() {
      return [
        {value : '',  label: '-- select --'},
        {value : "Start Sailing" , label: "Start Sailing"},
        {value : "Basic Skills" , label: "Basic Skills"},
        {value : "Improving Skills" , label: "Improving Skills"},
        {value : "Advanced Boat Handling" , label: "Advanced Boat Handling"},
        {value : "Kites and Wires 1" , label: "Kites and Wires 1"},
        {value : "Kites and Wires 2" , label: "Kites and Wires 2"},
        {value : "Go Racing 1" , label: "Go Racing 1"},
        {value : "Go Racing 2" , label: "Go Racing 2"},
        {value : "Adventure 1 (Course C &amp; D only)" , label: "Adventure 1 (Course C &amp; D only)"},
        {value : "Adventure 2 (Course C &amp; D only)" , label: "Adventure 2 (Course C &amp; D only)"}
      ];
    }

    function getPossibleAges () {
      possible_ages = [{value : '',  label: '-- select --'}];
      for (i=9; i<19; i++) {
        possible_ages.push({value : i, label: i});
      }
      return possible_ages;
    }

    function getMonths () {
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var months = [];
      months = [{value : '',  label: '- exp. month -'}];
      for (i=0; i<12; i++) {
        months.push({value : i+1, label: '['+((i<9)?('0'+(i+1)):i+1)+'] ' + monthNames[i]});
      }
      return months;
    }

    function getCreditCardExpYears () {
      years = [{value : '',  label: '- exp. year -'}];
      for (i = new Date().getFullYear(); i<new Date().getFullYear()+25; i++) {
        years.push({value : i, label: i})
      }
      return years;
    }

    function getPossibleAmountOfKids () {
      cadetList = [];
      for (i = 1; i <= 4; i++) {
        cadetList.push({value : i, label: i + ' cadet'+((i>1)?'s':'')});
      }
      return cadetList;
    }


    return {
      getPossibleAmountOfKids: getPossibleAmountOfKids,
      getCourseTypes: getCourseTypes,
      getSailingModules: getSailingModules,
      getPossibleAges: getPossibleAges,
      getMonths: getMonths,
      getCreditCardExpYears:getCreditCardExpYears
    }

  };
})();



  angular.module('rsgycApp').config(function (valdrMessageProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en');
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escapeParameters');

    $translateProvider.translations('en', {
      'message': {
        'required'  : '{{fieldName}} is required.',
        //'size'      : '{{fieldName}} must have minimum {{min}} and maximum {{max}} characters.',
        'minLength' : '{{fieldName}} must have at least {{number}} characters.',
        'maxLength' : '{{fieldName}} must have maximum {{number}} characters.',
        'properName' : '{{fieldName}} - please type proper name.',
        'birthdate' : '{{fieldName}} - wrong format.',
        'digits' : '{{fieldName}} - only digits allowed.',
        'properMobile' : 'Wrong {{fieldName}} format. Only digits allowed.'
      },
      'rsgycForm': {
        'sailingModuleToComplete': "Sailing Module",
        'childName1': 'Child name',
        'parentName': 'Parent name',
        'parentMobile': 'Parent Mobile Phone',
        'secondParentMobile': 'Parent 2 Mobile Phone',
        'parentEmail' : 'Email',
        'boatType1': 'Boat type',
        'age': 'Age',
        'courseDetails' : 'course details',
        'dateOfBirth1' : 'Birth date',
        'acceptTerms' :'acceptTerms',
        'understandParkingPermit': 'Parking Permit rules',
        'cardholdername' : 'Cardholder name',
        'cardnumber' : 'Card number',
        'exp_month' : 'Expired month',
        'exp_year' : 'Expired year',
        'cvv' : 'CVV'

      }
    });
    // valdrMessageProvider.addMessages({
    //   'required': 'message.required',
    //   'number': 'message.number',
    //   'rsgycForm.lastName.minlength': 'lastname.specific'
    // });
  });

  // rsgycApp.run(function (valdrMessage) {
  //    //valdrMessage.angularMessagesEnabled = true;
  // });


(function() {
  angular.module('rsgycApp')
  .controller('TestController', function ($scope, valdr, prepareSelectData) {

    vm = this;
    vm.submit = submit;
    vm.fill_debug = fill_debug;
    vm.formSubm = false;
    vm.data = {};

    vm.sailing_module = prepareSelectData.getSailingModules();
    vm.possible_ages = prepareSelectData.getPossibleAges();
    vm.posible_course_types = prepareSelectData.getCourseTypes();
    vm.possibleMonths = prepareSelectData.getMonths();
    console.log('possibleMonths',vm.possibleMonths);
    vm.possibleYear = prepareSelectData.getCreditCardExpYears();
    vm.possible_amount_of_kids = prepareSelectData.getPossibleAmountOfKids();
    
    var child_data =  {
        // name: 'Imie pierwsze',
        // dateOfBirth: '20/09/1973',
        // medicalConditions: 'brak numer 1',
        // boatType: 'Feva',
        // membershipNo: '123'
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
      helpingWithEvents: false,
      acceptTerms: false,
      understandParkingPermit: false,
      age_index: vm.possible_ages[0],
      months_index: vm.possibleMonths[0],
      year_index: vm.possibleYear[0],
      course_details: 'A',
      child: [child_data, angular.copy(child_data), angular.copy(child_data), angular.copy(child_data)],
    };

    //vm.form.$setPristine();


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
      console.log('submit');
      vm.formSubm = true;
      console.log('vm.data', vm.data);

      // vm.showAllErrors = function () {
      // }

      if (vm.form.$valid) {
        console.log('form valid');
        alert("Form is valid.\nThank you\nEmail notification was sent. (not yet ready)\n(price calculation is not yet ready)\n(stripe connection is not yet ready)");
      }
      else {
        alert('Form is not valid. Correct fields marked as red');
        console.warn('form not valid');
      }
    }
  });
})();




(function() {
  angular.module('rsgycApp')
  .directive('childDetail', childDetail);

  function childDetail() {
  var child_template = ' \
                <div ng-repeat="item in childIndexArray"> \
                <hr>\
                  <h4>Child {{item+1}} Details:</h4> \
                  <div class="row"> \
                    <div class="col-xs-6"> \
                      <label for="childName{{item}}">Child\'s Name</label> \
                    </div> \
                    <div class="col-xs-6"> \
                      <label for="dateOfBirth{{item}}">Date of Birth (DD/MM/YYYY): </label> \
                    </div> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                    <input type="text" \
                      class="form-control" \
                      name="childName{{item}}" \
                      ng-model="testController.data.child[item].name"> \
                    </div> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                      <input type="text" \
                        class="form-control" \
                        name="dateOfBirth{{item}}" \
                        ng-model="testController.data.child[item].dateOfBirth"> \
                    </div> \
                  </div> \
                  <div class="form-group" valdr-form-group> \
                    <label for="medicalConditions{{item}}">Any Allergies/Medical Conditions:</label> \
                    <input type="text" \
                      class="form-control" \
                      name="medicalConditions{{item}}" \
                      ng-model="testController.data.child[item].medicalConditions"> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6"> \
                      <label for="boatType{{item}}">Boat Type</label> \
                    </div> \
                    <div class="col-xs-6"> \
                      <label for="dateOfBirth{{item}}">Cadet Membership No</label> \
                    </div> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                      <select \
                        class="form-control" \
                        name="boatType{{item}}" \
                        ng-model="testController.data.child[item].boatType"> \
                        <option value="" selected>-- please select boat type --</option> \
                        <option value="Optimist">Optimist</option> \
                        <option value="Feva">Feva</option> \
                        <option value="Laser">Laser</option> \
                        <option value="420">420</option> \
                        <option value="Other">Other</option> \
                      </select> \
                    </div> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                      <input type="text" \
                        class="form-control" \
                        name="membershipNo{{item}}" \
                        placeholder="leave blank if you don\'t have" \
                        ng-model="testController.data.child[item].membershipNo"> \
                    </div> \
                  </div> \
                </div> \
    ';

    return {
      scope: "=",
        link: function($scope, $element, $attrs) {
          var tmpArray = [];
          for (i=0; i< $attrs.childindex; i++) {
            tmpArray.push(i);
          }
          $scope.childIndexArray = tmpArray;
          return $element;
      },
      template: child_template
    };
  };


})();
