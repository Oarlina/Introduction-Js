console.log("Hello Js!"); //log de Hello Js dans la console


/* 
        Déclaration de variable : 
*/
let age = 20; // permet de déclarer une variable qui sera utilisé uniquement dans le bloc ou elle est
// il comprend les entiers, les réels, les chaines de caractères (doivent être mis entre guillemets) et les booléens(true/false)
age = 19; // modification de la valeur age
const ageMin = 18; //variable const : elle ne peut pas être modifir après avoir été initialiser
const prenom = "John";
const nom = "Smith";
const nomcomplet = prenom + " " + nom;
/* 
        Affichage dans la console
*/
console.log("Je m'appelle " + nomcomplet + "."); // permet d'afficher le nom complet
console.log("J'ai " +age + " ans."); // permet d'afficher l'age

//      Exemple de bloc
if (age >= ageMin){
    console.log("Il est majeur car il a " + age + " ans."); // le + sert a faire la concaténation (je peux aussi le faire pour : a=a*b =>a*=b)
}else{
    console.log(`Il est mineur car il a ${age} ans.`); // ceci est un interpolation elle permet d'éviter la concaténation
}


//    L'opératuer terniaire

console.log("John est " + (age >= ageMin ? "majeur" : "mineur") + " en France."); // concaténation
console.log( `John est ${age >= ageMin ? "majeur" : "mineur"} en France.` ); // interpolation


//      les tableaux 
tableau =[1,2,3,4];
tableau.push(5); // ajoute un élément au tableau
console.log(tableau); // affiche le tableau
console.log(`Le table en string donne : [ ${tableau.join("_")} ]`) // permet d'afficher le tableau en string
console.log(`L'élément ${3} ${tableau.includes(3) ? "est" : "n'est pas"} présent dans le tableau [ ${tableau.join("_")} ]`) // permet d'afficher si la valeur 3 est dans le tableau

const indexOf3 = tableau.indexOf(3); // déclare un variable qui renvoie l'index de l'élément recherché / renvoie -1 si non et entre 0 et -1 sinon
if (indexOf3 !=-1){
    console.log(`L'élément ${3} est à l'index ${indexOf3} dans le tableau: [ ${tableau.join("_")} ] `); 
}else {
    console.log(`L'élément ${3} n'est pas présent dans le tableau: [ ${tableau.join("_")} ] `);
}

const morceau = tableau.slice(1,4); // ce la correspond au valeurs 1 à 4 du tableau
console.log(`Voici un morceau de tableau : ${morceau.join(" ")}`);


