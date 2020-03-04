
class Student{
    constructor(sId, sName){
        this.Id = sId;
        this.Name = sName;
    }
}

const student1 = new Student(23, "Apel");
const student2 = new Student(22, "Sharmin");
console.log(student1, student2);