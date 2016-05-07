// (function() {
//   angular
//     .module('paycom-core.validation', [
//       'pascalprecht.translate',
//       'valdr'
//     ]);
// })();



var demoApp = angular.module('demoApp', ['valdr', 'pascalprecht.translate'])
  .config(valdrProviderAddConstraints)
  .config(valdrProviderAddCheckBoxValidator)

  function valdrProviderAddCheckBoxValidator(valdrProvider) {
    valdrProvider.addValidator('checkboxRequired');
  }


  function valdrProviderAddConstraints(valdrProvider) {
    valdrProvider.addConstraints({
      'Person': {
        'sailingModuleToComplete': {
          'required': {
            'message': 'Please select Sailing Module.'
          }
        },      
        'age': {
          'required': {
            'message': "message.required"
          },
        },
        'boatType': {
          'required': {
            'message': "message.required"
          },
        },
        'childName': {
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
        'parent2Mobile': {
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
        'dateOfBirth': {
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
          'required': {
            'message': "message.required"
          },
        },
        'exp_year': {
          'required': {
            'message': "message.required"
          },
        },
        'cvv': {
          'required': {
            'message': "message.required"
          },
          'pattern': {
            'value': /^\d.*$/,
            'message': "message.digits"
          }
        },

      }
    });
  };


(function() {
  demoApp.factory('checkboxRequired', function () {
    return {
      name: 'checkboxRequired', // this is the validator name that can be referenced from the constraints JSON
      validate: function (value, constraint) {
        // value: the value to validate
        // constraint: the validator arguments
        return value === constraint.value;
      }
    };  
  });
})();






  demoApp.config(function (valdrMessageProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en');

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
      'Person': {
        'childName': 'Child name',
        'parentName': 'Parent name',
        'parentMobile': 'Parent Mobile Phone',
        'parent2Mobile': 'Parent 2 Mobile Phone',
        'parentEmail' : 'Email',
        'boatType': 'Boat type',
        'age': 'Age',
        'dateOfBirth' : 'Birth date',
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
    //   'Person.lastName.minlength': 'lastname.specific'
    // });
  });

  demoApp.run(function (valdrMessage) {
     //valdrMessage.angularMessagesEnabled = true;
  });



(function() {

  demoApp.controller('TestController', function ($scope, valdr) {
    vm = this;
    
    vm.submit = submit;
    vm.formSubm = false;

    vm.sailing_module = [  
      {id : '',  value: '-- select --'},
      {id : "Start Sailing" , value: "Start Sailing"},
      {id : "Basic Skills" , value: "Basic Skills"},
      {id : "Improving Skills" , value: "Improving Skills"},
      {id : "Advanced Boat Handling" , value: "Advanced Boat Handling"},
      {id : "Kites and Wires 1" , value: "Kites and Wires 1"},
      {id : "Kites and Wires 2" , value: "Kites and Wires 2"},
      {id : "Go Racing 1" , value: "Go Racing 1"},
      {id : "Go Racing 2" , value: "Go Racing 2"},
      {id : "Adventure 1 (Course C &amp; D only)" , value: "Adventure 1 (Course C &amp; D only)"},
      {id : "Adventure 2 (Course C &amp; D only)" , value: "Adventure 2 (Course C &amp; D only)"}
    ];
    //sailingModuleToComplete_index = 0;

    vm.possible_ages = [{id : '',  value: '-- select --'}];
    for (i=9; i<19; i++) {
      vm.possible_ages.push({id : i, value: i});
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    vm.months = [{id : '',  value: '- exp. month -'}];
    for (i=0;i<12;i++) {
      vm.months.push({id : i+1, value: '('+((i<9)?('0'+(i+1)):i+1)+') ' + monthNames[i]});
    }

    vm.year = [{id : '',  value: '- exp. year -'}];
    for (i = new Date().getFullYear(); i<new Date().getFullYear()+25; i++) {
      vm.year.push({id : i, value: i})
    }

    console.log('controler start');
    //vm.form.$setPristine();


    function submit() {
      console.log('submit');
      vm.formSubm = true;
      
    //ng-class="{ 'form-submitted': formSubmitted }"

      //vm.constraints = valdr.getConstraints();
      
      vm.showAllErrors = function () {
      }

      if (vm.form.$valid) {
        console.log('form valid');
      }
      else {
        console.warn('form not valid');
      }
    }


  });

})();
