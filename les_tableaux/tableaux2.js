/*
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
let tab1 =  [12,24,58,4,69,12];

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
*/

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let tab3 = [12,78,25,12,92,-98,12];

function tabNfois(t,n){
    let returnFois = 0
    for (let i=0;i<t.length;i++){
            if (n == t[i]){ 
                returnFois++
           }
        }return returnFois
}
console.log(tabNfois(tab3,12))

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function exist(t,n){
    for (let i=0;i<t.length;i++){
            if (n == t[i]){ 
               return true;
            }else
        
        return false
}
}
console.log(exist(tab3,12)) // ou console.log(tab3,exist(tab3,12))



// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
function search(t,n,i1,i2){    //tableau, nombre, parti 1 et partie 2 du tableau (borne entre i1 et i2)
    if (i1>i2){
        return false;
    }
    let milieu = (i1+i2)/2
        if t[milieu]==n {
            return true;

        }else if (t[milieu]<n){
            search(t,n,milieu+1,i2);
        }else{
            return search(t,n,i1,milieu-1)
        }
    }
// Créer un tableau qui contient [1,2,3,...,7777]. 
tab4=0
for (let i=0; i<7777;i++){
    if (i<7777){
        tab4.length+1
    }

}
console.log(tab4)

// Créer un tableau qui contient [10,20,30,...,77770].



// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]