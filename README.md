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

| Name       | Value    |
| ---------- | -------- |
| Arithmetic | [Go](https://www.w3schools.com/js/js_arithmetic.asp) |
| Comparison |       |
| Bitwise    |          |
| Logical    |          |
| Assignment |    [Go](https://www.w3schools.com/js/js_assignment.asp)      |

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
  case( a >= 80 && a <= 100):
    document.write("A+");
    break;
  case (a >= 70 && a < 80):
    document.write("A");
    break;
  case (a >= 60 && a < 70):
    document.write("A-");
    break;
  case(a >= 50 && a < 60):
    document.write("B");
    break;
  case(a >= 40 && a < 50):
    document.write("C");
    break;
  case (a >= 33 && a < 40):
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
document.write(Person.age)
```
# Array 
```javascript
var a = ["a", "b", "c"];
var b = ["d", "e", "f"];

document.write(b.concat(a));
``` 

এরে মেথড সঃমুহ ঃ  
1. from  
2. filter
3. concat
4. find এর সাহায্যে এরে এর মধ্যে থেকে কোন কিচু খুজে বের করা যাই ;  
5. findindex এর সাহায্যে তার ইন্ডেক্স নাম্বার বের করা যাই;
6. includes মেথড এর মাধ্মে তার মধ্যে কোন নিরদিস্ট ডাটা আচে কিনা তে জানা  যায
7. indexOf মেথড এর মাধ্মে এরে তে ডাটা থাকলে তার ইন্ডক্স নাম্বার রিটরন করবে না থাকলে -1 
8. push মেথডের শাহায্যে এরের শেসে নতুন কিছু যোগ করে 
9. push মেথডের শাহায্যে এরের শেসের element কে বাদ দেয়
10. reverse  মেথডের শাহায্যে এরে কে উল্টানো হয়
11. sort এর মাধ্যমে এরেকে ঊল্টভাবে সাজানো জায়
12. slice
13. splice(index, removeCount, item)
14.



এরে তে ব্যবহ্রত লুপঃ  forEach, for, for_in

