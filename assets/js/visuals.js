console.log("goditi la versione interattiva");


// funzione per cambiare i nomi delle classi con javascript per buzz
function buzzSwitch(){
  let classValue;
  if (document.getElementsByClassName("buzz").item(0).classList.item(1) == "off"){
    classValue= document.getElementsByClassName("buzz").item(0).attributes.class.nodeValue;
    classValue=classValue.replace("off", "on");
  }
  else {
    classValue= document.getElementsByClassName("buzz").item(0).attributes.class.nodeValue;
    classValue=classValue.replace("on", "off");
  }
document.getElementsByClassName("buzz").item(0).attributes.class.nodeValue=classValue;
}

// funzione per cambiare i nomi delle classi con javascript per fizz
function fizzSwitch(){
  let classValue;
  if (document.getElementsByClassName("fizz").item(0).classList.item(1) == "off"){
    classValue= document.getElementsByClassName("fizz").item(0).attributes.class.nodeValue;
    classValue=classValue.replace("off", "on");
  }
  else {
    classValue= document.getElementsByClassName("fizz").item(0).attributes.class.nodeValue;
    classValue=classValue.replace("on", "off");
  }
document.getElementsByClassName("fizz").item(0).attributes.class.nodeValue=classValue;
}



  


// Create a text node:
//const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
//node.appendChild(textnode);

// Append the "li" node to the list:
//document.getElementById("myList").appendChild(node);