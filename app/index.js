'use strict';

var generators = require('yeoman-generator');

/**
 * If leading underscore, remove it; if no leading underscore, prepend a '.'
 */
var files = [
    'editorconfig',
    'gitignore',
    'jshintrc',
    'npmignore',
    'travis.yml',
    '_CHANGELOG.md',
    '_index.js',
    '_LICENSE-MIT',
    '_package.json',
    '_README.md',
    '_test.js'
];

function required (type) {
    return function (value) {
        return value.length ? true : 'You must provide a ' + type + '!';
    };
}

module.exports = generators.Base.extend({
    init: function () {
        var done = this.async();
        this.prompt([{
            name: 'pluginName',
            message: 'Plugin name:',
            default: this.appname.replace(/\s/g, '-'),
            validate: required('plugin name'),
            filter: function (name) {
                return this._.slugify(name);
            }.bind(this)
        }, {
            name: 'postcssPrefix',
            type: 'confirm',
            message: 'Prefix this with PostCSS?',
            when: function (props) {
                return !~props.pluginName.indexOf('postcss-');
            }
        }, {
            name: 'pluginDescription',
            message: 'Plugin description:',
            default: 'Transform CSS with PostCSS.'
        }, {
            name: 'githubName',
            message: 'GitHub username:',
            store: true,
            validate: required('GitHub username')
        }, {
            name: 'authorUrl',
            message: 'Your homepage:',
            store: true,
            default: function (props) {
                var repository = props.githubName + '/' + props.pluginName;
                return 'https://github.com/' + repository;
            }
        }], function (props) {
            var plugin = props.pluginName;

            if (props.postcssPrefix) {
                plugin = 'postcss-' + plugin;
            }
            this.pluginName = plugin;
            this.pluginDescription = props.pluginDescription;

            this.pluginShortName = plugin.replace('postcss-', '');
            this.functionName = this._.camelize(this.pluginShortName);

            this.authorName = this.user.git.name();
            this.authorEmail = this.user.git.email();
            this.authorUrl = props.authorUrl;

            this.githubName = props.githubName;

            this.namespace = ~plugin.indexOf('postcss-');

            files.map(function (file) {
                if (file.charAt(0) === '_') {
                    this.template(file, file.substring(1));
                } else {
                    this.template(file, '.' + file);
                }
            }.bind(this));

            done();
        }.bind(this));
    }
});
