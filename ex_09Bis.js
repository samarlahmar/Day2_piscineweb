
function splitOperation(operation){
    split_tab = operation.split(/[+*-/]/);
    var result = [] ;
    result[0]=split_tab[0] ;
    result[1]=operation.charAt(result[0].length);
    result[2]=split_tab[1] ;
    return result ;

}

function doOperation(operation) {
result = splitOperation(operation) ;
switch (result[1]) {
case "+":  return parseInt(result[0]) + parseInt(result[2]) ;
case "-":  return parseInt(result[0]) - parseInt(result[2]) ;
case "*":  return parseInt(result[0]) * parseInt(result[2]) ;
case "/":  return parseInt(result[0]) / parseInt(result[2]) ;
}
}

console.log(doOperation("20/10"));