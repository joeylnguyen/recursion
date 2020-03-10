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
  // 3. If it's a primitive value, then return the string version of it by adding '' to them
  

// Failed Idea for array:
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


// Base cases are the most primitive values we can get
// Recursion cases are objects and arrays where we will need to recursively return the stringified versions of every primitive value

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

  if (typeof obj === 'function') {
  	return null;
  }

  if (typeof obj === 'undefined') {
  	return null;
  }
  // if (typeof obj === '')

  // Recursion cases: arrays or objects

  if (Array.isArray(obj)) {
  	var result = []; // create result var to join inputs

  	if (obj.length === 0) { // Base case for array
  	  return '[]';
  	}

  	var result = obj.map(function (item) {  // Use map to store an array of the result of using stringifyJSON on each element
  	  return stringifyJSON(item); // Note to self: maybe change parameter name to itemToString for better readability
  	});

    return '[' + result.join(',') + ']';  // return the stringified result array by adding stringified brackets and joining the result array with comma
  };

  // Check if object

  if (typeof obj === 'object') {
  	// do stuff
    
  	// Need to use stringifyJSON on each key and its value to return the string version
  	// Look at all the keys... maybe use Object.keys
  	// Use map to map together an array of different parts of the string we can then join

  	var result = Object.keys(obj).map(function (item) {
  	  return stringifyJSON(item) + ':' + stringifyJSON(obj[item]); // returns 'key:value'
  	})

  	return '{' + result.join(',') + '}'; // returns '{"key":"value"}'
  
  };

};

