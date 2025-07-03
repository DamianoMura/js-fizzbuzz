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








// Create a text node:
//const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
//node.appendChild(textnode);

// Append the "li" node to the list:
//document.getElementById("myList").appendChild(node);


