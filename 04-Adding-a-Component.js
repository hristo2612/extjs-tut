var myComponent = Ext.create('Ext.Component', {
   html: 'My first ExtJS APP'
});

Ext.application({
    name: 'MyApp',
    launch: function() {
        Ext.Viewport.add(myComponent)
    }
});