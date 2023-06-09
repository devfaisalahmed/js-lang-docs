# Primitive Datatype

| name      | value                               |
| --------- | ----------------------------------- |
| String    | ` var str = "Faisal ahmed";`        |
| Number    | ` var number = 10;`                 |
| Boolean   | `var a = true/ false;`              |
| Undefined | ` var a; যার মান নিরধারন করা হই নি` |
| Null      | ` var a = null;`                    |

# Non primitive

| Name   | Value                                               |
| ------ | --------------------------------------------------- |
| Object | `var a= {  name: Faisal, age: 23, city: Dhaka   } ` |
| Array  | ` var a =[ 'rajshahi', 'rongpur','dhaka']`          |
| Regexp |                                                     |

# Operator

| Name       | Value                                                |
| ---------- | ---------------------------------------------------- |
| Arithmetic | [Go](https://www.w3schools.com/js/js_arithmetic.asp) |
| Comparison |                                                      |
| Bitwise    |                                                      |
| Logical    |                                                      |
| Assignment | [Go](https://www.w3schools.com/js/js_assignment.asp) |

# Conditional statement

```javascript
var a = prompt();

if (a >= 80 && a <= 100) {
  console.log("A+");
} else if (a >= 70 && a < 80) {
  console.log("A");
} else if (a >= 60 && a < 70) {
  console.log("A-");
} else if (a >= 50 && a < 60) {
  console.log("B");
} else if (a >= 40 && a < 50) {
  console.log("C");
} else if (a >= 33 && a < 40) {
  console.log("D");
} else (a < 33) {
  console.log("F");
}
```

# Switch statement

```javascript
var a = 55;
switch (true) {
  case a >= 80 && a <= 100:
    document.write("A+");
    break;
  case a >= 70 && a < 80:
    document.write("A");
    break;
  case a >= 60 && a < 70:
    document.write("A-");
    break;
  case a >= 50 && a < 60:
    document.write("B");
    break;
  case a >= 40 && a < 50:
    document.write("C");
    break;
  case a >= 33 && a < 40:
    document.write("D");
    break;
  default:
    document.write("F");
}
```

# loop

```javascript
for (var i = 0; i <= 10; i = i + 1) {
  if (i == 5 || i == 8) {
    continue;
  }
  document.write(i + "Submit<br/> ");
}; entry control loop

var i = 0;
while (i <= 10) {
  document.write(i + "Submit<br/> ");
  i = i + 1
};
var i = 0;
do {
  document.write(i + "Submit<br/> ");
  i = i + 1;
} while (i <= 10); exit control loop

```

# function

# Object

```javascript
var Person = {
  names: "Faisal Ahmed",
  age: 23,
  city: "mymensingh",
};
document.write(Person.age);
```

# Array

```javascript
var a = ["a", "b", "c"];
var b = ["d", "e", "f"];

document.write(b.concat(a));
```

এরে মেথড সঃমুহ ঃ

1. from()
2. filter()
3. concat()
4. find() এর সাহায্যে এরে এর মধ্যে থেকে কোন কিচু খুজে বের করা যাই ;
5. findindex() এর সাহায্যে তার ইন্ডেক্স নাম্বার বের করা যাই;
6. includes() মেথড এর মাধ্মে তার মধ্যে কোন নিরদিস্ট ডাটা আচে কিনা তে জানা যায
7. indexOf() মেথড এর মাধ্মে এরে তে ডাটা থাকলে তার ইন্ডক্স নাম্বার রিটরন করবে না থাকলে -1
8. push() মেথডের শাহায্যে এরের শেসে নতুন কিছু যোগ করে
9. pop() মেথডের শাহায্যে এরের শেসের element কে বাদ দেয়
10. reverse() মেথডের শাহায্যে এরে কে উল্টানো হয়
11. sort() এর মাধ্যমে এরেকে ঊল্টভাবে সাজানো জায়
12. slice()
13. splice(index, removeCount, item)

এরে তে ব্যবহ্রত লুপঃ forEach, for, for_in

# string methods

- charAt()
- concat()
- indexOf()
- lastIndexOf()
- replace(searchValue, replacer)
- substr(fromIndex, length)
- substring(indexNumber, length)
- slice()
- toLowerCase()
- toUppercase()
- trim()

# Object methods

- getDate() date is a class. To use make an object fast
- getDay()
- getFullYear()
- getHours()
- getMilliSeconds()

# Math functions

- abs()
- ceil()
- floor()
- max()
- min()
- random()
- round()

# Number Object

- Number.isFinite()
- isInteger()
- parseFloat() /\*_ str to number_/
- parseInt()
- toFixed()
- toString()

# Window Object

- alert()
- confirm()
- prompt ()
- close()
- setTimeout()

# Navigator Object

```javascript
var app = navigator.appCodeName();
var appNam = navigator.appName();
var appVersion = navigator.appVersion();
var cookieEnabled = navigator.cookieEnabled();
var language = navigator.language();
var userAgent = navigator.userAgent();
var platforms = navigator.platform();
```

# JS Event

- onchange()
- onclick()
- onmouseover()
- onmouseout()
- onkeydown()
- onload()

# DOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Dom Practice</title>
  </head>
  <body>
    <p></p>
    <button onclick="demo()">Button</button>

    <script>
      function demo() {
        var info = document.URL;
        document.getElementsByTagName("p")[0].innerHTML = info;
      }
      function demo() {
        document.open("text/html", "replace");
        document.write("<h2> Amer Nam<h2>");
      }
      function demo() {
        let w = window.open();
        w.document.open();
        w.document.write("<h2> Hello World</h2>");
        w.document.close();
      }
    </script>
    /** কিভাবে ইনপুট থেকে ভ্যালু ইনপুট করবো */
    <input id="num1" /><br /><br />
    <input id="num2" /><br /><br />
    <button onclick="addTwoNumber()">add</button>
    <script>
      function addTwoNumber() {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        let result = parseFloat(num1) + parseFloat(num2);
        alert(result);
      }
    </script>
  </body>
</html>
```

- querySelector
- cookie()
- domain()
- lastModified
- URL
- replace
- createElement
- classList.add/remove
- createElement
- appendChild

### uses of appendChild

```html
<ul id="myItems"></ul>
<br />
<input id="myInput" /><br />
<button onclick="addItem()">add</button>
<script>
  function addItem() {
    var item = document.getElementById("myInput").value;
    var listItem = document.createElement("li");
    listItem.innerHTML = item;

    var myItems = document.getElementById("myItems");
    myItems.appendChild(listItem);
  }
</script>
```

# API

### XMLHttpRequest

```javascript
/**
 * event - onload , onerror
 * response- response, responseText, responseType, responseUrl, status, statusText
 * function - open(), send(),setRequestHeader()
 */
const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };
    xhr.onerror = () => {
      console.log("error is here");
    };
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then((res) =>
    console.log(res)
  );
};
getData();

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};
sendData();

