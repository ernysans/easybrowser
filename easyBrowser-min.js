!function(e,n){"function"==typeof define&&define.amd?define(["lend","occurrence"],n):"object"==typeof exports?module.exports=n(require("lend"),require("occurrence")):e.easyBrowser=n(e.lend,e.occurrence)}(this,function(e,n){/*!
     * easyBrowser v0.1: Detect browser and implement helpful classes.
     * (c) 2016 Erny Sans
     * 
     * http://github.com/ernysans/easybrowser
     * http://erny.co
     * MIT License
     */
"use strict";function t(){s&&window.addEventListener("DOMContentLoaded",function(t){function s(){c.classList.remove("client-xl","client-lg","client-md","client-sm","client-xs");var n=e.screenSize("bootstrap");n&&c.classList.add("client-"+n)}t.preventDefault();var c=document.querySelector("body"),i=e.screenDensity();i&&c.classList.add("screen-"+i);var r=e.userAgent();r&&c.classList.add("ua-"+r);var d=e.os();d&&c.classList.add("os-"+d),("Win"==d||"unix"==d||"linux"==d)&&c.classList.add("os-pc");var o=e.language();o&&c.classList.add("lang-"+o);var a=n.debounce(function(){s()},30);window.addEventListener("resize",a,!1),s()},!1)}var s=!!document.querySelector&&!!window.addEventListener;return t});