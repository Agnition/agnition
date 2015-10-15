var port = 3000;
if(process.env.ENV === 'PRODUCTION') {
  port = 80;
}

if(process.env.ENV === 'DEVELOPMENT') {
  port = 80;
}

var dbPath = 'mongodb://localhost/agnition';

module.exports.port = port;
module.exports.dbPath = dbPath;