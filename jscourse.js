// let externalJS = "We have just created an external js file"


// //string
// //number
// //undefined
// //null
// //boolean
// //symbol
// //bigint
// //Object


// //string
// let stringDataType = "This is a's string data type"

// //number
// let numberDataType = 370098763

// //undefined
// let undefinedDataType

// //null
// let nullDataType = null

// //boolean
// const booleanDataType = false

// //object

// const objectDataType = {
//     name: "Temple Ndukwu",
//     occupation: "Developer",
//     Stack: "Full Stack",
//     machine: "Windows",
//     favoriteEditor: "vscode"
// }

// console.log(objectDataType.occupation);
// // console.log(Object.entries(objectDataType));

// let arrayOfObject = ['temple', true, null, {name: "ndukwu"}, ["coding"] ]

// console.log(arrayOfObject);

// //syntax

// //operators

// //arithmetic operator 

// // var x = 5 * 5
// // var y = 5 + 5
// // var z = 5 - 2
// // var xy = 5 / 2
// // var xyz = 15 % 2

// let x = 4

// //assignment operator

// var freshData = "assignment operator"
// let dt = 5
// const vc = false


// //control flow /conditional statement

// let xData = true
// let yData = true

//logical operator 
//&& || ! 

// const age = 18

// let userAge = 25

// let orData = false
// let anotherOrData = true


// if(orData && anotherOrData){
//     alert(" an adult!")
// }else{
//     alert("Users age is unknown!")
// }



// if(age > userAge){
//     alert("Not an adult!")

// }else if(age <= userAge){
//     alert("This is an adult!")
// }else{
//     alert("Users age is unknown!")
// }

// let expression = 18


// switch (expression) {
//     case 18:
//         alert("user is an adult");
//         break;
//     case 16:
//         alert("user is not an adult");
//         break;
//     default:
//         alert("user age is not known!");
//         break;
// }

// let loopArrayData = 'this'


// // console.log(loopArrayData[1]);

// let condition = 101

// for(let i = 0; i < loopArrayData.length ; i++){
//     console.log(loopArrayData[i]);
// }

// for(var arr of loopArrayData){
//     console.log(arr);
// }

// while(condition){
//     console.log();
//     i++
// }


//function : function is a block that performs a specific task, and you can reuse the block code


// function MyFuntion1(x, y) {


//     console.log(x);
//     return x * y
// }
// let result = MyFuntion1(2, 4)

// console.log(result);


//arrow function 

// const myArrowFunction = (x, y) => {
//    return x - y
// }

// let result =  myArrowFunction(3, 1)

// console.log(result);

//string

// const demo = document.getElementById("demo")

// let myName = "Temple"

// let str = "We are handling string"

// let str2 = "second We are handling org\'s string"

// // let strResult =  str.concat("", str2)

// // let str3 = `We are handling org\'s string by:  ${myName}`

// let html = `<h2>${str.length}</h2>`

// demo.innerHTML = html

// let str = "This is string"

// //slice
// console.log(str.endsWith("string"));

//numbers

//NaN

// let thisIsANumber = 6.83638
// let numberString = 36333

// console.log(thisIsANumber.toFixed(2));

//Math

// Math.random returns a number value from 0  - 1 (1 is excluded)
//infinity
// -infinity

// let numberMath = Math.trunc(5.2999)

// console.log(numberMath);

//array 

// let arr = [2, 6, 1, 9, 17, 17]

// //accessing arrays 

// // let result = arr.forEach((ar) => {
// //     console.log(ar);
// // })

// for(var ar of arr){
//     console.log(ar);
// }

// let obj = {name: "temple", occupation: "Developer", stack: "MERN"}

// // console.log(obj["name"]);

// let objResult = Object.values(obj)

// console.log(objResult);


// let person = {}

// person.category = "school"

// console.log(person);

// let obj = {
//     name: "temple",
//     occupation: "Developer",
//     stack: "MERN",
//     fullName: function () {
//         console.log(this.occupation);
//     }
// }

// obj.fullName()

// let obj2 = {name: "Temple", stack:  "Full stack", country: "Nigerian"}

// const {name, stack , country} = obj2 

