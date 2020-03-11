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
  var result = [];
  var nodes = document.body

  // If there are childNodes
  // Look at each childNode and see if className is target
  nodes.childNodes.forEach(function(node) {
    var elements = []
    if (node.nodeType == Node.ELEMENT_NODE) {
      elements.push(node);
      elements.forEach(function(element) {
      	if (element.classList.length > 0) {
          result.push(element)
      	};
      });
      	console.log(node.classList)
      	console.log(node.nodeName)
  
    };

  // var classList = nodes.classList;
  // console.log(classList.length)
  // console.log(nodes.childNodes);
  // console.log(classList);
  
  // var classList = body.classList;

  // var result = classList.map(function (element) {
  // 	element.classList.forEach(function (item) {
  // 	  if (item) {
  // 		return 'hi'
  // 	  };
  //   });
  // });
  	
// console.log("this className: ", 'hi')
console.log("this result: ", result)
return result;

  });
};