module.exports = function(grunt) {
	grunt.initConfig({		
		concat: {
			options: {
				separator: '',
			},
			dist: {
				src: ['../scripts/*.functions.js'],
				dest: '../js/application.js',
			},
		},
		
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2,
					livereload: true,
				},
			files: {
				"../css/style.css": "../less/style.less",
			}
		}	
	},
	
	watch: {
		scripts: {
			files: ['../js/*.js', '../scripts/*.js'],
			tasks: ['concat'],
			options: {
				livereload: true,
			}
		},
		
		styles: {
			files: ['../less/*.less'],
			tasks: ['less'],
			options: {
				livereload: true,
			}
		},		
	}
});

grunt.loadNpmTasks('grunt-swig');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-notify');

grunt.registerTask('default', [ 'watch' ]);

};