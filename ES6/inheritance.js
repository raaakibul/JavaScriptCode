// inheritance
// parent class -> child class
class parent{

    hello(){
        console.log("Parent class");
    }
    anotherFunction(){
        console.log("Another parent function");
    }
}
class child extends parent{
    hello(){
        console.log("Child function");
    }
    anotherFunction(){
        console.log("Child class override");
    }
}

// child class
var obj = new child();
obj.hello();
obj.anotherFunction();
// parent class 
var parent_obj = new parent();
parent_obj.anotherFunction();
parent_obj.hello();