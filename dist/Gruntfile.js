module.exports=function(e){e.initConfig({dir:{webapp:"offlineApp",dist:"dist"},clean:{preload:["./Component-preload.js"]},openui5_preload:{component:{options:{compress:false,resources:{cwd:"src",prefix:"./offlineApp",src:["Component.js","**/*.js","**/*.fragment.xml","**/*.view.xml","**/*.properties","manifest.json","!Component-preload.js","!test/**","!openui5/**"]},dest:"src"},components:"./offlineApp"}}});e.loadNpmTasks("grunt-contrib-clean");e.loadNpmTasks("grunt-openui5");e.registerTask("build",["clean","openui5_preload"]);e.registerTask("default",["build"])};