module.exports = function (grunt) {
    /* Project configuration - http://gruntjs.com/configuring-tasks */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/*'],
        copy: {
            dist: { files: [{expand: true, src: ['src/**'], dest: 'dist/'}] },
        },
        uglify: {
            dist: { 
				files: [
					{
						expand: true, 
						cwd: 'dist/', 
						src: ['src/*.js', '!*.min.js'], 
						dest: 'dist/',
						rename: function(destBase, destPath) {
							return destBase+destPath.replace('.js', '.min.js');
						}
					}
				]
			}
			
        },
        cssmin: {
            dist: { 
				files: [
					{
						expand: true, 
						cwd: 'dist/', 
						src: ['src/*.css', '!*.min.css'], 
						dest: 'dist/',
						rename: function(destBase, destPath) {
							return destBase+destPath.replace('.css', '.min.css');
						}
					}
				]
			}
        },
        htmlmin: {
            options: { caseSensitive: true, removeComments: true },
            dist: { files: [{expand: true, cwd: 'dist/', src: ['src/*.html'], dest: 'dist/'}] }
        }
    });

    /* Load the plugins that provides the tasks */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Tasks */
    grunt.registerTask('default', ['clean', 'copy:dist', 'uglify:dist', 'cssmin', 'htmlmin']);
};