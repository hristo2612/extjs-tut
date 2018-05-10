Ext.define('MyApp.Session', {
    config: {
        title: '',
        description: '',
        level: 'beginner'
    },

    constructor: function(config) {
         this.initConfig(config);
    }
});

var session = Ext.create("MyApp.Session", {
});

session.setTitle('chrises awesome session');

console.log(session.getTitle());

