

const display = document.getElementById("display")
let SignClick = false;
let N1;
let N2;
let Sign;

function Additon(x,y)
{
 return x + y
 
}
function Substraction(x,y)
{
 return x - y
}
function Multiply(x,y)
{
 return x * y
 
}
function Divide (x,y)
{
 return x / y
 
}
function Operate(x ,y ,sign)
{
   if(sign ==  "+"){return Additon(x,y)}
   if(sign ==  "-"){return Substraction(x,y)}
   if(sign ==  "/"){return Divide(x,y)}
   if(sign ==  "*"){return Multiply(x,y)}
   else {return "ERROR!"}
}
if(SignClick == true){
SignClick = false
if(N1 == null){N1 = display.innerText}
else{N2 = display.innerText}



}
 document.getElementById("*").onclick = function () { SignClick = true}
 document.getElementById("-").onclick = function () {SignClick = true}
 document.getElementById("+").onclick = function () {SignClick = true}

 document.getElementById("=").onclick = function () {Operate(N1,N2,Sign) }
 document.getElementById("1").onclick = function () {display.innerText = "1"}
 document.getElementById("2").onclick = function () {display.innerText = "2"}
 document.getElementById("3").onclick = function () {display.innerText = "3"}
 document.getElementById("4").onclick = function () {display.innerText = "4"}
 document.getElementById("5").onclick = function () {display.innerText = "5"}
 document.getElementById("6").onclick = function () {display.innerText = "6"}
 document.getElementById("7").onclick = function () {display.innerText = "7"}
 document.getElementById("8").onclick = function () {display.innerText = "8"}
 document.getElementById("9").onclick = function () {display.innerText = "9"}
 document.getElementById("clear").onclick = function One() {display.innerText = "0000"}




