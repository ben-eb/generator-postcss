'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('<%= pluginName %>', function (opts) {
    opts = opts || {};

    return function (css) {
        // Plugin logic goes here
    };
});
