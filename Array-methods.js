var letter = ['a','b','c','d', 'e','f', 'g', 'h']

console.log(letter);

letter.shift();
console.log(letter);

letter.unshift('a');
console.log(letter);

letter.splice(2,0,"y")
console.log(letter);

letter.push('z')
console.log(letter);

// Remove
letter.splice(2,1,)
console.log(letter);

var array =  letter.slice(1)
console.log(array);

// sort methods

var sorted = letter.sort()
console.log(sorted);