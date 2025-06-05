let Person = {
    name:"Bill Gates",
    shirt: true,
    shirtColor:"Off White",
    smile:true,
    watch:true,
}
for(let prop in Person){
    // console.log(prop);
    // console.log(Person[prop]);
    console.log(prop,":" ,Person[prop]);
}