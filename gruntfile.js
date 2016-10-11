module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/dist/script.main.min.js': ['js/dist/script.main.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/src/style.css': 'css/src/style.scss'
        }
      }
    },
    cssmin: {
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.main.css'
      }
    },
    watch: {
      sass: {
        files: ['css/src/*.scss'],
        tasks: ['sass','cssmin'],
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat','uglify','cssmin','sass','watch']);

};