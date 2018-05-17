Ext.define('App.store.SessionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.sessionstore',
    fields: [
        'id',
        {
            name: 'title',
            sortType: 'asUCString'
        },
        {
            name: 'description',
            type: 'string'
        },
        'approved',
        {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
        },
        {
            convert: function(v, rec) {
                var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a')
                var pretty = convertIt(rec.get("sessionTimeDateTime"));
                return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
        }
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/api/session',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    sorters: [        
        { property: 'title' }
    ]
});