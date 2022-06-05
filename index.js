//Q#1
alert("JavaScript Alert\n"+"\nWelcome to JS Land...\nHappy Coding!");
//Q#2
var firstName;
var lastName;
var age;
var profession;
firstName=prompt("Enter your First Name: ");
lastName=prompt("Enter your last: ");
age=prompt("Please enter your age: ");
profession=prompt("What is your profession");
alert(firstName+"  "+lastName);
alert("You are: "+ age + "years old")
alert("Your profession is: "+profession)
//Q#3
var email="universe@gmail.com";
alert("my email address is: "+email)
//Q#4
document.write("Yeh! I can write HTML content through JavaScript")
//Q#5
var myAge=29;
alert("I am "+myAge+" years old")
//Q#6
var birthYear =1992;
document.write("My birth year is "+birthYear)
//Q#7
document.write("Variable names can only contain number, $, and _. For Example: $my_1stVariable<br>") //Why <br> is working and not\n?
document.write("Variable must begin with a letter, $, or _.For example $name, _name or name<br>")
document.write("Variable names are case sensitive<br>")
document.write("Variable names should not be JS keyword")
//Q#8
let firstNumber=prompt("Please Enter your first Number= ");//How can a program get integar or float values as input?
let secondNumber=prompt("Please Enter your second Number= ");
var first =parseFloat(firstNumber);
var second =parseFloat(secondNumber);
var thirdNumber=first+second;
document.write(thirdNumber)
//Q#10
var x
document.write("Value after variable declaration is: "+x+".<br>")
x=2
document.write("Initial value: "+x+".<br>")
++x
document.write("Value after increment is: "+x+".")
//Q#11, First Solution:
var celsiusTemperture=39;
var fahrenheitTemperature;
fahrenheitTemperature=(celsiusTemperture*9/5)+32;
document.write(celsiusTemperture+'\u00B0 C is '+fahrenheitTemperature+'\u00B0 F'+"<br>"); //"<br>" is only added so that the results of First and Second Solution appear on two different lines
celsiusTemperture=(fahrenheitTemperature-32)*5/9;
document.write(fahrenheitTemperature+'\u00B0 F is '+celsiusTemperture+'\u00B0 C <br>');
//Q#11, Second Solution:
celsiusTemperture=prompt("Please enter the temperature in Celsius: ");
fahrenheitTemperature=(celsiusTemperture*9/5)+32;
document.write(celsiusTemperture+'\u00B0 C is '+fahrenheitTemperature+'\u00B0 F<br>');
//Q#12
var USD=10;
var SaudiRayals=25;
var PKR;
PKR=USD*155+SaudiRayals*41;
document.write("Total Currency in PKR is "+PKR+"<br>")
//Q#13
var numberOne=prompt("Please enter a Number: ");
var numberOnePrePlus;
var numberOnePostPlus;
document.write("Result:<br>");
document.write("The value of a is: "+numberOne+"<br>"+".......................................<br>")
numberOnePrePlus=++numberOne;
document.write("The value of ++a is: "+numberOnePrePlus+"<br>"+"Now the value of a is "+numberOne+"<br>");
numberOnePostPlus=numberOne++;
document.write("The value of a++ is: "+numberOnePostPlus+"<br>"+"Now the value of a is "+numberOne+"<br>");
//Q#14
var a=2,b=1;
var result=--a - --b + ++b + b--;
document.write("a is: "+a+"<br>"+"b is: "+b+"<br>"+"result is: "+result);
