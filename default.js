// Backup value;

function add (num1, num2 = 10){

    // num2 = num2 || 10;

    // if(num2 == undefined){
    //     num2 = 0;
    // }

    return num1 + num2;
}

const total = add(21, 3);
console.log(total);