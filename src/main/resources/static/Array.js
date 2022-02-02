const liste = [1,3,5,2,7,-9];
liste[0] = 10;

//for-løkke
for (let i=0; i < liste.length; i++) {
    console.log(liste[i]);
}

// for-each-løkke
for (let i of liste) {
    console.log(i);
}

//ulike array-metoder
liste.push(23);  // setter inn heltallet 23 etter siste verdi i arrayet
const lengde = liste.length; // gir lengden på arrayet
liste.splice(1,2) //sletter to verdier i arrayet fra og med plass 1
const posisjon = liste.indexOf(23); // gir posisjonen i arrayet hvor verdien er 23 (nummer 4)
liste.sort(); //sorterer arrayet
console.log(liste);
console.log(posisjon);