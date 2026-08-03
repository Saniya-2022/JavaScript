
let btnAdd=document.getElementById("addBtn");


let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let resultTag=document.getElementById("result");
num1.value="5";
num2.value="7";
resultTag.textContent="Result: 0";
btnAdd.addEventListener("click", ()=>{
console.log("the num1 is:",num1.value);
console.log("the num2 is:",num2.value);
let result=(+num1.value)+(+num2.value);
console.log("the result is:",result);
resultTag.innerHTML="Result: "+result;
}
);
let btnSub=document.getElementById("subBtn");
btnSub.addEventListener("click", ()=>{
    console.log("the num1 is:",num1.value);
    console.log("the num2 is:",num2.value);
    let result=(+num1.value)-(+num2.value);
    console.log("the result is:",result);
    resultTag.innerHTML="Result: "+result;
});
let btnMul=document.getElementById("mulBtn");       
btnMul.addEventListener("click", ()=>{
    console.log("the num1 is:",num1.value);
    console.log("the num2 is:",num2.value);
    let result=(+num1.value)*(+num2.value);
    console.log("the result is:",result);
    resultTag.innerHTML="Result: "+result;
});
let btnDiv=document.getElementById("divBtn");
btnDiv.addEventListener("click", ()=>{
    console.log("the num1 is:",num1.value); 
    console.log("the num2 is:",num2.value);
    let result=Math.floor((+num1.value)/(+num2.value));
    console.log("the result is:",result);
    resultTag.innerHTML="Result: "+result;
}  );