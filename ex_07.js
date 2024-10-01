fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index) {
if (index > fruits.length) {
return null ;
}
else if (index == -1) {
return fruits[fruits.length -1]
}
else {
return fruits[index] ;
}
}
let result = getFruitNameFromIndex(3) ;
displayResult(result) ;