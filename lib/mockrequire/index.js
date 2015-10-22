var fs = require('fs'),
    log = require('debug')('mockrequire'),
    path = require('path'),
    stacktrace = require('stack-trace'),
    vm = require('vm'),
    extend = require('util')._extend,
    ReactTools = require('react-tools');


module.exports = function (module, mocks, options) {

  mocks = mocks || {};
  options = options || {};

  // 3rd object in stacktrace array is calling file
  var caller = stacktrace.get(this)[2].getFileName();

  log('preparing to mockrequire ' + module + ' from module ' + caller);

  var resolve = function (module, base) {
    if (module.charAt(0) !== '.') { 
      return module; 
    }
    return path.resolve(path.dirname(base), module) + '.js';
  };

  var exports = {};

  var findNodeModules = function(file,name) {
    var modulesFolder = path.join(file, '../node_modules');
    if(fs.existsSync(modulesFolder)){
      return path.join(modulesFolder, name);
    } else {
      file = path.join(file, '../');
      return findNodeModules(file,name);
    }
  };

  var sandbox = {
    require: function (name) {
      if (mocks[name]) {
        log('loading mocked module ' + name + ' from parent module ' + module);
        return mocks[name];
      }
      else {
        var file = path.join(path.dirname(caller), path.dirname(module), name);
        if(name.charAt(0) !== '.'){
          //recursivley check for node_modules starting at requiring module
          file = findNodeModules(file,name);
        }
        log('loading module ' + file + ' from parent module ' + module);
        return require(file);
      }
    },
    exports: exports,
    module: {
      exports: exports
    }
  };

  extend(sandbox, global);

  var filepath = resolve(module, caller);

  log('mockrequiring ' + filepath);

  //this compiles jsx code into vanilla JS
  var code;
  if(options.jsx) {
    code = ReactTools.transformWithDetails(fs.readFileSync(filepath, 'utf8')).code;
  } else {
    code = fs.readFileSync(filepath, 'utf8');
  }


  vm.runInNewContext(code, sandbox);
  return sandbox.module.exports;
};
