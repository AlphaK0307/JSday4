// Write a function that takes a single string (word) as argument. The function must 
// return an ordered list containing the indexes of all capital letters in the string.
// whiteboaard 
// function capital(word){
//     let arr= []
//     for (let i =0; i<word.length; i++){
//         console.log(i, word[i])
//         if (word[i] === word[i].toUpperCase()){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(capital('CodEWaRs'))


// var capitals = function (word) {
//     return word.split('')
//         .map(function(word, i) { if (word.toUpperCase() === word) return i; })
//         .filter(function(i) { return i != null })
//   };

console.log('Hello World')

console.log(document);
let body = document.body;

console.log(body);
let children = document.body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);

/*
    Popular document methods
*/

//doc get method
// document.getElementById('id')
// returns the first element with an id that matches the string id
let myHeader = document.getElementById('top-header');
console.log(myHeader);

// document.getElementsByTagName('tagName')
// returns an HTMLCollection (Array) of elements that match the tag name
let myButtons = document.getElementsByTagName('button');
console.log(myButtons);

// document.getElementsByClassName('className')
// returns an HTMLCollection (Array) of elements that match the class name
let myRows = document.getElementsByClassName('row');
console.log(myRows)

// document.querySelector('selectors')
// returns the first element that matches the specified selector or group of selectors
let firstCol = document.querySelector('.col-2');
console.log(firstCol);

let divInNav = document.querySelector('nav > div')
console.log(divInNav)

// document.querySelectorAll('selectors')
// returns a NodeList (Array) of elements that match the specified selector or group of selectors
let allTwoCols = document.querySelectorAll('.col-2');
console.log(allTwoCols);

let allDivsInNav = document.querySelectorAll('nav > div')
console.log(allDivsInNav)

// document.createElement(tagName)
// Creates an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created by JavaScript'; 
newHeader.className = 'text-center';
console.log(newHeader);

//add header ti html body
body.prepend(newHeader)