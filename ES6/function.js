function add(...numbers){
    let sum =0;
    for(let i of numbers){
        sum+=i;
    }
    console.log("Sum:",sum);
}
add(4,5);
add(40,45,78);
add(1,4,8,7,9,52);