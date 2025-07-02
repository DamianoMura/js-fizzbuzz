console.log("goditi la versione interattiva");


// funzione per cambiare i nomi delle classi con javascript per buzz
function buzzOn(){
let classValue= document.getElementsByClassName("buzz").item(0).attributes.class.nodeValue;
 console.log(classValue);
classValue=classValue.replace("off", "on");
console.log(classValue);
document.getElementsByClassName("buzz").item(0).attributes.class.nodeValue=classValue;
}
function fizzOn(){
let classValue= document.getElementsByClassName("fizz").item(0).attributes.class.nodeValue;
 console.log(classValue);
classValue=classValue.replace("off", "on");
console.log(classValue);
document.getElementsByClassName("fizz").item(0).attributes.class.nodeValue=classValue;
}