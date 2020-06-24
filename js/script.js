// creo oggetto studente
var studente = {
  "nome" : 'alice',
  "cognome" : 'spina',
  "eta" : 27,
}
// stampo proprietà con for in
for (var key in studente) {
  console.log(studente[key]);
}

// creo array studenti
var classe = [
['alice']
]

// do la possibilità all'utente di aggiungere nuovo studente con 3 prompt
var utenteNome = prompt('Inserisci nome studente');
var utenteCognome = prompt('Inserisci cognome studente');
var utenteEta = parseInt(prompt('Inserisci eta studente'));

// variabile studente inserito da utente
var studenteUtente = {
  "nome" : 'utenteNome',
  "cognome" : 'utenteCognome',
  "eta" : utenteEta,
}

// inserisco il nuovo studente nell'array
classe.push(studenteUtente);

//stampo classe con studente inserito da utente
for (var i = 0; i < classe.length; i++) {
  var studenteUtente = classe[i];
  console.log(utenteNome.nome + ' ' + utenteCognome.cognome);
}
