(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
require('./07-Creating-Data-Models');
},{"./07-Creating-Data-Models":1}]},{},[2]);
