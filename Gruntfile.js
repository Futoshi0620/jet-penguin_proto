module.exports = function(grunt) {

    grunt.initConfig({
        //結合
        concat : {
            css : {
                src : [
                'css/base.css',
                'css/style.css',
                'css/swipebox.css',
                'css/top.css'
                ],
                dest : 'css/all.css'
            }
        },
        //圧縮
        cssmin: {
            dist: {
                src: "css/all.css",
                dest: "css/all.min.css"
            }
        },
        //監視
        watch: {
            concat: {
                files: ["css/*.css"],
                tasks: ['concat']
            },
            cssmin: {
                files: ["css/all.css"],
                tasks: ['cssmin']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};