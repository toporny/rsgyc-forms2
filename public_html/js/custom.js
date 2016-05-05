var demoApp = angular.module('demoApp', ['valdr', 'pascalprecht.translate']);
  demoApp.config(function(valdrProvider) {
    valdrProvider.addConstraints({
      'Person': {
        'childName': {'minLength': {
            'number': 3,
            'message': "message.minLength"
          },
          'maxLength': {
            'number': 13,
            'message': "message.maxLength"
          },
        },

        'age': {
          'required': {
            'message': "message.required"
          },
        //   'digits': {
        //     integer: 2,
        //     fraction: 0,
        //     message: 'message.number'
        //   },
        //   'max': {
        //     value: '17',
        //     message: 'Junior sailor must be max 17 years old.'
        //   },
        //   'min': {
        //     value: '9',
        //     message: 'Junior sailor must have at 9 years old.'
        //   }
        },
        'sailingModuleToComplete': {
          'required': {
            'message': 'Please select Sailing Module.'
          }
        }
      }
    });
  });


 


  demoApp.config(function (valdrMessageProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en');

    $translateProvider.translations('en', {
      'message': {
        'required'  : '{{fieldName}} is required.',
//        'size'      : '{{fieldName}} must have minimum {{min}} and maximum {{max}} characters.',
        'minLength' : '{{fieldName}} must have at least {{number}} characters.',
        'maxLength' : '{{fieldName}} must have maximum {{number}} characters.',
//        'number'    : '{{fieldName}} must be a number.',
//        'digits'    : '{{fieldName}} must be less {{max}} and more than {{min}}.'
      },
      'Person': {
        'childName': 'Child Name',
        'age': 'Child age'
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

  demoApp.controller('TestController', function ($scope, valdr) {
    vm = this;
//    $scope.person = {};
    vm.aha = 'aha';    
    // <select name="repeatSelect" id="repeatSelect" ng-model="data.repeatSelect">
    //   <option ng-repeat="option in testController.genders" value="{{option.id}}">{{option.name}}</option>
    // </select>
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
    sailingModuleToComplete_index = 0;

    vm.possible_ages = [
      {id : '',  value: '-- select --'},
      {id : '9',  value: '9 years old'},
      {id : '10', value: '10 years old'},
      {id : '11', value: '11 years old'},
      {id : '12', value: '12 years old'},
      {id : '13', value: '13 years old'},
      {id : '14', value: '14 years old'},
      {id : '15', value: '15 years old'},
      {id : '16', value: '16 years old'},
      {id : '17', value: '17 years old'},
      {id : '18', value: '18 years old'},
    ];
    vm.possible_ages_index = 0;



    vm.genders = [
      { name: 'Male', id: 1 },
      { name: 'Female', id: 2 }
    ];
    // $scope.constraints = valdr.getConstraints();
    // $scope.showAllErrors = function () {
    //     $scope.formSubmitted = true;
    // }
  });