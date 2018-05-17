Ext.define('App.view.form.SessionForm', {
    extend: 'Ext.Dialog',
    title: 'Edit Sessions',

    items: [
        {
            xtype: 'formpanel',
            padding: 10,
            items: [
                {
                    xtype: 'textfield',
                    label: 'Title',
                    name: 'title',
                    bind: '{record.title}'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Approved',
                    name: 'approved',
                    bind: '{record.approved}'
                }, 
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    items: [
                        '->', 
                        {
                            xtype: 'button',
                            text: 'Submit',
                            iconCls: 'x-fa fa-check',
                            handler: function() {
                                this.up('dialog').destroy();
                            }
                        }, 
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            iconCls: 'x-fa fa-close',
                            handler: function() {
                                this.up('dialog').destroy();
                            }
                        }
                    ]
                }
            ],
        }
    ]
})