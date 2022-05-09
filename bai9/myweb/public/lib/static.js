var baseUrl = ''

module.exports.map = function(name){
    return baseUrl + name
}

module.exports = function(grunt) {
    grunt.initConfig({
        less:{
            development:{
                files:{
                    "public/css/main.css" : "less/main.less",
                }
            }
        }
    })
    grunt.loadNpmTask('grunt-contrib-less')
}