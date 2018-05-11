Ext.define("SessionModel", {
    extend: "Ext.data.Model",
    field: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'sessionLevel', type: 'int' },
        { name: 'approved', type: 'bool', defaultValue: false }
    ]
})

var mySession1 = Ext.create("SessionModel", {
    title: 'JAVASCRIPT',
    sessionLevel: 2
})

var mySession2 = Ext.create("SessionModel", {
    title: 'C#',
    sessionLevel: 3
})