module.exports = function(grunt) {

  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true
        },
        files: {
          'build/css/application.css': 'build/css/application.css'
        }
      }
    },
    cssmin: {
      build: {
        src: 'build/css/application.css',
        dest: 'build/css/application.css'
      }
    },
    htmlhint: {
      build: {
        options: {
          'tag-pair': true, // Force tags to have a closing pair
          'tagname-lowercase': true, // Force tags to be lowercase
          'attr-lowercase': true, // Force attribute names to be lowercase e.g. <div id="header"> is invalid
          'attr-value-double-quotes': true, // Force attributes to have double quotes rather than single
          'doctype-first': false, // Force the DOCTYPE declaration to come first in the document
          'spec-char-escape': true, // Force special characters to be escaped
          'id-unique': true, // Prevent using the same ID multiple times in a document
          'head-script-disabled': true, // Prevent script tags being loaded in the  for performance reasons
          'style-disabled': true // Prevent style tags. CSS should be loaded through
        },
        src: ['index.html']
      }
    },
    sass: {
      build: {
        files: {
          'build/css/application.css': 'build/assets/stylesheets/application.scss'
        }
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/base.min.js': ['assets/js/base.js']
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/**/*.scss'],
        tasks: ['buildcss']
      },
      html: {
        files: ['index.html'],
        tasks: ['htmlhint']
      },
      js: {
          files: ['assets/js/base.js'],
          tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};
