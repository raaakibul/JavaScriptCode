// Map
var map = new Map();
map.set("1", "Bangladesh");
map.set("2", "USA");
map.set("3", "Finland");
map.set("4", "Italy");
console.log(map);

// map.delete("1");
// map.clear();
// map.has(3)

for(let value of map.values()){
    console.log(value);
}

for(let key of map.keys()){
    console.log(key);
}
// delete(key)
// get(key)
// clear()
// has(value)
if(map.has("1")){
    console.log("Yes");
}else{
    console.log("No");
}