function show(...numbers){
    let sum =0;
    for(let i of numbers){
        sum +=i;
    }
    console.log("Sum = ",sum);
}
show(4,5,6);
show(41,45,78,7998);
show(5698,787,12,1,5,8);
show(10,20)