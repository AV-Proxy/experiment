function rot13(str) {
  var string = '';
  
  for(i = 0; i < str.length; i++) {
    var test = str.charCodeAt(i);
    
    if (test >= 65 && test < 78) {
      string = string + String.fromCharCode(test + 13);
    } else if (test >= 78 && test < 91) {
      string = string + String.fromCharCode(test - 13);
    } else {
      string = string + str[i];
    }
  }
  return string;
}

rot13("LBH QVQ VG!");