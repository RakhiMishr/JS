// let number =5897;
// let reverse = '';
// while(number > 0 ){
//     reverse += number % 10;
//     number= Math.floor(number / 10);//math.floor likhne se . me nhi aayega

// }
// console.log(reverse);


//let your = prompt("enter your number")


let n= 8976;

reverseNumber(n)
reverseNumber(45678322)
function reverseNumber(number){
let r = "";
while(number > 0){
    r += number % 10;
    number = Math.floor (number / 10);

}
console.log(r);
}