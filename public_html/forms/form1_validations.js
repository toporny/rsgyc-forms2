
(function() {
  angular.module('rsgycApp').config(function (stripeProvider) {
    stripeProvider.setPublishableKey('pk_test_a7m5Q91it7KYngnGnfw2smDY');
  });
})();

(function() {
angular.module('rsgycApp')
  .config(valdrProviderAddConstraints)
  .config(valdrProviderAddCheckBoxValidator)
  .config(valdrProviderAddSelectListValidator)
  //.config(valdrNameAllVariables)
  ;


  valdrProviderAddConstraints.$inject = ['valdrProvider', '$translateProvider'];
  valdrProviderAddCheckBoxValidator.$inject = ['valdrProvider'];
  valdrProviderAddSelectListValidator.$inject = ['valdrProvider'];
  //valdrNameAllVariables.$inject = ['valdrMessageProvider, $translateProvider'];


  function valdrProviderAddCheckBoxValidator(valdrProvider) {
    valdrProvider.addValidator('checkboxRequired');
  }

  function valdrProviderAddSelectListValidator(valdrProvider) {
    valdrProvider.addValidator('selectListValidator');
  }

 function valdrNameAllVariables(valdrMessageProvider, $translateProvider) {

  }  

  function valdrProviderAddConstraints(valdrProvider, $translateProvider) {
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

    $translateProvider.useSanitizeValueStrategy();
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
        'rsgycForm': {
          'sailingModuleToComplete' : 'Module',
          'courseDetails': 'Course details',
          'childName': 'Child name',
          'parentName': 'Parent name',
          'parentMobile': 'Parent Mobile Phone',
          'parent2Mobile': 'Parent 2 Mobile Phone',
          'parentEmail' : 'Email',
          'boatType': 'Boat type',
          'age': 'Age',
          'dateOfBirth' : 'Birth date',
          'acceptTerms' :'Terms acceptation',
          'understandParkingPermit': 'Parking Permit rules acceptation',
          'cardholdername' : 'Cardholder name',
          'cardnumber' : 'Card number',
          'exp_month' : 'Expired month',
          'exp_year' : 'Expired year',
          'cvv' : 'CVV'

        }
      });
          
  };


})();

(function() {
  angular.module('rsgycApp')
  .factory('checkboxRequired', checkboxRequired); 

    checkboxRequired.$inject = [];

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


