// Map
var map = new Map();
map.set("1", "Bangladesh");
map.set("2", "USA");
map.set("3", "Finland");
map.set("4", " Italy");
console.log(map);

for(let value of map.values()){
    console.log(value);
}

for(let key of map.keys()){
    console.log(key);
}