'use strict';
var jsdom = require('jsdom');

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body><div id="root"></div></body></html>');

// get the window object out of the document
var win = doc.defaultView;

// set globals for mocha
global.document = doc;
global.window = win;


// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (var key in window) {
    if (!window.hasOwnProperty(key)) {
      continue;
    }
    if (key in global) {
      continue;
    }

    global[key] = window[key];
  }
}
// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);
