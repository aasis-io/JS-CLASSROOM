// document.write("Hello JS!");

// console.log("Hello, This is my fist time with JS!");

// var person = { firstName: "John", lastName: "nash", age: "64" };

// for (var prop in person) {
//   document.write("<p>" + prop + "=" + person[prop] + "</p>");
// }

// var myArray = ["John", "nash", "64"];

// let greet = "Hello World!"; 

// for (let character of greet) {
//   document.write(character + "<br>"); //H,e,l,l,o,,W,o,r,l,d!
// }

// var Name = "sachin";

// for (let character of Name) {
//   document.write(character + "<br>");
// }


// ----------------------Array Practice------------------- //

// var arr =["sachin","ashish","Dipesh"];

// arr.unshift("surya");
// arr.shift();

// arr.push("last");
// arr.pop();

// document.write(arr);






// // alert("Hello World!");

// //Alert Example

// if(confirm("Press a button!")){
//   var txt = "You pressed OK!";
// }
// else {
//   var txt = "You Pressed Cancel!";
// }

// document.write(txt);

// function sum(num1,num2) {
//   var total = num1 + num2;
//   document.write(total);
// }

// num1 = parseInt(prompt("Enter the first number:"));
// num2 = parseInt(prompt("Enter the second number:"));



// document.write(sum(num1, num2));
// sum(num1,num2);

//Array Examples

// var fruit = ['apple', 'orange', 'banana'];
// fruit.push('kiwi');
// fruit.pop("kiwi");
// fruit.unshift("pineapple");
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


// class Ashish{

//   constructor(){
//     document.write("This is constructor");
//   }

// }

// let a = new Ashish();



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

// // let newUser = new User();
// // newUser.validate();

// function display() {
//   var userName = document.getElementById("name").value;
//   var password = document.getElementById("password").value;


//   let user = new User(userName, password);

//   user.validate();
// }

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   validate() {
//     if (this.username == null || this.username == "") {
//       document.write("Field is Empty");
//     } else {
//       document.write("Login Details Received from " + this.username);
//     }
//   }
// }

// var Box = document.querySelector(".box"),
//   Show = document.querySelector(".show"),
//   Hide = document.querySelector(".hide");

  // Hide.addEventListener("click", function(){
  //   Box.classList.add("hide-box")
  // })

  // Show.addEventListener("click", function(){
  //   Box.classList.remove("hide-box")
  // })
  
// var Box = document.querySelector(".box"),
// toggleButton = document.querySelector(".show");


// toggleButton.addEventListener("click", function(){

//   Box.classList.toggle("hide-box");

// })


// function makeItGreen(){
//   Box.classList.add("green");
// }

// function removeClass(){
//   Box.classList.remove("green");
// }

