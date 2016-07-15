function capitalizeFirst(str) {
  
  str = str.toLowerCase();
  str = str.split(' ');
  
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);  
  }
  
  str = str.join(" ");
  
  return str;    
  }
  

capitalizeFirst("i'm a little tea pot");