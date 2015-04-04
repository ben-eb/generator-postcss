'use strict';

var del = require('del');
var path = require('path');
var helpers = require('yeoman-generator').test;

describe(require('./package.json').name, function () {
    beforeEach(function (cb) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                cb(err);
                return;
            }

            this.generator = helpers.createGenerator('postcss:app', ['../app']);
            cb();
        }.bind(this));
    });

    it('generates expected files', function (cb) {
        var expected = [
            '.editorconfig',
            '.gitignore',
            '.jshintrc',
            '.npmignore',
            '.travis.yml',
            'index.js',
            'LICENSE-MIT',
            'package.json',
            'README.md',
            'test.js'
        ];

        helpers.mockPrompt(this.generator, {
            pluginName: 'postcss-superb',
            pluginDescription: 'test description',
            githubName: 'test',
            authorUrl: 'http://test.com'
        });

        this.generator.run(function () {
            helpers.assertFile(expected);
            cb();
        });
    });
});
