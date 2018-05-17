Ext.define('App.view.main.MainView', {
    require: [
        'App.view.list.SessionList',
        'App.view.form.SessionForm'
    ],
    extend: 'Ext.Container',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [ {
        xtype: 'panel',
        layout: {
            type: 'vbox',
        },
        style: {
            width: '30%'
        },
        items: [
            {
                xtype: 'panel',
                title: 'Sessions Panel',
                style: {
                    height: '50%'
                },
                items: [
                    Ext.create('App.view.list.SessionList')
                ]
            },
            {
                xtype: 'panel',
                title: 'Speaker Panel',
                style: {
                    height: '50%'
                }
            }
        ]
    },
    {
        xtype: 'panel',
        title: 'Details Panel',
        style: {
            width: '100%',
            height: '100%'
        }
    }]
});
