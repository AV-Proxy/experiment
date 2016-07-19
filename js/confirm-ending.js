function confirmEnding(str, target) {
  
  while (target.length > 1) {
    if ((target.substr(-2) == str.substr(-2))) {
      return true;
      }
    else {
      return false;
    }
  }  
  
  while (target.length == 1) {
    if ((target.substr(-1) == str.substr(-1))) {
      return true;
      }
    else {
      return false;
    }
  }
}

confirmEnding("He has to give me a new name", "name");