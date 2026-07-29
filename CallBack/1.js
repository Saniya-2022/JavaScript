console.log("Hello");
setTimeout(() => {
  console.log("Morning");
}, 2000);
console.log("Good");
function sum(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function calculator(a,b,sum1,sub1){
 console.log(sum1(a,b));
 console.log(sub1(a,b));
}
calculator(10,5,sum,sub);

