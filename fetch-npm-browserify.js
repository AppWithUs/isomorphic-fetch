// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
var __self = typeof self !== 'undefined' ? self : this;
module.exports = __self.fetch.bind(__self);
