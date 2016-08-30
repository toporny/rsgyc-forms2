module.exports = function (grunt) {

grunt.initConfig({
	env: grunt.option('env') || 'dev',

	sass: {                              // Task
		dist: {                            // Target
		  options: {                       // Target options
		    style: 'expanded'
		  },
		  files: {                         // Dictionary of files
		    'public_html/css/css.css': 'scss/css.scss'
		  }
		}
	},

	cssmin: {
		options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		target: {
			files: {
				'build/css.css': ['public_html/css/css.css', 'public_html/css/bootstrap.css']
			}
		}
	},

	copy: {
	  main: {
		files: [
			// includes files within path
			{expand: false, src: ['bower_components/angular-translate/angular-translate.js'], dest: 'public_html/js/angular-translate.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/valdr/valdr.js'], dest: 'public_html/js/valdr.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/valdr/valdr-message.js'], dest: 'public_html/js/valdr-message.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/bootstrap/dist/css/bootstrap.css'], dest: 'public_html/css/bootstrap.css', filter: 'isFile'},
			{expand: false, src: ['bower_components/valdr/valdr.min.js'], dest: 'public_html/js/valdr.min.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular/angular.js'], dest: 'public_html/js/angular.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular-stripe/release/angular-stripe.js'], dest: 'public_html/js/angular-stripe.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular-payments/lib/angular-payments.min.js'], dest: 'public_html/js/angular-payments.min.js', filter: 'isFile'},
			{expand: false, src: ['public_html/index.html'], dest: 'build/index.html', filter: 'isFile'},
			{expand: true, cwd: 'public_html/js/', src: ['*.min.js'], dest: 'build/js'},
		],
	  },
	},
    
    uglify: {
    	options: {
	      beautify: false,
	      sourceMap: false,
	      sourceMapIncludeSources: false
	    },
      app: {
        files: [{
          expand: false,
          cwd: '',
          src: [
            'public_html/forms/*.js',
			'public_html/services/*.js',
			'public_html/controllers/*.js',
          ],
          dest: 'build/custom.min.js'
        }]
      },
    },

});


grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');


grunt.registerTask('default',
	[
		'sass',
		'cssmin',
		'copy',
		'uglify',
	]);
};

