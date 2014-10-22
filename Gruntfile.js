module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        //added reporter for readable error lines
        reporter: require('jshint-stylish')
      },
      scripts: {
        src: [
          'src/**/*.js'
        ]
      }
    },
    clean: {
      dist: ['dist']
    },
    copy: {
      src: {
        expand: true,
        flatten: true,
        cwd: 'src',
        src: '**/*.js',
        dest: 'dist'
      }
    },
    uglify: {
      scripts: {
        files: {
          'dist/anglicize.min.js': ['src/anglicize.js']
        }
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['default'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    }
  });
  grunt.registerTask('default', ['clean', 'jshint', 'copy', 'uglify']);
};