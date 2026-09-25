const container1 = document.createElement("div");
container1.className = "container-fluid";

const row1 = document.createElement("div");
row1.className = "row";

const focim = document.createElement("h1");
focim.className = "focim";
focim.textContent = "Hello!";

const alcim = document.createElement("h3");
alcim.className = "alcim";
alcim.textContent = "";

const navigacio = document.createElement("nav");
navigacio.className = "navigacio";

const gomb1 = document.createElement("button");
gomb1.className = "gomb1";
gomb1.textContent = "Elso gomb";
gomb1.style.borderRadius = "8px";

const gomb2 = document.createElement("button");
gomb2.className = "gomb2";
gomb2.textContent = "Elso gomb";
gomb2.style.borderRadius = "8px";

const gomb3 = document.createElement("button");
gomb3.className = "gomb3";
gomb3.textContent = "Elso gomb";
gomb3.style.borderRadius = "8px";

const gomb4 = document.createElement("button");
gomb4.className = "gomb4";
gomb4.textContent = "Elso gomb";
gomb4.style.borderRadius = "8px";

const container2 = document.createElement("div");
container2.className = "container";

const row2 = document.createElement("div");
row2.className = "row";

const oszlop = document.createElement("div");
oszlop.className = "oszlop";

const tartalom = document.createElement("p");
tartalom.className = "tartalom";
tartalom.textContent = "";


document.body.append(container1);
container1.append(row1);
row1.append(focim);
row1.append(alcim);
row1.append(navigacio);
navigacio.append(gomb1, gomb2, gomb3, gomb4);
document.body.append(container2);
container2.append(row2);
row2.append(oszlop);
oszlop.append(tartalom);
