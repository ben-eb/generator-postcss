# <% if (namespace) { %>[postcss][postcss]-<% } %><%= pluginShortName %> [![Build Status](https://travis-ci.org/<%= githubName %>/<%= pluginName %>.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/<%= pluginName %>.svg)][npm] [![Dependency Status](https://gemnasium.com/<%= githubName %>/<%= pluginName %>.svg)][deps]

> <%= pluginDescription %>

## Install

With [npm](https://npmjs.org/package/<%= pluginName %>) do:

```
npm install <%= pluginName %> --save
```

## Example

```js
var postcss = require('postcss');

var css = 'h1 { color: red }';
console.log(postcss([ require('<%= pluginName %>') ]).process(css).css);

// => 'h1{color:red}'
```

## API

### <%= functionName %>([options])

#### options

##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('<%= pluginName %>')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [<%= authorName %>](<%= authorUrl %>)

[ci]:      https://travis-ci.org/<%= githubName %>/<%= pluginName %>
[deps]:    https://gemnasium.com/<%= githubName %>/<%= pluginName %>
[npm]:     http://badge.fury.io/js/<%= pluginName %>
[postcss]: https://github.com/postcss/postcss
