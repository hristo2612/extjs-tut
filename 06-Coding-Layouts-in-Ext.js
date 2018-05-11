var comp1 = {
    xtype: 'component',
    html: 'comp1'
}

var comp2 = {
    xtype: 'component',
    html: 'comp2'
}

var comp3 = {
    xtype: 'component',
    html: 'comp3'
}

var myContainer = {
    xtype: 'container',
    layout: 'vbox',
    items: [comp1, comp2, comp3]
}

Ext.application({
    name: 'MyApp',
    launch: function() {
        Ext.Viewport.add(myContainer);
    }
});