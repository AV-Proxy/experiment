function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  }

  return str.split('').map(elem => [elem, pairs[elem]]);
}

pairElement('ATCGA');
