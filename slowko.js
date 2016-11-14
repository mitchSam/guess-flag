
var baza_hasel = new Array(9);

baza_hasel[0] = "Hiszpania";
baza_hasel[1] = "Algeria";
baza_hasel[2] = "Angola";
baza_hasel[3] = "Argentyna";
baza_hasel[4] = "Barbados";
baza_hasel[5] = "Belgia";
baza_hasel[6] = "Benin";
baza_hasel[7] = "Boliwia";
baza_hasel[8] = "Brazylia";
baza_hasel[9] = "Czechy";
baza_hasel[10] = "Ghana";
baza_hasel[11] = "Holandia";
baza_hasel[12] = "Nikaragua";
baza_hasel[13] = "Ukraina";
baza_hasel[14] = "Wenezuela";

var litery = new Array(34);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



var liczba_losowa = Math.floor((Math.random()*15))

var haslo = baza_hasel[liczba_losowa];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length
var haslo1 = ""
var skucia = 0
var odgadniecia = 0

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}
	

function zaladuj_zdjecie()
{
	zdjecie = '<img src="img/f'+liczba_losowa+'.png"/>'
	document.getElementById("obrazek").innerHTML = zdjecie;	
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;

}

window.onload = function() {wypisz_haslo(); zaladuj_zdjecie(); start();}


function start()
{

	var klawisze = "";
	
	for (i=0; i<=34; i++)
	{
		var num = "lit" + i;
		klawisze = klawisze + '<div class="litera" onclick="sprawdz('+i+')" id="'+num+'">'+litery[i]+'</div>';
		if ((i+1) % 7 == 0) klawisze = klawisze + '<div style="clear: both;"</div>';
	}
	
	document.getElementById("panel").innerHTML = klawisze
	
	zaladuj_zdjecie();
	wypisz_haslo();
	
}

String.prototype.zmianaZnaku = function(miejsce, znak)
{
	if (miejsce > this.length -1) return this.toString();
	else return this.substr(0, miejsce) +znak+ this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
			{
				haslo1 = haslo1.zmianaZnaku(i, litery[nr]);
				trafiona = true;
			}
	}	
	
	
	if (trafiona == true)
	{
		var num = "lit" + nr;
		document.getElementById(num).style.background = "#003300";
		document.getElementById(num).style.color = "#00C000";
		document.getElementById(num).style.border = "3px solid #00C000";
		document.getElementById(num).style.cursor = "default";
		wypisz_haslo()
	}

	if (trafiona == false)
	{
		skucia++;
		var num = "lit" + nr;
		document.getElementById(num).style.background = "#330000";
		document.getElementById(num).style.color = "#C00000";
		document.getElementById(num).style.border = "3px solid #C00000";
		document.getElementById(num).style.cursor = "default";
		document.getElementById("skucia").innerHTML = "Skucia: "+skucia+"/10";
		wypisz_haslo()
	}
	//wygrana
	if (haslo1 == haslo)
	{
		odgadniecia++;
		wypisz_haslo();
		liczba_losowa = Math.floor((Math.random()*15))
		haslo = baza_hasel[liczba_losowa];
		haslo = haslo.toUpperCase();

		dlugosc = haslo.length
		haslo1 = ""

		for (i=0; i<dlugosc; i++)
		{
			if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
			else haslo1 = haslo1 + "-";
			setTimeout("start()",2000)
		}
	}
	if (skucia == 10)
	{
		document.getElementById("panel").innerHTML = "Koniec!<br/> Odgadłeś w sumie "+odgadniecia+" flag"+'<br/><br/>Spróbuj poprawić wynik<br/><span class="reset" onclick="location.reload()">Zagraj jeszcze raz!</span>'
		
		
		
	}
	

}