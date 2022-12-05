// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab1 =  [12,24,58,4,69,12];
let tab2 = [2,48,12];
let tab3 = [89,78,25,64,92,-98,58];
/////interne
function displayLast(t){
    console.log(t[t.length-1]);
}
///externe
displayLast(tab1);
displayLast(tab2);
displayLast(tab3);


// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.


/////interne
function displayLast(t){
    return t[t.length-1];
}
///externe
console.log(displayLast(tab1));
console.log(displayLast(tab2));
console.log(displayLast(tab3));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.


function tabMin(t) {
    let plusPetit=t[0];
    for (let i=0; i<t.length ; i++){
        if (t[i]<plusPetit){
            plusPetit=t[i];
        }
    }
    return plusPetit;
}
console.log(tabMin(tab1));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
/*let tab1 =  [12,24,58,4,69,12];*/

function tabMax(t) {
    let plusGrand=t[0];
    for (let i=0; i<t.length ; i++){
        if (t[i]>plusGrand){
            plusGrand=t[i];
        }
    }
    return plusGrand;
}
console.log(tabMax(tab1));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
/*
function nombrePositifs (p){
    let positif = tab1[0]
    for (let i=0; i<positif;i++){
        if(i=tab1)
    return nombrePositifs
    }

}
console.log(nombrePositifs(tab1));*/






/*
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let tab2 =  [12,24,58,4,69,12];

function tabNfois (t){
    if (t=t[i]){

        console.log("true")
}

console.log(tabNfois(t))*/

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
let n=4
function tabNfois (tab1,n){
    for (let i=0; i<tab1;i++){
    if (n=tab1){
        return "true"
    }else{
        return "false"
    }
}
}
console.log(tabNfois(tab1,n))


// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].


// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]*/