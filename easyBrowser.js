;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['lend', 'occurrence'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('lend'), require('occurrence'));
    } else {
        root.easyBrowser = factory(root.lend, root.occurrence);
    }
}(this, function(lend, occurrence) {
    /*!
     * easyBrowser v0.1: Detect browser and implement helpful classes.
     * (c) 2016 Erny Sans
     * 
     * http://github.com/ernysans/easybrowser
     * http://erny.co
     * MIT License
     */

    'use strict';

    var supports = !!document.querySelector && !!window.addEventListener;

    // Call ======================================== //
    function easyBrowser() {
        // feature test
        if (!supports) return;

        window.addEventListener('DOMContentLoaded', function(e) {
            e.preventDefault();

            var body = document.querySelector('body'); // select the body

            // =========================================== //
            // Screen Density ============================ //
            // =========================================== //
            var screenDensity = lend.screenDensity();
            if (screenDensity) body.classList.add('screen-' + screenDensity);

            // =========================================== //
            // Navigator User Agent  ===================== //
            // =========================================== //
            var userAgent = lend.userAgent();
            if (userAgent) body.classList.add('ua-' + userAgent);

            // =========================================== //
            // OS ======================================== //
            // =========================================== //
            var os = lend.os();
            if (os) body.classList.add('os-' + os);
            if (os == 'Win' || os == 'unix' || os == 'linux') body.classList.add('os-pc');

            // =========================================== //
            // Languages ================================= //
            // =========================================== //
            var language = lend.language();
            if (language) body.classList.add('lang-' + language);

            // =========================================== //
            // Client Screen Size ================================= //
            // =========================================== //

            function setScreenSize() {
                // Reset client classes
                body.classList.remove('client-xl', 'client-lg', 'client-md', 'client-sm', 'client-xs');

                var screenSize = lend.screenSize('bootstrap');
                if (screenSize) body.classList.add('client-' + screenSize);
            }

            var onResize = occurrence.debounce(function() {
                setScreenSize()
            }, 30);
            window.addEventListener('resize', onResize, false);

            // Set client screen size class
            setScreenSize();

        }, false);
    }
    return easyBrowser;
}));