module.exports = function ( data ) {
  if (data === null) {
    return 'Null';
  }

  if(data === undefined) {
    return 'Undefined';
  }

  var type = Object.prototype.toString.apply(data);
  return type.slice(type.indexOf(' ') + 1, -1);
};
