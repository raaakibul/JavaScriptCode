// objet literal

let person = {
    first_name : "Abdur ",
    last_name : "Rahim",
    age: 34,
    city: 'Dhaka',
    isBangladeshi :true,
    getName:()=>{
        return `My full name is ${person.first_name} ${person.last_name}`;
    }
}

console.log(person);
console.log(person.isBangladeshi);
// console.log(person.getName);
