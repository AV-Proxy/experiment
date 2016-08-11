function spinalCase(str) {
  let newString = str.replace(/([A-Z])/g, ' $1').trim();

  newString = newString.replace(/\s\s+/g, '-');
  newString = newString.replace(/_+/g, '');
  newString = newString.replace(/[\s]/g, '-');

  return newString.toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');
