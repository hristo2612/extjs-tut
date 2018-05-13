Ext.define("SessionModel", {
    extend: "Ext.data.Model",
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'sessionLevel', type: 'int' },
        { name: 'approved', type: 'bool', defaultValue: false }
    ],
    validators: {
        title: { type: 'length', min: 2 },
        sessionLevel: { type: 'inclusion', list: [1,2,3] }
    }
})

var mySession1 = Ext.create("SessionModel", {
    title: 'J',
    sessionLevel: 4
})

if (!mySession1.isValid()) {
    var errors = mySession1.validate();
    errors.each(function(rec) {
        console.log(rec);
    });
} else {

}

var mySession2 = Ext.create("SessionModel", {
    title: 'C#',
    sessionLevel: 3
})