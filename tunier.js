var players = []; //array für spieler noch ohne inhalt
var teams = []; //array für teams noch ohne inhalt

function Player(nameplayer) {// funktion spieler name abspeichern
    this.name = nameplayer;
}

function Team(nameteam, tscore) {// funktion team name abspeichern
    this.name = nameteam;
    this.score = tscore;
}

function shuffleArray(array) {//funktion zum mischen inhalt array jede position im array wirdnach und nach per zufall mit einer anderen getauscht bis jede einmal getauscht
    for (var i = array.length - 1; i > 0; i--) { // i= länge array-1,solange i minus bis array leer
        var j = Math.floor(Math.random() * (i + 1));//zufallszahl zwischen anzahl im array und 0 ganzezahl
        [array[i], array[j]] = [array[j], array[i]]; // i=j gleichzeitiger tausch
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//random gibt wert zwischen 0-1 mal differenz
}

function createplayer(arempty) { //funktion wiedergabe inhalt array /objekte
    for (var i = 0; i < 8; i++) {
        arempty.push(new Player('Spieler ' + (i + 1)));//erstelt neuen spieler und bennent
        //console.log(arempty[i].name);// ausgabe des neu erstellten spielers
    }
}

function createteam(arplay, arteam) { //aus den spielern werden 2er teams
    var i = 0;//var für zahler payler name
    for (var p = 0; p < arplay.length / 2; p++) {//solange bis alle spieler aufgeteilt ind länge array spieler gibt an wie ost da p bei 0 anfängt -1
        arteam.push(new Team('Team ' + (p + 1) + ': ' + arplay[i].name + ' & ' + arplay[i + 1].name, 0));//neues team wird erstellt mit den spielern als name
        console.log(arteam[p].name);// tema name und spieler die im team gespeichert sind werden ausgebene
        arteam[p].name = 'Team ' + (p + 1);
        i = i + 2;
    }
}

function scoreteam(scteam) {// team bekommt punkte
    for (var a = 0; a < scteam.length; a++) {//so oft bis jedes team eine punktzahl bekommt
        scteam[a].score = getRandomInt(0, 10);//zufallszahl wird zum punktestand
        console.log(scteam[a].name + ' hat ' + scteam[a].score + ' Punkte.');
    }
}

function comparscore(scteam) {
    while (1 !== scteam.length) {// solange bis nur noch ein team übrig ist
        var i = 0;
        scoreteam(scteam);// jedes team bekommt am anfang und zum beginn der runde eine punktzahl
        while (i < scteam.length) {//läuft einmal durch das array welches jede runde kleiner wird
            if (scteam[i].score > scteam[(i + 1)].score) {//vergleich wer mehr punkte hat
                console.log('Gewinner ist ' + scteam[i].name + ' mit ' + scteam[i].score + ' Punkten gegen ' + scteam[(i + 1)].name + ' mit ' + scteam[(i + 1)].score);
                scteam.splice((i + 1), 1);//team mit weniger punkten wird gelöscht
                i++;// array wurde verkleinert daher rücken alle folgendne nach und man muss nur um 1 hochzählen
            }
            else if (scteam[i].score < scteam[(i + 1)].score) {//wie oben
                console.log('Gewinner ist ' + scteam[(i + 1)].name + ' mit ' + scteam[(i + 1)].score + ' Punkten gegen ' + scteam[i].name + ' mit ' + scteam[i].score);
                scteam.splice(i, 1);
                i++;
            }
            else {//wenn keiner mehr punkte hat also gleichviele bekommen beide teams neue punkte also neues spiel
                console.log('unentschieden neues spiel');
                scteam[i].score = getRandomInt(0, 10);// neue punktzahl
                scteam[(i + 1)].score = getRandomInt(0, 10);
                console.log(scteam[i].name + ' hat jetzt ' + scteam[i].score + ' Punkte.');
                console.log(scteam[(i + 1)].name + ' hat jetzt ' + scteam[(i + 1)].score + ' Punkte.');
            }
        }
    }
    console.log('Sieger ist ' + scteam[0].name);// am ende hat das array nur noch das team welches am meisten punkte hatte und daher  0
}// funktion vergleich punkte von teams rückgabe gewinner


createplayer(players);//funktionsaufruf erstellen ausgabe spieler
shuffleArray(players);//funktionsaufruf zum mischen der arrays spieler
createteam(players, teams);// funktionsaufruf erstellen ausgabe team
comparscore(teams);