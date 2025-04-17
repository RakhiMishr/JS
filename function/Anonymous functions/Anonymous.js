let a = 45+89;
let fn= function (number){
    let r = "";
    while(number > 0){
        r += number % 10;
        number = Math.floor (number / 10);
    
    }
    return r ;
    }
    console.log(a);
    