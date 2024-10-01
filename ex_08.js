fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

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

function getFruit(parameter) {
if (typeof parameter == "number") {
return getFruitNameFromIndex(parameter) ;
}
else {
return getIndexFromName(parameter) ;
}
}