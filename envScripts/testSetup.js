// This file isn't transpiled, so must use CommonJS and ES5

// Tell Mocha to transpile the tests before the tests are run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand and treat them as an empty function (CSS imports in this case)
require.extensions['.css'] = function() {};

