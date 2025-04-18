
// let obj={
// name:'maya',
// obj1:{
//     a:98
// }
// }
// // console.log(obj);
// console.log(obj.obj1.a);

// obj={
//     name:"mishra",


//     myName:function(){
//         name="sukhi";
//         console.log(name);
        
//     },
// }

// obj.myName()

obj={
    name:"mishra",
     name:"rakhi",

    myName:function(){
        
        console.log(this.name);
        
    },
}

obj.myName()