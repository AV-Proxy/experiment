function countWords(arr) {
  return arr.reduce(function(previous, current) {
    previous[current] = ++previous[current] || 1; // increment or initialize to 1
    return previous;
  }, {}); // second argument to reduce initialises countMap to {}
}

module.exports = countWords;


//      input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
//-------------------------------------------------------------------------------
//             |  previousValue | currentValue |	currentIndex |	return value  |
//-------------------------------------------------------------------------------
// first call	 | 	     {}       |    Apple	   |       0	     |   {Apple: 1}   |
//-------------------------------------------------------------------------------
// second call |   {Apple: 1}   |    Banana    |       1	     |   {Apple: 1,   |
//             |                |              |               |   Banana: 1}   |
//-------------------------------------------------------------------------------
// third call	 |   {Apple: 1,   |    Apple	   |       2	     |   {Apple: 2,   |
//             |   Banana: 1}   |              |               |   Banana: 1}   |
//-------------------------------------------------------------------------------
// fourth call |   {Apple: 2,   |    Durian    |       3       |   {Apple: 2,   |
//             |   Banana: 1}   |              |               |   Banana: 1,   |
//             |                |              |               |   Durian: 1}   |
//-------------------------------------------------------------------------------
// fifth call  |   {Apple: 2,   |    Durian    |       4       |   {Apple: 2,   |
//             |   Banana: 1,   |              |               |   Banana: 1,   |
//             |   Durian: 1}   |              |               |   Durian: 2}   |
//-------------------------------------------------------------------------------
// sixth call  |   {Apple: 2,   |    Durian    |       5       |   {Apple: 2,   |
//             |   Banana: 1,   |              |               |   Banana: 1,   |
//             |   Durian: 2}   |              |               |   Durian: 3}   |
//-------------------------------------------------------------------------------
