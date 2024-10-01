function splitOperation(operation){
    split_tab = operation.split(/[+*-/]/);
    var result = [] ;
    result[0]=split_tab[0] ;
    result[1]=operation.charAt(result[0].length);
    result[2]=split_tab[1] ;
    return result ;

}

console.log(splitOperation("10*20")); 