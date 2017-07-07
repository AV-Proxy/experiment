function truthCheck(collection, pre) {
  return collection.reduce((status, obj) => {
    return obj[pre] ? status : status = false;
  }, true);
}

console.log(truthCheck([{ user: 'Tinky-Winky', sex: 'male', age: 1 },
            { user: 'Dipsy', sex: 'male', age: 3 },
            { user: 'Laa-Laa', sex: 'female', age: 5 },
            { user: 'Po', sex: 'female', age: 4 }], 'age'));
