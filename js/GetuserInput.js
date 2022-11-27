//Get input from user
var name=prompt( "Enter your name: ");
var num1=prompt("Enter your roll number: ");
var num2= parseInt(prompt("Enter your first number : "));
var num3=parseInt(prompt("Enter your second number : "));
var total=(num2+num3)
//uses user input to print the information
document.getElementById("p1").innerHTML ="my name is "+ name;
document.getElementById("p2").innerHTML =" my roll num is "+num1;
document.getElementById("p3").innerHTML = "my first number is "+num2;
document.getElementById("p4").innerHTML ="my second number is "+ num3;
document.getElementById("p5").innerHTML ="total  number is "+total;