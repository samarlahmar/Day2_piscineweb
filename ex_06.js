fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(name) {
var index= fruits.indexOf(name) ;
console.log(index) ;
if (index == -1) {
return null ;
}
else {
return index ;
}
}
displayResult(getIndexFromName("Banana"))