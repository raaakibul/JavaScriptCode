// var number = [10,20,30,40,50,60,70,80]

// console.log(number[0]);

// var sum = 0;
// for(i=0;i<number.length;i++){
//     console.log(number[i]);
//     sum = sum + number[i];
// }

// console.log("sum = ",sum);

var num = new Array();

for( var i = 0; i<5; i++){
    num[i] = prompt("Enter a number");
}

sum = 0;

for(i = 0; i<5; i++){
    sum = sum + num[i];
}
console.log("Sum of numbers: " + sum);