const $ = require('jquery');

const sayHello = () => console.log("Hi, everybody!");

sayHello();

$("body").css("background-color", "blue");

$("body").append("<h1>This is a test!</h1>");