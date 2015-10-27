//put this in its own seperate file becuase it is only validator shared by two schemas...
module.exports = function (val) {
  //accepts strings for now, 
  //but in future will need to validate our recurring strings
  return (typeof val === 'string' || val === null); 
};
