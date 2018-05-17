Ext.onReady(function(){
    Ext.require('App.view.main.MainView');
})

Ext.define('App.Application', {
    extend: 'Ext.app.Application',

    name: "App",
    
    requires: [
        'App.*'
    ],

    launch: function(profile) {
        Ext.Viewport.add(Ext.create('App.view.main.MainView'));
    }

})