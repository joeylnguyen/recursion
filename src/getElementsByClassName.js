// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };



// But instead we're going to implement it from scratch:

 // your code here
  // Does stuff to get all elements that have the same class name
  // returns an array of elements


// Can't move through node branches on its own
// Need to use helper function
  // Goes over the childNodes arrays
  // Pushes current node if it has className
  
  // Calls itself if it has childNodes
// Main function calls helper to pull desired elements
// returns result array


var getElementsByClassName = function(className) {
  var result = [];
  
  var goThroughNodes = function(node) {
    for(var i = 0; i < node.childNodes.length; i++) {

//.contains(className) checks if className exists in the classList
if (node.childNodes[i].classList && node.childNodes[i].classList.contains(className)) {
        result.push(node.childNodes[i]); 
      }      

      if (node.childNodes[i].childNodes.length > 0) {
        goThroughNodes(node.childNodes[i]);
      }
    }
  }

  goThroughNodes(document);
  return result;
};
