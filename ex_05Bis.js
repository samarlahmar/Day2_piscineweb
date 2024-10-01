// Write your function here ...
function getBasketContent(nbFruits){
    let fruits = ["strawberry","strawberry","strawberry","apple","apple","lime",
    "lime","peach" , "pear", "pear"] ;
    
    if (nbFruits > fruits.length) {
    console.log("Too many fruit(s)selected.");
    return [] ;
    }
    else {
    console.log(nbFruits + " fruit(s)selected");
    return fruits.slice(0,nbFruits) ;
    }
    
    }

//To test your function copy and paste the code from the last fiddle, and adapt it to fit the needs of this exercise.
var selectedFruits = 6 ;
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent(selectedFruits) ;
	showMyBasket(fruits) ;
}