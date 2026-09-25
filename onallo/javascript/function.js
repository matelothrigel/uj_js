/*gomb1.addEventListener("click", function(){
    tartalom.textContent = `
    III. Thotmesz vagy más átírásokban Thutmózisz (uralkodói nevén Menheperré; i. e. 1483 körül, ur.: i. e. 1458 – i. e. 1425. március 17.)[1] az ókori egyiptomi újbirodalmat megalapító XVIII. dinasztia hatodik fáraója. Kisgyermekként került trónra apja, II. Thotmesz halála után. Mostohaanyja és egyben nagynénje, Hatsepszut, a szokásoknak megfelelően, kiskorúsága idején régensként kormányozta Egyiptomot, majd váratlanul fáraóvá kiáltotta ki magát, így Thotmesz csak huszonkét évvel később, Hatsepszut halála után kezdhette meg valódi uralkodását.
    Az egyik legnagyobb hódító fáraó volt; Hatsepszut gazdag, békés és stabil államot hagyott rá, így uralkodása alatt Egyiptom minden addiginál tovább terjeszkedett. Tizenhét hadjárata során Észak-Szíriától a núbiai negyedik kataraktáig terjesztette ki birodalma határait. Több mint ötven templomot épített és jelentősen bővítette a karnaki templomegyüttest is. A Királyok völgyében temették el, fia, II. Amenhotep követte a trónon.
`
})*/

async function textbeolvasas1() {
    const response = await fetch("./szovegek/elso.txt");
    const szoveg = await response.text();
}



