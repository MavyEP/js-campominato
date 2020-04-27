//creo una variabile dove andranno inseriti i numeri generati random
var numeri_scelti = [];
//generare le mine (16numeri casuali scelti dal computer da 1 a 100)
var numero_mine_pc = generaNumero(1,100)
console.log("I numeri scelti dal pc ovvero le mine sono: " + numero_mine_pc);

//chiedere all'utente di scegliere il numero per la sua giocata

//controllare se quel numero é uguale ad uno di quelli generati dal pc
//se non é uguale a nessuno dei numeri del pc allora chiedere un altro numero e proseguire
//se il numero é uguale ad uno di quelli del pc il gioco é finot : GameOver




//LA FUNZIONE PER GENERARE DEI NUMERI INTERI RANDOM
function generaNumero(min, max) {
  var i = 1;
  while (i < 16 + 1) {
    var numero_generator =  Math.floor(Math.random() * (max - min + 1) ) + min;
    numeri_scelti.push(numero_generator);
    i++;
  }
  return numeri_scelti
}
