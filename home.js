// console.log('hello');
// console.log('hello');
// alert('yooooo');

// var b = 'smoothie';
// console.log(b);

// var some_number = 45;
// console.log(some_number)

// var age = prompt('What is your age?')
// document.getElementById('some_text').innerHTML = age;

// NUmbers in JS
/*
var num1 = 10;
// num1 = num1 +1;
// num1++;

// num1--;
console.log(num1);
  
console.log(num1 % 5)

num1 += 10
console.log(num1)

/*
function fun() {
    console.log('This is a function')
}

fun();
*/

/*
function out_name(your_name) {
    
    document.getElementById('some_text').innerHTML =  'Hello ' + name;
}

// var name = prompt('What is your name?');
// out_name()

function sum_numbers(num1, num2) {
    var result = num1 + num2;
    console.log(result)
}

// sum_numbers(10, 10);

/*
var num = 0;

while (num < 100) {
    num+=1;
    console.log(num);
}
*/

// for (let num = 0; num<=100; num++) {
    // console.log(num);
// }
/*
let your_age = 18; // number
let your_name = 'Chamindu'; // string
let name = {first: 'Chamindu', last:'Jayanath'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // nothing / null
*/

/*
let fruit = 'banana,apple,orange,blackberry';
let more_fruits = 'banana\napple';
console.log(more_fruits);

console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(1, 3));
console.log(fruit.replace('na', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLocaleLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(','));
console.log(fruit.split(''));

*/

let fruits = ['banana', 'apple', 'orange', 'pineapples'];  
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

// console.log(fruits[0]);

fruits[0] = 'pear';

// console.log(fruits);

for (let  i = 0 ; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

// console.log('to string', fruits.toString());
// console.log(fruits.join(' * ')) ;
// console.log(fruits, fruits.pop(), fruits);
// console.log(fruits.push('blackberries'), fruits);
fruits[4] = 'new fruit';
// console.log(fruits);

vegetables = ['asparagus', 'tomato', 'brocolli' ];
let all_grocceries = fruits.concat(vegetables);
// console.log(all_grocceries);

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumbers.sort(function(a,b) {return a-b}));

let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
// console.log(emptyArray);

for (let myNumber = 0; myNumber <= 20; myNumber++) {
    // console.log('Chamindu ', myNumber)
}

let student = { 
    first: 'Chamindu', 
    last: 'Jayanath', 
    age: 25, 
    height:165
};

console.log(student.first);
console.log(student['last']);
student.first = 'notChamindu';
console.log(student.first);
student.age++;
console.log(student.age);
window.onSpotifyWebPlaybackSDKReady = () => {
    const userAccessToken = "[access token]";
    const webPlayback = new Spotify.Player({
      name: "Spotify Web Playback SDK",
      getOAuthToken: callback => { callback(token)}
    });
    webPlayback.connect();
  };