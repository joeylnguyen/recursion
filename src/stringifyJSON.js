// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// What does JSON.stringify do? 
  // Converts a js value into a JSON string. Can be used to convert arrays or ojects to JSON
  // Examples: 
    // var ar = ['apple', 'orange', 'banana', 'strawberry'];
    // var json = JSON.stringify(ar); // '["apple","orange","banana","strawberry"]'

// How could we use recursion?
  // Perhaps check the typeof for each character
    // Would we need to manually input '{}' and '[]' when looking at objects or arrays?
    // Maybe we put anything nested in something else in " "
  // 1. Check if input is an object or array
  // 2 a. If input is object, input somehow '{' so we can add to it recursively. Maybe we set a starting function to equal '{'
  // 2 b. If input is array, input somehow '[' so we can add to it recurisvely
  // 3. If it's a primitive value then use .toString ??? can we do that
  // 4.  Add the value to '{' and then delete somehow?


// What would be the base here? if the typeof is string?

var stringifyJSON = function(obj) {
  // your code goes here
  // Base cases
  if (typeof obj === 'string') {
  	return  '"' + obj + '"';
  }

  if (typeof obj === 'number') {
  	return '' + obj;
  }

  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'boolean') {
  	return obj + '';
  }
  // Recursion cases: arrays or objects

  if (Array.isArray(obj)) {
  	var result = []; // create result var to join inputs

  	if (obj.length === 0) {
  	  return '[]';
  	}

  	var result = obj.map(function (item) {
  	  return stringifyJSON(item);
  	});

    return '[' + result.join(',') + ']';

  	// var result = [];
   //  console.log(obj);
  	// if (obj.length === 0) {
  	//   result.push(']');
  	//   result.unshift('[')
  	//   return result.join('');
  	// } else {
   //    result.push(obj[0] + '');
   //    return result.concat(stringifyJSON(obj.slice(1))); 
  	// }
  }

  return result;

};

