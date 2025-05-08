function person(){
    this.first_name = "Rakibul";
    this.last_name = "Islam";
    this.age =25;
    this.city = "Dhaka";
    this.isBangladeshi = true;
    this.getName=()=>{
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let personInstance = new person();
console.log(personInstance);
console.log(personInstance.first_name);
console.log(personInstance.last_name);

