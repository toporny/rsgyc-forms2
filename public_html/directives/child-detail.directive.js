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