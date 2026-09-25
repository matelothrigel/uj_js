/*async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;

}

txtBeolvasas("./forras/lorem1.txt", bszk);
txtBeolvasas("./forras/lorem2.txt", jszk);*/

async function textBeolvasas2() {
    const response = await fetch("./forras/lorem1.txt");
    const szoveg = await response.text();

    bszk.textContent = szoveg;
}

textBeolvasas2()