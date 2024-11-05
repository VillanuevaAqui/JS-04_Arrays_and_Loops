

// ----------------------- Ejercicio 1 - Sum of Resistors in Series ------------------------------

/* Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123) */

function sumRest(){

    const totalResistors = parseInt(prompt("Ingrese el total de resistencias"));
    const resistors = []

    for (let i = 0; i <totalResistors; i++){

        const resistor = parseInt(prompt("Ingrese el valor de la resistencia numero: " + (i + 1)));
        resistors.push(resistor);

    }

    let sum = 0;

    for (let num of resistors) {
        sum = sum + Math.abs(num);
    }

    alert("La resistencia total es de: " + sum);
}


//-------------------- Ejercicio 2 - Number divided into halves -------------------------------

/*Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/

function numDiv (){

    const num = parseInt(prompt("Ingrese el numero")); 

    const middle = [num / 2, num / 2];
    alert("Las mitades del numero " + num + " son: " + middle);
    
    //return middle;

}



// ------------------ Ejercicio 3 - Secret Society -------------------------------------

/*Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.*/

function idSocietySecret() {

    const totalNames = parseInt(prompt("Ingrese el total de nombre"));
    const names = [];
    let nameSociety = "";

    for (let i = 0; i < totalNames; i++){

       let name = prompt("Ingrese el nommbre numero: " + (i+1));
       names.push(name);

    }

    for (let name of names){

        nameSociety = nameSociety + name[0];

    }

    alert("El nombre de la sociedad secreta es: " + nameSociety);
    //return nameSociety;
}

// ------------------ Ejercicio 4 - Online status ---------------------------------------------------

/*Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.*/

function onlineStatus(){

    const totalFriends = prompt("Ingrese el numero de amigos que tiene");
    const friends = [];

    for (let i = 0; i < totalFriends; i++){

        let friend = prompt("Ingrese el nommbre de su amigo numero: " + (i+1));
        friends.push(friend);
    
    }

    if (friends.length <= 2){

        alert(friends);
    }

    alert(friends[0] + ", " + friends[1] +  " y " + (friends.length - 2) + " más en linea.");

}

// ------------------------ Ejercicio 5 - Array of Multiples --------------------------------------

/*Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.*/

function arrayOfMultiples (){

    const long = parseInt(prompt("Ingrese la logitud de la cadena"));
    const numMul = parseInt(prompt("Ingrese el numero a multiplicar"));
    const arrayMultiple = [];
    
    for (let i = 1; i <= long; i ++){

        arrayMultiple.push(i * numMul);
    }

    
    alert("El array de longitud " + long + " con los multiplos del " + numMul + " es: " + arrayMultiple );
   
}


// ----------------------- Ejercicio 6 - Positive dominance in Array -----------------------------------

/*Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/

function positiveDom() {

    const long = parseInt(prompt("Ingrese la logitud del array"));
    const arr = [];
    let negative, positive;

    for (let i = 0; i <long; i++){

        const num = parseInt(prompt("Ingrese el valor numero: " + (i + 1)));
        arr.push(num);

    }

    negative = 0;
    positive  = 0;

    for (let index of arr){

        if (index < 0){

            negative ++;

        } else {

            positive ++;

        }
    }

    if (positive > negative){

        alert("El array tiene dominancia positiva");

    } else {

        alert ("El array no tiene dominancia postiva");

    }
}


// ------------------------------ Ejercicio 7 - Antipodal Average ----------------------------------------------------

/*

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.


    [1,2,3] [5,22,6]

    1 + 6 = 7 / 2 = 3.5
    2 + 22 = 24 / 2 = 12 
    3 + 5 = 8 / 2 = 4

    [3.5, 12, 4]

*/

function antipodalAverage() {

    const totalElements = parseInt(prompt("Ingrese la cantidad de elementos del array"));
    const arr = []

    for (let i = 0; i <totalElements; i++){

        const element = parseInt(prompt("Ingrese el valor del elemento numero: " + (i + 1)));
        arr.push(element);

    }

    const arrComp = [];
    const middle = (arr.length / 2) - 0.5;

    if ((arr.length % 2) == 0){

        for (let i = arr.length - 1 ; i > middle; i-- ){

            arrComp.push(arr.pop());
            
        }
        
        const arrEnd = arr.map((item, i) => (item + arrComp[i])/2);
        
        alert(`La nueva matriz resultante es: ${arrEnd}`);

    } else {

        arr.splice(middle, 1);

        for (let i = arr.length - 0.5 ; i > middle; i-- ){

            arrComp.push(arr.pop());
        }

        const arrEnd = arr.map((item, i) => (item + arrComp[i])/2);

        console.log(arr)
        console.log(arrComp)
        console.log(arrEnd)
        
        alert(`La nueva matriz resultante es: ${arrEnd}`);
    }
}



