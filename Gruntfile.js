module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      sass: {
        files: ['public/stylesheets/sass/*.scss'],
        tasks: ['sass:dist']
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};