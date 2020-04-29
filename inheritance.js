// class Parent{
//     constructor(){
//         this.fatherName = "Habib";
//     }
// }

// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// const baby = new Child("Abir");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);



class Parent {
    constructor(){
        this.father = 'Schwerznegger';
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.child = name
    }

    getFullName(){
       return this.child + ' ' + this.father;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby.getFullName());
console.log(baby2.getFullName())

