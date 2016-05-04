module.exports = function (grunt) {

grunt.initConfig({
	copy: {
	  main: {
		files: [
			// includes files within path
			{expand: false, src: ['bower_components/bootstrap/dist/css/bootstrap.css'], dest: 'public_html/css/bootstrap.css', filter: 'isFile'},
			{expand: false, src: ['bower_components/valdr/valdr.js'], dest: 'public_html/js/valdr.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular-translate/angular-translate.js'], dest: 'public_html/js/angular-translate.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular/angular.js'], dest: 'public_html/js/angular.js', filter: 'isFile'},
		],
	  },
	},	
	sass: {                              // Task
		dist: {                            // Target
		  options: {                       // Target options
		    style: 'expanded'
		  },
		  files: {                         // Dictionary of files
		    'public_html/css/css.css': 'scss/css.scss'
		  }
		}
	}
});


grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default',
	[
	 'copy',
	 'sass'
	]);
};

