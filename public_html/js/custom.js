
angular.module('rsgycApp', ['valdr', 'pascalprecht.translate'])
  .config(valdrProviderAddConstraints)
  .config(valdrProviderAddCheckBoxValidator)

  function valdrProviderAddCheckBoxValidator(valdrProvider) {
    valdrProvider.addValidator('checkboxRequired');
  }

  function valdrProviderAddConstraints(valdrProvider) {
    valdrProvider.addConstraints({
      'rsgycForm': {
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
  .service('prepareSelectData', prepareSelectData);

  function prepareSelectData () {

    function getSailingModules() {
      return [  
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
    }

    function getPossibleAges () {
      possible_ages = [{id : '',  value: '-- select --'}];
      for (i=9; i<19; i++) {
        possible_ages.push({id : i, value: i});
      }
      return possible_ages;
    }

    function getMonths () {
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var months = [];
      months = [{id : '',  value: '- exp. month -'}];
      for (i=0;i<12;i++) {
        months.push({id : i+1, value: '('+((i<9)?('0'+(i+1)):i+1)+') ' + monthNames[i]});
      }
      return months;
    }

    function getCreditCardExpYears () {
      years = [{id : '',  value: '- exp. year -'}];
      for (i = new Date().getFullYear(); i<new Date().getFullYear()+25; i++) {
        years.push({id : i, value: i})
      }
      return years;
    }

    function getCadetList () {
      cadetList = [];
      for (i = 1; i < 4; i++) {
        cadetList.push({id : i, value: i})
      }
      return cadetList;
    }

    return {
      getCadetList: getCadetList,
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
        'childName1': 'Child name',
        'parentName': 'Parent name',
        'parentMobile': 'Parent Mobile Phone',
        'parent2Mobile': 'Parent 2 Mobile Phone',
        'parentEmail' : 'Email',
        'boatType1': 'Boat type',
        'age': 'Age',
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
    vm.formSubm = false;
    vm.data = {};
    vm.showSecondChild = true;
    vm.showThirdChild = true;
    vm.showFourthChild = true;

    vm.sailing_module = prepareSelectData.getSailingModules();
    vm.possible_ages = prepareSelectData.getPossibleAges();
    vm.months = prepareSelectData.getMonths();
    vm.year = prepareSelectData.getCreditCardExpYears();

    var child_data0 =  {
        name: 'Imie pierwsze',
        dateOfBirth: '20/09/1973',
        medicalConditions: 'brak numer 1',
        boatType: 'Feva',
        membershipNo: '123'
    };
    var child_data1 =  {
        name: 'Imie drugie',
        dateOfBirth: '02/02/2019',
        medicalConditions: 'brak numer 2',
        boatType: 'Laser',
        membershipNo: 'dwa fwa'
    };
    var child_data2 =  {
        name: '',
        dateOfBirth: '',
        medicalConditions: '',
        boatType: '',
        membershipNo: ''
    };

    vm.data = {
      sailing_module: '',
      age: '',
      course_details: 'A',
      child: [child_data0, child_data1, child_data2, child_data2],
    };


    console.log('controler start');
    //vm.form.$setPristine();


    function submit() {
      console.log('submit');
      vm.formSubm = true;
      console.log('vm.data', vm.data);

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




(function() {
  angular.module('rsgycApp')
  .directive('child1Detail', child1Detail)
  // .directive('child2Detail', child2Detail)
  // .directive('child3Detail', child3Detail)
  // .directive('child4Detail', child4Detail)
  ;

  function child1Detail() {
  var child1_template = ' \
  @{{childIndex}}@ \
  <div ng-repeat="item in [0,1,2,3]"> \
{{item}} \
                  <button type="button" style="float:right" class="btn btn-danger btn-xs">Remove details</button> \
                  <h4>Child Details</h4> \
                  <div class="row"> \
                    <div class="col-xs-6"> \
                      <label for="childName1">Child\'s Name</label> \
                    </div> \
                    <div class="col-xs-6"> \
                      <label for="dateOfBirth1">Date of Birth (DD/MM/YYYY): </label> \
                    </div> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                    <input type="text" \
                      class="form-control" \
                      name="childName1" \
                      ng-model="testController.data.child[item].name"> \
                    </div> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                      <input type="text" \
                        class="form-control" \
                        name="dateOfBirth1" \
                        ng-model="testController.data.child[item].dateOfBirth"> \
                    </div> \
                  </div> \
                  <div class="form-group" valdr-form-group> \
                    <label for="medicalConditions1">Any Allergies/Medical Conditions:</label> \
                    <input type="text" \
                      class="form-control" \
                      name="medicalConditions1" \
                      ng-model="testController.data.child[childIndex].medicalConditions"> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6"> \
                      <label for="boatType1">Boat Type</label> \
                    </div> \
                    <div class="col-xs-6"> \
                      <label for="dateOfBirth1">Cadet Membership No</label> \
                    </div> \
                  </div> \
                  <div class="row"> \
                    <div class="col-xs-6" class="form-group" valdr-form-group> \
                      <select \
                        class="form-control" \
                        name="boatType1" \
                        ng-model="testController.data.child[childIndex].boatType"> \
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
                        name="membershipNo1" \
                        placeholder="leave blank if you don\'t have" \
                        ng-model="testController.data.child[childIndex].membershipNo"> \
                    </div> \
                  </div> \
                  <button class="btn btn-success btn-xs">Add another child</button> \
  </div> \
    ';

    return {
      scope: "=",
        link: function($scope, $element, $attrs) {
          $scope.childIndex = parseInt($attrs.childindex);
          $scope.childData = angular.fromJson($attrs.childdata);
          console.log('$scope.childIndex', $scope.childIndex);
          console.log('$scope.childData', $scope.childData);

//          $scope.titleaha = $attrs.childdata.name;
//           $scope.childData =  'nowy tytul';


          return $element;
      },
      template: child1_template
    };
  };




  // function child2Detail() {
  // var child2_template = ' \
  // <hr> \
  // <button type="button" style="float:right" class="btn btn-danger btn-xs">Remove details</button> \
  // <h4>Second Child Details</h4> \
  // <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="childName2">Child\'s Name</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth2">Date of Birth (DD/MM/YYYY): </label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="childName2" \
  //                     ng-model="testController.childName2"> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="dateOfBirth2" \
  //                       ng-model="testController.dateOfBirth2"> \
  //                   </div> \
  //                 </div> \
  //                 <div class="form-group" valdr-form-group> \
  //                   <label for="medicalConditions2">Any Allergies/Medical Conditions:</label> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="medicalConditions2" \
  //                     ng-model="testController.medicalConditions2"> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="boatType2">Boat Type</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth2">Cadet Membership No</label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <select \
  //                       class="form-control" \
  //                       name="boatType2" \
  //                       ng-model="testController.boatType2"> \
  //                       <option value="" selected>-- please select boat type --</option> \
  //                       <option value="Optimist">Optimist</option> \
  //                       <option value="Feva">Feva</option> \
  //                       <option value="Laser">Laser</option> \
  //                       <option value="420">420</option> \
  //                       <option value="Other">Other</option> \
  //                     </select> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="membershipNo2" \
  //                       placeholder="leave blank if you don\'t have" \
  //                       ng-model="testController.membershipNo2"> \
  //                   </div> \
  //                 </div> \
  //                 <button class="btn btn-success btn-xs">Add another child</button> \
  //   ';

  //   return {
  //     template: child2_template
  //   };
  // };


  // function child3Detail() {
  // var child3_template = ' \
  // <hr> \
  // <button type="button" style="float:right" class="btn btn-danger btn-xs">Remove details</button> \
  // <h4>Third Child Details</h4> \
  // <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="childName3">Child\'s Name</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth3">Date of Birth (DD/MM/YYYY): </label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="childName3" \
  //                     ng-model="testController.childName3"> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="dateOfBirth3" \
  //                       ng-model="testController.dateOfBirth3"> \
  //                   </div> \
  //                 </div> \
  //                 <div class="form-group" valdr-form-group> \
  //                   <label for="medicalConditions3">Any Allergies/Medical Conditions:</label> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="medicalConditions3" \
  //                     ng-model="testController.medicalConditions3"> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="boatType3">Boat Type</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth3">Cadet Membership No</label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <select \
  //                       class="form-control" \
  //                       name="boatType3" \
  //                       ng-model="testController.boatType3"> \
  //                       <option value="" selected>-- please select boat type --</option> \
  //                       <option value="Optimist">Optimist</option> \
  //                       <option value="Feva">Feva</option> \
  //                       <option value="Laser">Laser</option> \
  //                       <option value="420">420</option> \
  //                       <option value="Other">Other</option> \
  //                     </select> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="membershipNo3" \
  //                       placeholder="leave blank if you don\'t have" \
  //                       ng-model="testController.membershipNo3"> \
  //                   </div> \
  //                 </div> \
  //                 <button class="btn btn-success btn-xs">Add another child</button> \
  //   ';

  //   return {
  //     template: child3_template
  //   };
  // };



  // function child4Detail() {
  // var child4_template = ' \
  // <hr> \
  // <button type="button" style="float:right" class="btn btn-danger btn-xs">Remove details</button> \
  // <h4>Fourth Child Details</h4> \
  // <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="childName4">Child\'s Name</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth4">Date of Birth (DD/MM/YYYY): </label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="childName4" \
  //                     ng-model="testController.childName4"> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="dateOfBirth4" \
  //                       ng-model="testController.dateOfBirth4"> \
  //                   </div> \
  //                 </div> \
  //                 <div class="form-group" valdr-form-group> \
  //                   <label for="medicalConditions4">Any Allergies/Medical Conditions:</label> \
  //                   <input type="text" \
  //                     class="form-control" \
  //                     name="medicalConditions4" \
  //                     ng-model="testController.medicalConditions4"> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6"> \
  //                     <label for="boatType4">Boat Type</label> \
  //                   </div> \
  //                   <div class="col-xs-6"> \
  //                     <label for="dateOfBirth4">Cadet Membership No</label> \
  //                   </div> \
  //                 </div> \
  //                 <div class="row"> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <select \
  //                       class="form-control" \
  //                       name="boatType4" \
  //                       ng-model="testController.boatType4"> \
  //                       <option value="" selected>-- please select boat type --</option> \
  //                       <option value="Optimist">Optimist</option> \
  //                       <option value="Feva">Feva</option> \
  //                       <option value="Laser">Laser</option> \
  //                       <option value="420">420</option> \
  //                       <option value="Other">Other</option> \
  //                     </select> \
  //                   </div> \
  //                   <div class="col-xs-6" class="form-group" valdr-form-group> \
  //                     <input type="text" \
  //                       class="form-control" \
  //                       name="membershipNo4" \
  //                       placeholder="leave blank if you don\'t have" \
  //                       ng-model="testController.membershipNo4"> \
  //                   </div> \
  //                 </div> \
  //                 <button class="btn btn-success btn-xs">Add another child</button> \
  //   ';

  //   return {
  //     template: child4_template
  //   };
  // };


})();
