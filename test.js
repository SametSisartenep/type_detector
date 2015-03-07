var typeOf = require('./index');

var t1 = 5,
  t2 = 'Hello',
  t3 = [3, 1, 4, 1, 5, 9, 2],
  t4 = {pi: 3.14159265358979, e: 2.718281828459},
  t5 = function ( msg ) { return msg === msg.toUpperCase ? msg.toLowerCase : msg.toUpperCase; },
  types = [ t1, t2, t3, t4, t5 ];

function checkType ( typeToCheck, theRealType ) {
  var color = '',
    mark = '';
  if (typeToCheck === theRealType) {
    color = '\x1b[0;32m';
    mark = '✓';
  } else {
    color = '\x1b[0;31m';
    mark = '✗';
  }
  return typeToCheck + color + mark + '\x1b[0m';
}

types.map(function ( type, index ) {
  var output = '',
  _typeof = typeOf(type);

  switch(index) {
    case 0:
      output = checkType(_typeof, 'Number');
      break;
    case 1:
      output = checkType(_typeof, 'String');
      break;
    case 2:
      output = checkType(_typeof, 'Array');
      break;
    case 3:
      output = checkType(_typeof, 'Object');
      break;
    case 4:
      output = checkType(_typeof, 'Function');
      break;
  }

  console.log(output);
});
