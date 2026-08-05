const url = "http://ip-api.com/json";//stores api url in a variable
/*let promise = fetch(url);
console.log(promise);*/
/*  async function is used for the await where await can be used inside the async function*/ 
let pId=document.getElementById("city");
let bId=document.getElementById("but");

const getData =async ()=>{
    console.log("inside getData");
    let response = await  fetch(url);//it doesnot return data directly it returns a promise.await is used to wait for the promise to resolve and return the data
    console.log(response);
    let data= await response.json();
    console.log(data);//print data in console
    pId.innerHTML="<span style='font-weight: bold; color: #c1fc10;'>City:</span> "+data.city+"<br><span style='font-weight: bold; color: #fc9aeb;'>Region:</span> "+data.regionName+"<br><span style='font-weight: bold; color: #0fc74f;'>Country:</span> "+data.country+"<br><span style='font-weight: bold; color: #10adfc;'>Latitude:</span> "+data.lat+"<br><span style='font-weight: bold; color: #d84c06;'>Longitude:</span> "+data.lon+"<br><span style='font-weight: bold; color: #fc3710;'>ISP:</span> "+data.isp+"<br><span style='font-weight: bold; color: #fc3710;'>IP Address:</span> "+data.query;  
    pId.style.display="block";

    //prints data in the html page using innerHTML in the webpage 
};
bId.addEventListener("click",getData);
/*The Response object tells you about the HTTP response (status, headers, etc.). The object returned by response.json() contains the actual content sent by the server.*/
/*fetch() vs response.json()
fetch(url) → Sends a request to the server.
fetch(url) returns a Response object.
The Response object contains:
Status code (200, 404, etc.)
Headers
Response body (data is not yet usable)
response.json() → Reads the response body.
Converts the JSON response into a JavaScript object.
Returns the actual data from the API.
Response object = Information about the server's response.
response.json() = The actual data sent by the server.*/