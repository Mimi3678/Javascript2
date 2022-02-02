function visPersonRegister() {

//Oppretter først personene og deres objekter

    const person1 = {
        navn: "Line Jensen",
        adresse: "Askerveien 82",
        telefonnr: "12334455"
    };

    const person2 = {
        navn: "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr: "99887766"
    };


    /* Legg personene i et array, ved dette oppretter vi
       et tomt array først for å da push() person-objektene inn i det.

    */

    let personene = [];
    personene.push(person1);
    personene.push(person2);


    /*lag en vanlig løkke (for-løkke) slik at den
        legger til en og en person

     */
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";


    /*printe ut object, husk å bruke of ettersom at det
     tillater deg det du vil gjøre. Istendenfor in. Vi må skrive inn
     tabellen igjen, på følgende måte:
     */
    for (let i of personene) {
       ut += "<tr><td> "+ i.navn +" </td><td> "+ i.adresse +" " +
        "</td><td> "+ i.telefonnr +"</td></tr>"
    };
    ut += "</table>"
    document.getElementById("personRegister").innerHTML = ut;

}


