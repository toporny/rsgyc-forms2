angular.module('rsgycApp', ['valdr', 'pascalprecht.translate'])
  .config(valdrProviderAddConstraints)
  .config(valdrProviderAddCheckBoxValidator)
  .config(valdrProviderAddSelectListValidator);

  valdrProviderAddConstraints.$inject = ['valdrProvider'];
  valdrProviderAddCheckBoxValidator.$inject = ['valdrProvider'];
  valdrProviderAddSelectListValidator.$inject = ['valdrProvider'];

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
