// object 
let billGates = {
    name:"Bill Gates",
    shirt: true,
    shirtColor:"Off White",
    smile:true,
    watch:true,
}
console.log(billGates);
console.log("Name:",billGates.name);

var person = {
    shirt:{
        color:"White",
        quality: "Good",
        price:"200US$"
    },
    swatter:{
        color:"Off white",
        quality:"Good",
        price:"258$",
    },
    smile:true,
    watch:true,
}
console.log(person);
console.log("Shirt price:",person.shirt.price);
console.log(person['smile']);