function chunkArrayInGroups(arr, size) {
  
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];
  var final = [];
  
  if (arr.length <= size*2) {
 
    arr1 = arr.slice(0, size);
    arr2 = arr.slice(size, size*2);
    final.push(arr1, arr2);
  } else if (arr.length <= size*3) {

    arr1 = arr.slice(0, size);
    arr2 = arr.slice(size, size*2);
    arr3 = arr.slice(size*2, size*3);
    final.push(arr1, arr2, arr3);
  } else if (arr.length <= size*4) {

    arr1 = arr.slice(0, size);
    arr2 = arr.slice(size, size*2);
    arr3 = arr.slice(size*2, size*3);
    arr4 = arr.slice(size*3, size*4);
    final.push(arr1, arr2, arr3, arr4);
  } else if (arr.length <= size*5) {
    
    arr1 = arr.slice(0, size);
    arr2 = arr.slice(size, size*2);
    arr3 = arr.slice(size*2, size*3);
    arr4 = arr.slice(size*3, size*4);
    arr5 = arr.slice(size*4, size*5);
    final.push(arr1, arr2, arr3, arr4, arr5);
  }
 return final;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);