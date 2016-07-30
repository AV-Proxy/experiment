function objectMatch(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  
  
  collection.map(function(obj) {
    var status = true;
    
    sourceKeys.map(function(key) {
      if (obj[key] != source[key]) {
        status = false;
      }
    })
    
    if (status) {
      arr.push(obj);
    }
  });
  
  return arr;
}

objectMatch([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
], { last: "Capulet", first: "Tybalt" });
