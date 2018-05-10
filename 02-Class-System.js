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
    title: 'a nice title'
});

session.setTitle('chrises awesome session');
session.setDescription('somenice description');

console.log(session.getTitle());
console.log(session.getDescription());

