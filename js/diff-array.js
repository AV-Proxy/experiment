function diffArray(arr1, arr2) {
  var newArr = [];
 
  if (arr1.length < arr2.length) {
    for (var i = 0; i < arr2.length; i++) {
      var test1 = arr1.indexOf(arr2[i]);
      
      if (test1 < 0) {
        newArr.push(arr2[i]);
      }
    }
  } else if (arr1.length >= arr2.length) {
    for (var j = 0; j < arr1.length; j++) {
      var test2 = arr2.indexOf(arr1[j]);
      var test3 = arr1.indexOf(arr2[j]);
      
      if (test2 < 0) {
        newArr.push(arr1[j]);
      }
      if (test3 < 0) {
        newArr.push(arr2[j]);
      }
    }
  }
  
  return newArr.filter(function(v) { return !!v; });
}


diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);