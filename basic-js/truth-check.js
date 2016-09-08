function truthCheck(collection, pre) {
  let temp = true;

  collection.map(element => {
    if (!Object.prototype.hasOwnProperty.call(element, pre) || !element[pre]) {
      temp = false;
    }

    return temp;
  });

  return temp;
}

truthCheck([{ user: 'Tinky-Winky', sex: 'male', age: 0 },
            { user: 'Dipsy', sex: 'male', age: 3 },
            { user: 'Laa-Laa', sex: 'female', age: 5 },
            { user: 'Po', sex: 'female', age: 4 }], 'age');
