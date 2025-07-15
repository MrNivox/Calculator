

const display = document.getElementById("display")
let SignClick = false;
let N1 = null;
let N2 = null;
let Sign;
let tempDisplay;

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
   let result;
   if(sign ==  "+"){y = Additon(x,y)}
   if(sign ==  "-"){y = Substraction(x,y)}
   if(sign ==  "/"){y = Divide(x,y)}
   if(sign ==  "*"){y = Multiply(x,y)}

   display.innerText = y
}
function Check() {

 if(SignClick == true){
   SignClick = false
   
   N1 = tempDisplay
   console.log(N1)
   
   
 }

}

function removeSign(str) {

    return str.replace("*" | "/",'');
}

function removeLeadingZerosRegex(str) {
    return str.replace(/^0+(?=\d)/, '');
}

 document.getElementById("/").onclick = function () {Sign = "/"; SignClick = true;tempDisplay = display.innerText ;display.innerText = "/"; Check()}
 document.getElementById("*").onclick = function () { Sign = "*";SignClick = true; tempDisplay = display.innerText ;display.innerText = "*"; Check()}
 document.getElementById("-").onclick = function () {Sign = "-";SignClick = true;tempDisplay = display.innerText ;display.innerText = "-"; Check()}
 document.getElementById("+").onclick = function () {Sign = "+";SignClick = true;tempDisplay = display.innerText ;display.innerText = "+"; Check()}
 document.getElementById("=").onclick = function () {N2 = display.innerText ;console.log(Operate(N1,N2,Sign)) }

 document.getElementById("1").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "1";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("2").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "2";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("3").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "3";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("4").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "4";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("5").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "5";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("6").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "6";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("7").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "7";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("8").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "8";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("9").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "9";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("0").onclick = function () {display.innerText = removeSign(display.innerText);display.innerText = display.innerText + "0";display.innerText = removeLeadingZerosRegex(display.innerText)}
 document.getElementById("clear").onclick = function One() {display.innerText = "0000"}
  


 





