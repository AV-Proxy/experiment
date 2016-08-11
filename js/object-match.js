function objectMatch(collection, source) {
  const arr = [];
  const sourceKeys = Object.keys(source);

  collection.map(obj => {
    let status = true;

    sourceKeys.map(key => {
      if (obj[key] !== source[key]) { status = false; }
      return status;
    });

    if (status) { arr.push(obj); }
    return arr;
  });

  return arr;
}

objectMatch([
  { first: 'Romeo', last: 'Montague' },
  { first: 'Mercutio', last: null },
  { first: 'Tybalt', last: 'Capulet' },
], { last: 'Capulet', first: 'Tybalt' });
