/*for(let i=1;i<=10;i++){
    console.log(i);
}*/
// Output: 1 2 3 4 5 6 7 8 9 10
// Explanation: The loop iterates from 1 to 10 and prints the value of i in each iteration. The output is 1 2 3 4 5 6 7 8 9 10.

/*let i = 1;
while(i<=10){
    console.log(i);
    i++;
}*/
// Output: 1 2 3 4 5 6 7 8 9 10

/*let b = 1;
do{
    console.log(b);
    b++;
}
while(b<=10);*/


let ar=[3,5,7,8];
/*for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
}*///Output: 3 5 7 8
/*for(let i of ar){
    console.log(i);
}//Output: 3 5 7 8*/

for(let i in ar){
    console.log(i);
}//Output: 0 1 2 3

/*for(let i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
    
}*/
// Output: continue statement skips the current iteration when i is equal to 5. The output is 1 2 3 4 6 7 8 9 10.
/*for(let i=1;i<=10;i++){
    if(i==5)
        break;
    console.log(i);
}*
///Output: break statement terminates the loop when i is equal to 5. The output is 1 2 3 4.
