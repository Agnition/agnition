//Default values
var port = 3000;
var dbPath = 'mongodb://localhost/test';

if(process.env.ENV === 'PRODUCTION') {
  port = 80;
  dbPath = 'mongodb://localhost/agnition';
}

if(process.env.ENV === 'DEVELOPMENT') {
  port = 80;
  dbPath = 'mongodb://localhost/agnition';
}


module.exports.port = port;
module.exports.dbPath = dbPath;
module.exports.autoSignin = false;
