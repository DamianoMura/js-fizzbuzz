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
let classString = document.getElementById("sidebar").className;

if(document.getElementById("sidebar").classList[0]=="opened"){
  
//sidebar
    document.getElementById("sidebar").className=document.getElementById("sidebar").className.replace("opened " , "");

    console.log(" sidebar check for opened class "+ document.getElementById("sidebar").className)

    document.getElementsByClassName("description").item(0).className.replace("d-flex , d-none");
    console.log(document.getElementsByClassName("description").item(0).className);
 
//main-content
    document.getElementById("main-content").className=document.getElementById("main-content").className.replace("opened " , "");
     
    console.log(" main-content check for opened class "+ document.getElementById("main-content").className)


//cta
    document.getElementById("cta").className=document.getElementById("cta").className.replace("opened d-none" , "");
    
    console.log(document.getElementById("cta").classList);
  }

else if(document.getElementById("sidebar").classList[0]!="opened"){
  //sidebar 
  document.getElementById("sidebar").className="opened " + document.getElementById("sidebar").className;  
  console.log(document.getElementById("sidebar").classList);

  document.getElementsByClassName("description").item(0).className.replace("d-none" , "d-block")
  console.log(document.getElementsByClassName("description").item(0));
  console.log(document.getElementsByClassName("description").item(0).className);


  //main-content 
  document.getElementById("main-content").className="opened " + document.getElementById("main-content").className;  
  console.log(document.getElementById("main-content").classList);
  //cta 
  document.getElementById("cta").className="opened d-none " + document.getElementById("cta").className;  
  console.log(document.getElementById("cta").classList);
 
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
