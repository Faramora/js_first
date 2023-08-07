 /*Task 1: Variable Declaration*/
const Name='AYMAN'
const Age=19;
var isStudent=true;
const favoriteColors = [ "green", "red"];

/*Task 2: Variable Types*/
const TString = 'Hello "world"';
console.log(TString);

/*Task 3: Concatenation*/
let SStudent = "pas étudiant";
if (isStudent) {
    SStudent = "étudiant";
}
const combineString = `Je m'appelle ${Name}, j'ai ${Age} ans et je suis ${SStudent}`;
console.log(combineString)

/*Task 5: Logical Operators*/
const ANIMALDYALI = "cat";
const COLORDYALI = "blue";

const ANIMALDYALO = prompt("Quel est votre animal préféré?");
const COLORDYALO = prompt("Quelle est votre couleur préférée?");

if (ANIMALDYALO.toLowerCase() === ANIMALDYALI && COLORDYALO.toLowerCase() === COLORDYALI) {
    console.log(" nous avons le même animal préféré et la même couleur");
} else if (ANIMALDYALO.toLowerCase() === ANIMALDYALI) {
    console.log("Tu as le même animal préféré que moi");
} else if (COLORDYALO.toLowerCase() === COLORDYALI) {
    console.log("Tu as la même couleur préférée que moi !");
} else {
    console.log("Nous avons différents favoris");
}

/*Task 6: Comparison Operators*/
let N= prompt("Saisir le nombre N")

if (N>0) {
    console.log('le nombre est positif')
}
else if (N<0) {
    console.log(`le nombre  est negatif`)
    
}
else if ( N==0){
    console.log("le nombre est nul")
}

else {
    console.log("le nombre est incorrect")
} 

/*Task 8: Truthy & Falsy Values*/

let B= prompt("Saisir le nombre B")
switch (B) {
    case null:
    case undefined:
    case NaN :
    case false:
    case "":
    case '':
        console.log('Falsy');
        break;
    default:
      console.log(`Truthy`);
}

// Task 10: Viewport Manipulation


//Task 12: CSS Pseudostate Addition

















