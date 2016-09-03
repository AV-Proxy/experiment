var numbers = process.argv.slice(2).map(Number).reduce((x,y) => x + y);

console.log(numbers);
