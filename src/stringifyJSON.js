// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'function') {
    return null;
  }
  if(typeof obj === 'undefined') {
    return null;
  }
  if(obj === null) {
    return 'null';
  }
  if(typeof obj === 'string') {
    return `"${obj}"`;
  }
  if(typeof obj === 'number') {
    return `${obj}`;
  }
  if(typeof obj === 'boolean') {
    return `${obj}`;
  }
  if(Array.isArray(obj)) {
    return '[' +
    obj.map(function(o) {
      return stringifyJSON(o)
    }).join(',') + ']';
  }
  if(!Array.isArray(obj) && typeof obj === 'object') {
    let result = [];
    Object.keys(obj).forEach(function(key) {
      let val = stringifyJSON(obj[key]);
      if(val !== null) {
        result.push(`"${key}":${val}`);
      }
    })
    return '{' + result.join(',') + '}';
  }

};
