
// iniziamo con un ciclo for usando il suo indice nei controlli if 
// determiniamo cosa stamperemo utilizzando la variabile message 
// dichiarata dentro il for
for(  x = 1; x <= 100; x++ ){
  let message;
  // prima condizione con l'operatore end 
  // riconosce subito il caso specifico
  // non compromettendo i casi singoli di divisibilità
  if(x % 3 ==0 && x % 5 == 0){
    message="FizzBuzz";
  }
  // i prossimi due cicli riguardano i casi singoli di divisibilità
  else if(x % 3 == 0){
    message="Fizz";
  }
  else if(x % 5 == 0){
    message="Buzz";
  }
  // ultimo caso, non è divisibile ne per 3 nè per 5 quindi 
  // stampiamo il numero così com'è
  else message=`${x}`;

  //esponiamo i risultati alla fine di ogni ciclo del for.
  console.log(`${message}`);
}
  