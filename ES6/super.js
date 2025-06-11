class parent{

    hello(){
        console.log("Parent class");
    }
    anotherFunction(){
        console.log("Another parent function");
    }
}
class child extends parent{
     demo(){
        super.hello();
        super.anotherFunction();
     }
}

var child_obj = new child();
child_obj.demo();