(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
require('./06-Coding-Layouts-in-Ext');
},{"./06-Coding-Layouts-in-Ext":1}]},{},[2]);
