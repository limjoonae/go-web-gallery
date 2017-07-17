module.exports = function(grunt) {

  // configure the tasks
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    copy: {
      build_test: {
        cwd: 'src',
        src: [ '**/*.js','**/*.js.map','!systemjs.config.extras.js','!systemjs.config.prd.js','!**/dist/**','**/*.html','!index.html','**/*.css','assets/**','file/**','image/**','*.ico' ],
        dest: 'build_test',
        expand: true
      },
      build_prd: {
        cwd: 'src',
        src: [ '**/*.js','**/*.js.map','!systemjs.config.js','!systemjs.config.extras.js','!**/dist/**','**/*.html','!index.html','**/*.css','assets/**','file/**','image/**','*.ico' ],
        dest: 'build_prd',
        expand: true
      },
    },

  });

  // load the tasks
  grunt.registerTask('default', ['copy']);
  grunt.loadNpmTasks('grunt-contrib-copy');

  // define the tasks
};