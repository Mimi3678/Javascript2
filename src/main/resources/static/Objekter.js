const kunde1 = {
    navn : "Miriam",
    adresse : "Osloveien 82",
    kort : "visa",
    kjonn : "kvinne"

};  //Måten å lage et objekt på i JavaScript

const kunde2 = {
    navn : "Per",
    adresse : "Askerveien 4",
    kort : "master",
    kjonn : "mann"
};


//måten å legge objektet ovenfor i et array
let kundene = [];
kundene.push(kunde1);
kundene.push(kunde2);

//skriver ut i en vanlig løkke (for-løkke)
for (let i=0; i<kundene.length; i++) {
    document.write(kundene[i].navn+" bor på "+kundene[i].adresse +", er " +
    kundene[i].kjonn +" og bruker " +kundene[i].kort +" kort.");
}

//Skriver ut med en for-each-løkke
for (let kunde of kundene) {
    console.log(kunde.navn+" bor på "+kunde.adresse+", er "+kunde.kjonn+" og bruker "+kunde.kort +" kort.");
}
