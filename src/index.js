const $ = require('jquery');
const greeting = require('say-hello');

const sayHello = () => console.log("Hi, everybody!");

sayHello();

console.log(greeting);


$("body").css("background-color", "blue");

$("body").append("<h1>This is a test!</h1>");