console.log("goditi la versione interattiva");

function spin(){
  let node;
  clearNumbers();  
 for(  c = 1; c <= 100; c++ ){
  

  node = document.createElement("span");
  node.className="box p-3 text-danger";
  node.appendChild(document.createTextNode(checkNumber(c)));
  document.getElementById("numbers").appendChild(node);
  console.log("creating span number "+ c + " with content "+checkNumber(c) );
 }

}
//ho individuato come aggiungere classi css al dom scatenate dall'evento come in questo caso per aprire la sidebar mediante il pulsante hamburger menu in alto a sinistra



function toggleSidebar(){
  //prendiamo il campo class dai vari #id per #sidebar #main-content #cta e  #description
  //usiamo un'array di stringhe specifiche che identificano gli id dei tag che vogliamo editare
const classStringLabels = [
  "sidebar" ,
  "main-content" ,
  "cta" , 
  "description"
];
let classString=[];
let classLists=[];
  for(let x=0 ; x<classStringLabels.length ; x++){
  classString[x]=document.getElementById(classStringLabels[x]).className;
  //console.log("...stampo classString["+x+"]= "+classString[x])
  
  
  //verifico che questo sia id#description, se è visibile diventa invisibile e vice versa

  if(document.getElementById(classStringLabels[x]).classList[0]=="m-c-e" && document.getElementById(classStringLabels[x]).classList[1]!="opened")
    {
      classString[x]=document.getElementById(classStringLabels[x]).className.replace("m-c-e", "m-c-e opened");
    }
    else if (
      document.getElementById(classStringLabels[x]).classList[0]=="m-c-e" 
      && 
      document.getElementById(classStringLabels[x]).classList[1]=="opened"
    ){
      
      classString[x]=document.getElementById(classStringLabels[x]).className.replace("m-c-e opened" , "m-c-e");
    }
    else if (classString[x]=="d-none"){
      classString[x]="d-flex flex-column";
    }
    else if(classString[x]=="d-flex flex-column"){
      classString[x]="d-none";
    }

  
  document.getElementById(classStringLabels[x]).className=classString[x];
  console.log(document.getElementById(classStringLabels[x]).className);
} 
 
} 
  
 













function clearNumbers(){
const children = document.getElementById("numbers").getElementsByClassName("box").length
    

    if (document.getElementById("numbers").getElementsByClassName("box").length > 0) {
      console.log("we have some span tags... proceed to deletion");
      for (let i=0; i<children; i++){
      document.getElementById("numbers").removeChild(document.getElementById("numbers").children[0]);
      console.log(`index ` , `${i}`, `removed` );
      }
    }
    else{
      console.log("no children found... ")
    } 
}



function checkNumber(x){
  
    let message;
    // prima condizione con l'operatore end 
    // riconosce subito il caso specifico
    // non compromettendo i casi singoli di divisibilità
    if(x % 3 == 0 && x % 5 == 0){
      console.log(x+ " IT'S MULTIPLE OF 3 AND 5 FIZZBUZZ ");
      message= "FizzBuzz";
    }
    // i prossimi due cicli riguardano i casi singoli di divisibilità
    else if(x % 3 == 0){
      console.log(x+ " IT'S MULTIPLE OF 3 FIZZ");
      message="Fizz";
    }
    else if(x % 5 == 0){
      console.log(x+ " IT'S MULTIPLE OF 5 BUZZ");
      message = "Buzz";
    }
    // ultimo caso, non è divisibile ne per 3 nè per 5 quindi 
    // stampiamo il numero così com'è
    else message = `${x}`;

    return message
}







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
