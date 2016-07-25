function mutation(arr) {
  var string = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();
  var final = 0;
  
  for (var i = 0; i < test.length; i++) { 
    if (string.indexOf(test[i]) === -1) {
      final = -1;
    }
  }
  
  if (final === -1) {
    return false;
  } else {
    return true;
  }
}

mutation(["hello", "no"]);