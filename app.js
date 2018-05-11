(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
require('./05-Introducing-Alias-Type');
},{"./05-Introducing-Alias-Type":1}]},{},[2]);
