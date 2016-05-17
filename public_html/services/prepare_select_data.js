(function() {
  angular.module('rsgycApp')
  .factory('prepareSelectData', prepareSelectData);

  function prepareSelectData () {

    function getCourseTypes() {
      return [  
        {id : "Course_A" , value: "Course A: June 7th – 17th (bank holiday Mon 6th) 9 days  €315 member, 420 non- member"},
        {id : "Course_B" , value: "Course B: June 20th – July 1st, 10 days €350 member, €455 non- member"},
        {id : "Course_C" , value: "Course C: July 4th – July 15th 10 days €350 member, €455 non- member"},
        {id : "Course_D" , value: "Course D: August 2nd – 12th, 9 days (bank holiday 1st) 9 days  €315 member, €420 non- member"},
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

