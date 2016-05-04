var demoApp = angular.module('demoApp', ['valdr', 'pascalprecht.translate']);
  demoApp.config(function(valdrProvider) {
    valdrProvider.addConstraints({
      'Person': {
        'lastName': {

          'size': {
            'max': 4,
            'message': 'Last name max is 4 characters.'
          }
        }
      }
    });
  });
  demoApp.config(function (valdrMessageProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.translations('en', {
      'message.required': '{{fieldName}} is required.',
      'message.number': '{{fieldName}} must be a number.',
      'lastname.specific': '{{fieldName}} min is 2 characters.',
      'Person.lastName': 'Last name',
      'Person.age': 'Age'
    });
    valdrMessageProvider.addMessages({
      'required': 'message.required',
      'number': 'message.number',
      'Person.lastName.minlength': 'lastname.specific'
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