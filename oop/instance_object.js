// Instance of object
// new optional keyword
let person = new Object();

person.first_name = "Abdur ";
person.last_name = "Rahim";
person.age = 34;
person.city = "Dhaka";
person.getName=()=>{
    return `My name is ${person.first_name} ${person.last_name}`
}

console.log(person.getName);
console.log(person);
console.log(person.getName);