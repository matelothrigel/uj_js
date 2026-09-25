const container = document.createElement("div");
container.className = "container";

const row = document.createElement("div");
row.className = "row";

const bal_oszlop = document.createElement("div");
bal_oszlop.className = "col-md-6";

const balcim = document.createElement("h3");
balcim.textContent = "Bal oszlop";

const balszoveg = document.createElement("p");
balszoveg.id = "bszk";
balszoveg.style.whiteSpace = "pre-line";

const jobb_oszlop = document.createElement("div");
jobb_oszlop.className = "col-md-6";

const jobbcim = document.createElement("h3");
jobbcim.textContent = "Jobb oszlop";

const jobbszoveg = document.createElement("p");
jobbszoveg.id = "jszk";
jobbszoveg.style.whiteSpace = "pre-line";


document.body.append(container);
container.append(row);
row.append(bal_oszlop, jobb_oszlop);
bal_oszlop.append(balcim, balszoveg);
jobb_oszlop.append(jobbcim, jobbszoveg);