function truncateString(str, num) {
  var newArr = [];
  
  if ((num > 3) && (num < str.length)) {
    newArr = str.slice(0, num - 3);
    return newArr + "...";
  } else if (num < 3) {
    newArr = str.slice(0, num);
    return newArr + "...";
  } else if (num >= str.length) {
    return str; 
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);