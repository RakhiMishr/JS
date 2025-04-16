// class student{
//     name="mishra"
// }
// let s1 = new student();
// console.log(s1.name);

class student{
    name="mishra"
   kuchbhiname = function kuchbhiname() {
        console.log(this.name);
    }
}
let s1 = new student();
s1.kuchbhiname();