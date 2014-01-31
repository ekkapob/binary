module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['sass']);
  grunt.loadNpmTasks('grunt-sass');
};