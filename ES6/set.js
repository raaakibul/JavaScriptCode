var set_item = new Set();

set_item.add("Green");
set_item.add("Red");
set_item.add("Blue");
set_item.add("Yellow");
set_item.add("Black");

console.log(set_item);

var set_item_1 = new Set(['A','B','C','D']);
console.log(set_item_1);
// set_item_1.clear();
set_item_1.delete("C");
console.log(set_item_1);

if(set_item.has("Tomato")){
    console.log("Yes");
}else{
    console.log("No");
}