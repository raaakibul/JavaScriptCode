function Student(name, age, roll, cgpa){
    this.name = name
    this.age= age
    this.roll = roll
    this.cgpa = cgpa 

    this.display = function(){
        console.log("Name:",this.name)
        console.log("Age:",this.age)
        console.log("Roll:",this.roll)
        console.log("Cgpa:",this.cgpa);
    }
}



var student1 = new Student("Rakibul Islam",24,14, 3.45)
// console.log(student1);
student1.display()
var student2 = new Student("Anisul Islam",27,17, 3.77)
// console.log(student2);
student2.display()

var student3 = new Student("Anisul", 34,38,3.85)
student3.display()

