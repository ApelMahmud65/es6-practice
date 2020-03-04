class Parent{
    constructor(){
        this.fatherName = "Habib";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Abir");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);