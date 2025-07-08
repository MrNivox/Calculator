


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


console.log(Multiply(userX,userY))
Substraction(5,2)
Additon(3,2)