// console.log(name, stack, country);

// for(let key in obj){
//     console.log(obj[key]);
// }


// let currentDate = new Date();

// let seconds = currentDate.getSeconds()
// let minutes = currentDate.getMinutes()
// let hours = currentDate.getHours()
// let day = currentDate.getDay() + 1
// let month = currentDate.getMonth() + 1
// let year = currentDate.getFullYear()

// setTimeout(function() {
//     console.log("this is setTimeout");
// }, 5000)

// let clockHTML = document.getElementById("clock")

// function clock() {
//     let currentDate = new Date();

//     let seconds = currentDate.getSeconds()
//     let minutes = currentDate.getMinutes()
//     let hours = currentDate.getHours()


//     let currentTime = hours + " " + minutes + " " + seconds

//     clockHTML.innerHTML = currentTime

//     // console.log(currentTime);

// }




// let clearInt = setInterval(clock, 1000)

//var
// var myFirstName = "This is a VAR"
// var myFirstName = "This is another var"

//let
// let thisIsLet = "This is let"

// thisIsLet = "i have reassigned the Let"

// const thisIsCont = {number: 44}

// console.log(thisIsCont);

//DOM, document object model

// const pTag = document.getElementById("p-tag")
// const h4Tags = document.getElementsByClassName("h4-tag");

// for (let i = 0; i < h4Tags.length; i++) {
//     h4Tags[i].textContent = "This is an h4 tag from the JavaScript course";
// }

// pTag.textContent = "This is a p tag from the JavaScript course";

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     btn.style.background = "red"
// })

// const createElement = document.getElementById("create-element")
// const newElement = document.createElement("p")

// newElement.innerHTML = "newly created element p tag"
// newElement.style.color = "blue"

// createElement.removeChild(newElement)



// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   // Update the thumbnail image with a random color
//   function updateThumbnail() {
//     var thumbnailImage = document.getElementById("thumbnailImage");
//     thumbnailImage.style.backgroundColor = getRandomColor();
//   }

//   // Initial update on page load
//   updateThumbnail();

// const myPromise = new Promise((resolve, reject) => {
//   let myrandomNumber = Math.random()

//   if (myrandomNumber > 0.4) {
//     resolve(myrandomNumber)
//   } else (
//     reject("Promise rejected!")
//   )
// })

// myPromise.then((res) =>{
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

// async function getPromise(){
//   const result = await myPromise
//   console.log(result);
// }

// const getPromise = async (a, b) => {

//   // try {
//   //   const result = await myPromise
//   //   console.log(result);

//   // } catch (error) {
//   //   console.log(error);
//   // }

//   return a * b


// }

// getPromise(2, 4).then((res) => {
//   console.log(res);
// }).catch((err) => {
// console.log(err);
// })

// Error in js

// syntax error

// let x = 4
// console.log(4

// Reference Error 

// function xyz(){
//   const x = 7
// }

// console.log(x)

// type conversion 

//implicit conversion

// let x = 5

// let y = "2"

// let z = x * y
// console.log(z);

//explicit conversion


// let x = 5

// let y = "2"

// let z = Number(y)
// console.log(typeof z);

// import myFuncExport from './exportcode.js'
// // import { myName , cal} from './exportcode.js'

// let result = myFuncExport.myName('Temple')
// let calResult = myFuncExport.cal(2, 4)

// console.log(calResult);

//JSON

// '{
//   "name": "Temple"
// }'

// let myJSON = {name: "Temple", occupation: "developer"}

// let myArr = ["Temple", "Developer"]

// const convertedJSON = JSON.stringify(myJSON)
// const convertedArr = JSON.stringify(myArr)

// console.log(convertedJSON);
// console.log(convertedArr);

// const parsedJSON = JSON.parse(convertedJSON)

// console.log(parsedJSON);

//web api

// local storage

const logoutBtn = document.getElementById("logout")

let obj = { name: "Ndukwu", occupation: "developer" }

let localStorageData = localStorage.setItem("myObj", JSON.stringify(obj))
let getLocalStorageData = localStorage.getItem("myObj")




logoutBtn.addEventListener('click', function () {
  localStorage.removeItem("myObj")
})












