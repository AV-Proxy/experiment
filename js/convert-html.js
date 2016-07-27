function convertHTML(str) {
  var newstr = '';
  
  if (str.match(/<>/g)) {
    newstr = str.replace(/<>/g, '&lt;&gt;');
  } else if (str.match(/</g)) {
    newstr = str.replace(/</g, '&lt;');
  } else if (str.match(/>/g)) {
    newstr = str.replace(/>/g, '&gt;');
  } else if (str.match(/"/g)) { 
    newstr = str.replace(/"/g, '&quot;');
  } else if (str.match(/'/g)) {
    newstr = str.replace(/'/g, '&apos;');
  } else if (str.match(/\&/g)) {
    newstr = str.replace(/\&/g, '&amp;');
  } else {
    newstr = str;
  }
  return newstr;
}

convertHTML("Hamburgers < Pizza < Tacos");