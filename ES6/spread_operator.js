// Spread operator ...
let poorCountry = ["Bangladesh", "Pakistan"]
let richCountry = [...poorCountry,"China", "Canada","Usa"]
console.log(poorCountry);
console.log(richCountry); 

// Without spread operator
// richCountry.push("Australia")
richCountry.push(poorCountry)
console.log(richCountry);