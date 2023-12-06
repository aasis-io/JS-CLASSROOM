// document.write("Hello JS!");

// console.log("Hello, This is my fist time with JS!");

// var person = { firstName: "John", lastName: "nash", age: "64" };

// for (var prop in person) {
//   document.write("<p>" + prop + "=" + person[prop] + "</p>");
// }

// let greet = "Hello World!";

// for (let character of greet) {
//   document.write(character + "<br>"); //H,e,l,l,o,,W,o,r,l,d!
// }

// // alert("Hello World!");

// //Alert Example

// if(confirm("Press a button!")){
//   var txt = "You pressed OK!";
// }
// else {
//   var txt = "You Pressed Cancel!";
// }

// document.write(txt);

// // function sum(num1,num2) {
// //   var total = num1 + num2;
// //   return(total);
// // }

// // num1 = parseInt(prompt("Enter the first number:"));
// // num2 = parseInt(prompt("Enter the second number:"));

// // document.write(sum(num1, num2));

//Array Examples

// var fruit = ['apple', 'orange', 'banana'];
// fruit.push('kiwi');
// fruit.pop("kiwi");
// fruit.unshift();
// document.write(fruit);

// class Person{
//   constructor(name){
//     this.name = name;
//   }
//   getName(){
//     return this.name;
//   }
// }
// let person = new Person("John");
// person.getName();

// class User{
//     constructor(username, password){
//         this.username = username;
//         this.password = password;
//     }

//     validate(){
//         if(this.username == null || this.password == null){
//             return alert("Field is Empty");
//         }

//         else{
//             return alert("Login Details Received from " + this.username);
//         }
//     }
// }

// let newUser = new User();
// newUser.validate();

function display() {
  var userName = document.getElementById("name").value;

  let user = new User(userName);

  user.validate();
}

class User {
  constructor(username) {
    this.username = username;
  }

  validate() {
    if (this.username == null || this.username == "") {
      document.write("Field is Empty");
    } else {
      document.write("Login Details Received from " + this.username);
    }
  }
}
