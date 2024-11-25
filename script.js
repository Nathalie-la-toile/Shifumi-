//Role: Jouer à tour de rôle pierre, feuille ou ciseaux
//Parametres: non
//Retour: Afficher le choix du joueur 

let co;
let cj;
let cnbo;


//Role: l'ordi choisit nbre aléatoire un chiffre entre 1 et 3 (1 feuille 2 pierre 3 ciseaux)
//Parametres: non
//Retour: le choix de l ordi sous forme de chaine de caractère
function choixJoueur() {
return prompt ("Quel est votre choix entre pierre, feuille et ciseaux ?")
}
console.log(choixJoueur)


//Role: Comparer le choix du joueur et le choix de l ordi
//Parametres: choix du joueur et choix de l ordi
//Retour: le gagnant
function choixNombreOrdi() {
    return Math.ceil(Math.random() * 3);
  }  
  console.log(choixNombreOrdi)


 //Role: Convertir les chiffres en mot
//Parametres: le nbre choisit par l'ordi
//Retour: (1 feuille 2 pierre 3 ciseaux)

  function choixOrdi () {
  if (cnbo===1) {
    co="feuille"
  }
  else if (cnbo===2) {
    co="pierre"
  }
  else if (cnbo===3) {
    co="ciseaux"
  }
}
console.log(choixOrdi)


/*3 étape */
let result;
function resultat () {
if (cj === co) {
   res="il y a une égalité";
}
else if (
(cj==="ciseaux" && co === "feuille") ||
(cj==="feuille" && co === "pierre") ||
(cj==="pierre" && co === "ciseaux")    
)    {
    res = "le joueur gagne";
}
else {
   res = "l'ordinateur gagne";
}
return result;
}


/*4 étape */
function alerte () {
alert ("le joueur a fait " + cj + " et l ordinateur a fait " + co + ". Donc: " + res)
}


function jouer () {
    cj=choixJoueur();
    cnbo=choixNombreOrdi();
    choixOrdi();
    resultat();
    alerte();
}