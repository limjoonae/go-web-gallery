module.exports = function(grunt) {

  // configure the tasks
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'src',
        src: [ '**/*.js','**/*.js.map','!**/dist/**','**/*.html','**/*.css','assets/**','file/**','image/**','*.ico' ],
        dest: 'build',
        expand: true
      },
    },

  });

  // load the tasks
  grunt.registerTask('default', ['copy']);
  grunt.loadNpmTasks('grunt-contrib-copy');

  // define the tasks
};