module.exports = function(grunt) {

  // configure the tasks
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    copy: {
      build_qa: {
        cwd: 'src',
        src: [ '**/*.js','**/*.js.map','!systemjs.config.js','!systemjs.config.extras.js','!**/dist/**','**/*.html','!index.html','**/*.css','assets/**','file/**','image/**','**/*.ico','**/*.zip' ],
        dest: 'build_qa',
        expand: true
      },
      build_dev: {
        cwd: 'src',
        src: [ '**/*.js','**/*.js.map','!systemjs.config.js','!systemjs.config.extras.js','!**/dist/**','**/*.html','!index.html','**/*.css','assets/**','file/**','image/**','**/*.ico','**/*.zip' ],
        dest: 'build_dev',
        expand: true
      },
    },

  });

  // load the tasks
  grunt.registerTask('default', ['copy']);
  grunt.loadNpmTasks('grunt-contrib-copy');

  // define the tasks
};