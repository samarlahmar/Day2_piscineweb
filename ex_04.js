// Your code here...
const  a = 4 ;
const  b = 2 ;
const action = "sub" ;
function addition() {
 return a+b  ;
}

function subtraction() {
return a-b ;
}

function calculator(){
if (action === "add") {
return addition() ;} 
else{
return subtraction() ;
}
}