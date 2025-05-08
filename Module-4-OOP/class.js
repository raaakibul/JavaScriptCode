// class 
class Person{
    first_name="Rakibul";
    last_name =" Islam";
    age=25;
    isBangladeshi=true;
    city="Dhaka";

    getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let PersonObject = new Person();
console.log(PersonObject);
console.log(PersonObject.first_name);
console.log(PersonObject.last_name);
