module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	  	less: {
			development: {
		        options: {
		          	compress: true,
		          	yuicompress: true,
		          	optimization: 2
		        },
		        files: {
		          	'public/build/app.css': [
		          		'public/css/main.less'
		          	]
		        }
		    }
		},

		uglify: {
	         options: {
		      	mangle: false
		    },
		    my_target: {
		      	files: {
		        	'public/build/app.min.js': ['public/build/app.js']
		      	}
		    }
		},

		browserify: {
		  	dist: {
		    	files: {
		      		'public/build/app.js': ['public/js/main.js']
		    	}
		  	}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-browserify');
  	grunt.loadNpmTasks('grunt-contrib-uglify');

  	grunt.registerTask("default", [ "less", "browserify", "uglify" ]);
}