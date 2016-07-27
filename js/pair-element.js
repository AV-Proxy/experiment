function pairElement(str) {
  var array =  str.split('');
  var temp = [];
  var final = [];
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'G') {
      array[i] = 'GC';
    } else if (array[i] === 'C') {
      array[i] = 'CG';
    } else if (array[i] === 'A') {
      array[i] = 'AT';
    } else if (array[i] === 'T') {
      array[i] = 'TA';
    }
  }
  
  for (var j = 0; j < array.length; j++) {
    temp = array[j].split("");
    final.push(temp);
  }
  
  return final;
}

pairElement("ATCGA");