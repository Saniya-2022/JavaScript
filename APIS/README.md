# 🌐 Fetch API Learning Project

## 📖 Project Objective

The objective of this project is to learn how JavaScript communicates with a server using the Fetch API and displays the received data on a webpage.

In this project, I fetch my IP address and location information from an API and display it when the user clicks a button.

---

# What is an API?

API stands for **Application Programming Interface**.

It is a bridge that allows two applications to communicate with each other.

An API receives a request from one application, processes it, and sends back a response.

### Example 1

Weather App → Weather API → Weather Data

### Example 2

Instagram App → Instagram Server → Posts & Profile Data

---

# Why do we use APIs?

We use APIs to:

- Get data from a server
- Send data to a server
- Connect our application with other services

Examples:

- Weather App
- Google Maps
- Payment Gateway
- Login System
- Online Shopping
- Chat Applications

---

# What is Fetch API?

Fetch API is a built-in JavaScript API used to send HTTP requests to a server and receive responses.

Syntax:

```javascript
fetch(url);
```

The `fetch()` method returns a **Promise**.

---

# What is a URL?

A URL (Uniform Resource Locator) is the address of a resource on the internet.

Example:

```
http://ip-api.com/json
```

Here,

- `http` → Protocol
- `ip-api.com` → Server
- `/json` → Resource

---

# Workflow

```
User
   │
   ▼
Clicks Button
   │
   ▼
Event Listener
   │
   ▼
Calls getData()
   │
   ▼
fetch(url)
   │
   ▼
Request sent to Server
   │
   ▼
Server processes request
   │
   ▼
Server sends Response
   │
   ▼
response.json()
   │
   ▼
JavaScript Object
   │
   ▼
innerHTML
   │
   ▼
Display Data on Webpage
```

---

# Understanding the Code

## Step 1

Store the API URL.

```javascript
const url = "http://ip-api.com/json";
```

This URL tells JavaScript where to fetch the data from.

---

## Step 2

Get HTML elements.

```javascript
let pId = document.getElementById("city");
let bId = document.getElementById("but");
```

- `pId` stores the paragraph.
- `bId` stores the button.

---

## Step 3

Create an async function.

```javascript
const getData = async () => {

}
```

Why?

Because `await` can only be used inside an `async` function.

---

## Step 4

Send a request.

```javascript
let response = await fetch(url);
```

What happens?

- Browser sends a request.
- Server receives the request.
- Server processes it.
- Server sends a response.

The returned value is a **Response Object**.

---

# What is a Response Object?

A Response Object contains information about the server response.

Example:

```javascript
Response {
    status: 200,
    ok: true,
    headers: ...
}
```

It **does not contain the actual data directly**.

It contains:

- Status Code
- Headers
- Body
- Response Information

---

# What is JSON?

JSON stands for **JavaScript Object Notation**.

It is a format used to exchange data.

Example:

```json
{
    "city":"Hyderabad",
    "country":"India"
}
```

---

# Why use response.json()?

The server sends data in JSON format.

JavaScript cannot directly use it.

So we write:

```javascript
let data = await response.json();
```

This converts JSON into a JavaScript object.

Now we can access:

```javascript
data.city
data.country
data.lat
```

---

# Difference between fetch() and response.json()

## fetch()

- Sends request
- Returns Promise
- Gives Response Object

Example

```javascript
let response = await fetch(url);
```

---

## response.json()

- Reads response body
- Converts JSON into JavaScript Object
- Returns actual data

Example

```javascript
let data = await response.json();
```

---

# Display Data

```javascript
pId.innerHTML = ...
```

`innerHTML` changes the HTML inside an element.

Output:

```
City : Hyderabad
Region : Telangana
Country : India
Latitude : 17.38
Longitude : 78.48
ISP : Airtel
IP Address : xxx.xxx.xxx.xxx
```

---

# Event Listener

```javascript
bId.addEventListener("click", getData);
```

Meaning:

When the button is clicked,

↓

Execute

↓

`getData()`

---

# What is a Promise?

A Promise represents a value that will be available in the future.

States:

- Pending
- Fulfilled
- Rejected

Since `fetch()` takes time, it returns a Promise.

---

# Why async and await?

Without `await`, JavaScript will not wait for the server response.

It continues executing the next line immediately.

`await` pauses the function until the Promise is completed.

---

# HTTP Methods

| Method | Purpose |
|---------|---------|
| GET | Read data |
| POST | Send data |
| PUT | Update data |
| DELETE | Delete data |

This project uses:

```
GET
```

because we are only reading data.

---

# Common HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Concepts Learned

- API
- Fetch API
- URL
- HTTP Request
- HTTP Response
- Response Object
- JSON
- Promise
- Async
- Await
- DOM Manipulation
- innerHTML
- Event Listener

---

# Real-World Applications

The same Fetch API is used in:

- Weather Applications
- Google Maps
- Instagram Feed
- YouTube Videos
- Amazon Products
- Banking Applications
- Online Payments
- Chat Applications
- Login Systems

---

# Key Takeaways

- `fetch()` sends a request to the server.
- The server returns a Response Object.
- `response.json()` converts JSON into a JavaScript object.
- `await` waits until the request is completed.
- `innerHTML` displays the received data on the webpage.
- APIs allow applications to communicate and exchange data.