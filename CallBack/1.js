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
/*
sum(10, 20, (a, b) => {
    console.log(a + b);
});

*/
//callback hell
function getData(dataId, getNextData) {

    setTimeout(() => {

        console.log("data", dataId);

        if (getNextData) {
            getNextData();
        }

    }, 2000);
}

getData(1, () => {

    console.log("getting data2...");

    getData(2, () => {

        console.log("getting data3...");

        getData(3, () => {

            console.log("getting data4...");

            getData(4);

        });

    });

});
/*This deeply nested structure is called callback hell (also known as the pyramid of doom). Modern JavaScript usually avoids this by using Promises and async/await, which keep asynchronous code much flatter and easier to follow.*/