//sendData();

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooMa",
    body: "barMa",
    userId: 1,
  });
};
// updateData();

const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "Title is changed",
  });
};
updateSingleData();
```

### FETCH

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    id: 1,
    title: "fooma",
    body: "bar",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      const msg = `${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Fetch Async

```javascript
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const msg = `${res.status}`;
    throw new Error(msg);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
getData();

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
sendData();

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foomaaa",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
updateData();

const delateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
delateData();
```

# ES6

- ## Spread Operator \*\* means three ...

```javascript
let a = [1, 2, 3];
let b = [...a, 4, 5, 6];
console.log(b);
```

- ## Rest parameter
  রেস্ট পারামিটার এর শাথে আরো পারামিটার দিতে চাইলে তা রেস্ট পারামিটার এর আগে দিতে হবে

```javascript
function calc(...nu) {
  let sum = 0;
  for (let i of nu) {
    sum = sum + i;
  }
  console.log(sum);
}
calc(1, 2, 3);
```

- Object

## ES6 Array

- for...in loop
- for... of loop
- Map
  - delete(key)
  - get(key)
  - clear()
  - has(key)
```javascript
var myMap = new Map();
myMap.set("key1", "Bangladesh");
myMap.set("key2", "India");
myMap.set("key3", "Srilanka");
myMap.set("key4", "Natheland");
myMap.set("key5", "US");
myMap.set("key6", "UK");

myMap.delete("key1");
for (let myValue of myMap.values()) {
  console.log(myValue);
}
console.log(myMap.get("key6"));
if (myMap.has("key7")) {
  console.log("Yes");
} else {
  console.log("No");
}
```  
- set  মেথড এ কোন ডুপ্লিকেট ডাটা রাখা জাই না  
  - clear()  
  - delete(value)  
  - has(value)  
  - values()  
  - set.size 
```javascript
var mySet = new Set();
mySet.add("Bangladesh");
mySet.add("india");
mySet.add("Napel");
mySet.add("Bhotan");
mySet.add("india");
mySet.add("Srilanka");
mySet.add("Uk");
mySet.add("india");

console.log(mySet.values());
if (mySet.has("Srilanka")) {
  console.log("OK");
} else {
  console.log("no");
}

```
