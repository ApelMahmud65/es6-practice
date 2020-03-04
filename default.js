//backup

function add(num1, num2 = 12){
    //num2 = num2 || 0;

    // if(num2 == undefined){
    //  num2 = 0; 
    // }

    return num1 + num2;
}

const total = add(10,2);
console.log(total);