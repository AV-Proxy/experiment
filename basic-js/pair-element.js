function pairElement(str) {
  const array = str.split('');
  const temp = [];
  const final = [];

  array.map(element => {
    if (element === 'G') {
      temp.push('GC');
    } else if (element === 'C') {
      temp.push('CG');
    } else if (element === 'A') {
      temp.push('AT');
    } else if (element === 'T') {
      temp.push('TA');
    }
    return temp;
  });

  temp.map(element => final.push(element.split('')));

  return final;
}

pairElement('ATCGA');
