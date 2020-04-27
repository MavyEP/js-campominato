//creo una variabile dove andranno inseriti i numeri generati random
var numeri_scelti = [];
var numeri_gia_inseriti = [];
//generare le mine (16numeri casuali scelti dal computer da 1 a 100)
var numero_mine_pc = generaNumero(1,100)
console.log("I numeri scelti dal pc ovvero le mine sono: " + numero_mine_pc);


do {
  var giocata_utente = parseInt(prompt("Fai la tua giocata! Inserisci un numero!"))
  console.log("Il numero che hai scelto é: " + giocata_utente);
  numeri_gia_inseriti.push(giocata_utente);
  console.log("I numeri gia inseriti sono: " + numeri_gia_inseriti);
} while (checkplay(giocata_utente , numero_mine_pc)!=false);


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

//LA FUNZIONE PER VEDERE SE IL TIRO DELL'UTENTE VA BENE
function checkplay(numero_di_controllo , numero_del_pc) {
  for (var i = 0; i < numero_del_pc.length; i++) {
      if (numero_del_pc[i] == numero_di_controllo) {
        console.log("Il numero dell'utente: " + numero_di_controllo + " é uguale al numero che corrisponde ad una mina: " + numero_del_pc[i] + " !!!GAME OVER!!!");
        return false;
     } else {
        console.log("Il numero é valido si continua a giocare!");
      }
  }
}
