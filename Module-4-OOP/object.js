// javascript obeject 
let person ={
    first_name: "First",
    last_name: "Last",
    age: 34,
    city:"Dhaka",
    isBangladeshi:true,
    getName:()=>{
        return `My full name is ${person.first_name} ${person.last_name}`;    
    }
}
console.log(person);
console.log(person.first_name);
console.log(person.isBangladeshi);

// instance of object
let student = Object();
student.first_name = "Rakibul";
student.last_name = "Islam";
student.isBangladeshi = true;
student.getName=()=>{
    return `My name is ${student.first_name} ${student.last_name}`
}
console.log(student);
console.log(student.first_name);
console.log(student.last_name);