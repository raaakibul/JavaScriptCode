// object constructor

function person(){
    this.first_name = "Abdur "
    this.last_name = "Rahim"
    this.age = 34
    this.city = "Dhaka"
    this.isBangladeshi = true

    this.getName=()=>{
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let p1 = new person();

console.log(p1);
console.log(p1.age);
console.log(p1.getName);