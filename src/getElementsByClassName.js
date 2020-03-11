// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };



// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // Does stuff to get all elements that have the same class name
  // Goes into 

  // Base Case
  // If there are no children of current element, return element
  // if (className.children.length === 0) {
  //   return 
  // }

// Look to see if childNodes exist
// if childNodes[className] === className
// return nodeName

// if ()

  var nodes = document.childNodes
  var result = [];

  // If there are childNodes
  // Look at each childNode and see if className is target
  nodes.forEach(function(node) {
  	console.log(node.childNodes.length)
  	console.log(node)
  	console.log(node.className)

  	if (node.className = className) {
  	  result.push(node.nodeName);
  	}
  	if (node.childNodes.length > 0) {

  	}
  	if (node.classList) {
  	  console.log('hi')
  	}

  });


  // var classList = body.classList;

  // var result = classList.map(function (element) {
  // 	element.classList.forEach(function (item) {
  // 	  if (item) {
  // 		return 'hi'
  // 	  };
  //   });
  // });
  	
console.log("this className: ", document.childNodes)
console.log("this result: ", result)
};
