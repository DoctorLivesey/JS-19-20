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
    cssmin: {
      dist: {
        src: ['css/src/*.scss'],
        dest: 'css/dist/style.main.scss'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/dist/style.main.css': 'css/dist/style.main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['css/src/*.scss'],
        tasks: ['cssmin','sass'],
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