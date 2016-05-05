var demoApp = angular.module('demoApp', ['valdr', 'pascalprecht.translate']);
  demoApp.config(function(valdrProvider) {
    valdrProvider.addConstraints({
      'Person': {
        'childName': {
          'size': {
            'min': 2,
            'max': 4,
            'message': "message.size"
          },
        },
        'age': {
          'required': {
            'message': 'age is required.'
          },
          'max': {
            value: '17',
            message: 'Person must be max 17 years old.'
          },
          'min': {
            value: '9',
            message: 'Person must be 9 years old.'
          }
        },
        'sailingModuleToComplete': {
          'required': {
            'message': 'Gender is required.'
          }
        }
      }
    });
  });


// $translateProvider.translations('en', {
//   'message.size': '{{fieldName}} must be between {{min}} and {{max}} characters.',
//   'Person.lastName': 'Last name'
// });


  demoApp.config(function (valdrMessageProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.translations('en', {
      'message.required': '{{fieldName}} is required.',
      'message.size': '{{fieldName}} must be between {{min}} and {{max}} characters.',
      'message.number': '{{fieldName}} must be a number.',
      'message.digits': '{{fieldName}} must be less {{max}}and more than {{min}}.',

      //'lastname.specific': '{{fieldName}} min is 4 characters.',
      //'Person.lastName': 'Last name',
      //'Person.age': 'Age1'
    });
    valdrMessageProvider.addMessages({
      'required': 'message.required',
      //'number': 'message.number',
      //'Person.lastName.minlength': 'lastname.specific'
    });
  });

  demoApp.run(function (valdrMessage) {
    valdrMessage.angularMessagesEnabled = true;
  });

  demoApp.controller('TestController', function ($scope, valdr) {
    $scope.person = {};
    $scope.genders = [
      { label: 'Male', value: 1 },
      { label: 'Female', value: 2 }
    ];
    // $scope.constraints = valdr.getConstraints();
    // $scope.showAllErrors = function () {
    //     $scope.formSubmitted = true;
    // }
  });