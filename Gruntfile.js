'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: ".jshintrc",
        },
        src: ['Gruntfile.js', 'test/**/*.js', 'bitmap_transformer.js']
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      files: ['**/*', '.gitignore', '.jshintrc', '!package.json'],
      tasks: ['jshint', 'simplemocha', 'jscs']
    },
    jscs: {
      all: {
        options: {
          'standard':'Jquery'
        },
        files: {
          src: ['Gruntfile.js', 'bitmap_transformer.js', 'test/transformer_test.js']
        }
      }
    }
  });
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('syntax', ['jshint']);
  grunt.registerTask('spy', ['watch']);
  grunt.registerTask('default', ['test', 'syntax']);
};