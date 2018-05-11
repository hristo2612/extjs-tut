var showHideBtn = Ext.create('Ext.Button', {
    itemId: 'showHideBtn',
    text: 'Show/Hide button',
    handler: function() {
        var firstBtn = this.up().down('#myComponent');
        if ( firstBtn.isVisible() ) {
            firstBtn.hide();
        } else {
            firstBtn.show();
        }
    }
});

var myComponent = Ext.create('Ext.Component', {
    itemId: "myComponent",
    html: 'My nifty little component',
    padding: 20,
    width: 200,
    height: 200,
    style: {
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    tpl: 'name: {first} {last}',
    data: {
        first: 'Hristo',
        last: 'Bogoev'
    }
});
 
 Ext.application({
     name: 'MyApp',
     launch: function() {
         Ext.Viewport.add({
             layout: {
                 type: 'vbox'
             },
             items: [showHideBtn, myComponent]
         })
     }
 });