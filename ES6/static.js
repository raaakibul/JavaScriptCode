class className{
    static hello(){
        console.log("Static Hello");
    }
}
var obj = new className();
// obj.hello(); //error
className.hello();