var t = document.getElementById("historico");
var tBody = t.getElementsByTagName('tbody')[0];
var trs = tBody.getElementsByTagName("tr");
var trsLenght = trs.length - 1;
var tds = null;
var media = 0;
var nota = 0;
for (var i=0; i<trsLenght; i++)
{
    tds = trs[i].getElementsByTagName("td");
    nota = tds[3].innerHTML.trim().replace(/&nbsp;/g, '');;
    media = media + parseInt(nota);
}
media = (media / trsLenght).toFixed(2);


var resultado = trs[trsLenght].getElementsByTagName("td")[0].innerHTML + "&nbsp;&nbsp;&nbsp;" + "Média: " + media;

trs[trsLenght].getElementsByTagName("td")[0].innerHTML = resultado;