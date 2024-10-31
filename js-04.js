// ----------------------- Ejercicio 1 - Sum of Resistors in Series ------------------------------

function sumRest(myArrayRest){

    let sum = 0;

    for (let num of myArrayRest) {
        sum = sum + Math.abs(num);
    }

    return sum;
}

console.log("La suma de la lista de numeros da: ", sumRest([-1, 5, 6, 3]));

//-------------------- Ejercicio 2 - Number divided into halves -------------------------------
const num = 10;

function numDiv (num){

    const middle = [num / 2, num / 2];
    return middle;

}

console.log("Las mitades del numero " + num + " son: " + numDiv(num));

// ------------------ Ejercicio 3 - Secret Society -------------------------------------

function idSocietySecret(names) {

    let nameSociety = "";

    for (let name of names){

        nameSociety = nameSociety + name[0];

    }

    return nameSociety;
}

console.log( "El nombre de la sociedad secreta es: ", idSocietySecret(["Esperanza", "Franco", "Nia"]));

// ------------------ Ejercicio 4 - Online status ---------------------------------------------------

function onlineStatus(list) {

    console.log(list[0] + ", " + list[1] +  " y " + (list.length - 2) + " más en linea.");

}

onlineStatus(["mocklng99", "J0eyPunch", "glassedFer", "Jeremias"])

// ------------------------ Ejercicio 5 - Array of Multiples --------------------------------------
let long, numMul;

long = 10; 
numMul = 2;

function arrayOfMultiples (number, length){

    const arrayMultiple = [];
    
    for (let i = 1; i <= length; i ++){

        arrayMultiple.push(i * number);
    }

    return (`[${arrayMultiple}]`);
   
}

console.log ("El array de longitud " + long + " con los multiplos del " + numMul + " es: " + arrayOfMultiples(numMul, long));


// ----------------------- Ejercicio 6 - Positive dominance in Array -----------------------------------

function positiveDom(list) {

    let negative, postive;

    negative = 0;
    positive  = 0;

    for (let index of list){

        if (index < 0){

            negative ++;

        } else {

            postive ++;

        }
    }

    if (postive > negative){

        return true;

    } else {

        return false;

    }
}

console.log("La dominancia posita del array es:", positiveDom([-1, -3, -5, 4, 6767]));

// ------------------------------ Ejercicio 7 - Antipodal Average ----------------------------------------------------

/* [1,2,3] [5,22,6]

    1 + 6 = 7 / 2 = 3.5
    2 + 22 = 24 / 2 = 12 
    3 + 5 = 8 / 2 = 4

[3.5, 12, 4]

*/

function antipodalAverage(arr) {

    const arrComp = [];
    const middle = (arr.length / 2) - 0.5;

    if ((arr.length % 2) == 0){

        

        for (let i = arr.length - 1 ; i > middle; i-- ){

            arrComp.push(arr.pop());
            
        }

    return (arr.map((item, i) => (item + arrComp[i])/2 ));

    } else {

        arr.splice(middle, 1);
        antipodalAverage(arr);
    }
}

console.log("La nueva matriz resultante es: ", antipodalAverage([1, 2, 3, 5, 22, 6]));