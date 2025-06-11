// constructor
class className{

    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        let res = this.a + this.b
        console.log(res);
    }
}

var obj = new className(10,20);
obj.add()