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
      
      if (node.childNodes[i].classList && node.childNodes[i].classList.value === className) {
        console.log('pushing: ' )
        result.push(node.childNodes[i]); // Something off with my base case, perhaps? 
      }

      if (node.childNodes[i].childNodes) {
        goThroughNodes(node.childNodes[i]);
      }
    }
  }

  goThroughNodes(document);
  console.log(result);
  return result;
};
