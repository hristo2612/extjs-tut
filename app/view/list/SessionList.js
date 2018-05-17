Ext.define('App.view.list.SessionList', {
    extend: 'Ext.grid.Grid',

    requires: [
        'App.store.SessionStore'
    ],

    store: {
        type: 'sessionstore'
    },

    columns: [{
        text: 'Id',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Approved',
        dataIndex: 'approved',
        flex: 1
    }, {
        text: 'Session Start Time',
        dataIndex: 'sessionTimePretty',
        flex: 1
    }, {
        text: 'Actions',
        width: 50,
        cell: {
            tools: {
                gear: function(grid, info) {
                    console.log(grid);
                    console.log(info);
                    var dialogBox = Ext.create('App.view.form.SessionForm', {
                        record: info.record,
                        viewModel: {
                            data: {
                                record: info.record
                            }
                        }
                    });
    
                    dialogBox.show();
                }
            }
        }
    }],
    height: '100%',
    width: '100%'
})