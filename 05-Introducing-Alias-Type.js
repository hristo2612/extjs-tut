var myComponent = Ext.create('Ext.Component', {
    html: 'My nifty little component',
    padding: 20,
    tpl: 'name: {first} {last}',
    data: {
        first: 'Hristo',
        last: 'Bogoev'
    }
});
 
 Ext.application({
     name: 'MyApp',
     launch: function() {
         Ext.Viewport.add(myComponent)
     }
 });