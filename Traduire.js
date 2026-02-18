const Französisch = [ "aimer", "arrêter", "bavarder", "cacher", "chercher", "danser", "donner", "entrer", "fermer", "grimper", "habiter", "inventer", "jouer", "laver", "monter", "oublier", "parler", "raconter", "regarder", "saluer", "siffler", "téléphoner", "tirer", "voler", "commencer", "nous commençons", "manger", "nous mangeons", "nager", "nous nageons", "lancer", "nous lançons", "cueillir", "ouvrir", "couvrir", "offrir", "souffrir", "je cueille", "j'ai cueilli", "j'ouvre", "j'ai ouvert", "je couvre", "j'ai couvert", "j'offre", "j'ai offert", "je souffre", "j'ai souffert", "mener", "lever", "se lever", "jeter", "répéter", "espérer", "envoyer", "acheter", "enlever", "peser", "promener", "se promener", "appeler", "s'appeler", "épeler", "exagérer", "inquiéter", "protéger", "sécher", "ennuyer", "nettoyer", "essayer", "payer", "essuyer", "applaudir", "atterrir", "choisir", "finir", "maigrir", "obéir", "punir", "remplir", "rôtir", "garantir", "grandir", "grossir", "jaunir", "réfléchir", "réussir", "rougir", "vieillir", "mourir", "courir", "venir", "tenir", "dormir", "partir", "sortir", "mentir", "sentir", "servir", "fuir", "s'enfuir", "attendre", "défendre", "descendre", "entendre", "perdre", "rendre", "répondre", "vendre", "rompre", "craindre", "plaindre", "peindre", "éteindre", "atteindre", "conduire", "construire", "traduire", "produire", "connaître", "paraître", "naître", "plaire", "se taire", "prendre", "mettre", "battre", "lire", "boire", "vivre", "croire", "rire", "suivre", "suffire", "faire", "dire", "écrire", "recevoir", "décevoir", "apercevoir", "devoir", "pouvoir", "vouloir", "falloir", "valoir", "s'asseoir", "savoir", "voir", "pleuvoir" ];
Deutsch = [ "lieben/ mögen", "aufhören/ abstellen", "schwatzen", "verstecken", "suchen", "tanzen", "geben", "eintreten", "schliessen", "klettern", "wohnen", "erfinden", "spielen", "waschen", "steigen", "vergessen", "sprechen", "erzählen", "schauen", "grüssen", "pfeifen", "telefonieren", "ziehen/ schiessen", "stehlen/ fliegen", "anfangen, beginnen", "wir fangen an, beginnen", "essen", "wir essen", "schwimmen", "wir schwimmen", "werfen", "wir werfen", "pflücken", "öffnen", "bedecken", "anbieten", "leiden", "ich pflücke", "ich habe gepflückt", "ich öffne", "ich habe geöffnet", "ich bedecke/ decke zu", "ich habe bedeckt/ zugedeckt", "ich biete an", "ich habe angeboten", "ich leide", "ich habe gelitten", "führen", "hochheben", "aufstehen", "(weg)werfen", "wiederholen", "hoffen", "schicken", "kaufen", "wegnehmen", "wägen/ wiegen", "spazieren führen", "spazieren", "(an)rufen", "heissen", "buchstabieren", "übertreiben", "beunruhigen, Sorgen machen", "beschützen", "trocknen", "langweilen/ nerven", "reinigen", "versuchen, probieren", "bezahlen", "abtrocknen/ abwischen", "klatschen", "landen", "auswählen", "beenden", "abnehmen (Gewicht)", "gehorchen", "(be-)strafen", "füllen", "braten", "garantieren", "aufwachsen/ älter werden", "zunehmen (Gewicht)", "gelb werden/ gelb färben", "nachdenken", "Erfolg haben/ bestehen", "rot werden", "altern", "sterben", "laufen/ rennen", "kommen", "halten", "schlafen", "abreisen", "ausgehen/ in den Ausgang gehen/ herausgeben", "lügen", "fühlen/ riechen", "bedienen/ nutzen", "fliehen", "davon laufen/ fliehen", "(er-)warten", "verteidigen", "hinuntersteigen", "hören", "verlieren", "zurückgeben", "antworten", "verkaufen", "brechen", "befürchten", "beklagen/ bedauern", "malen", "löschen (Licht)", "erreichen", "führen/ fahren", "bauen", "übersetzen", "ergeben/ erzeugen", "kennen", "scheinen", "geboren werden", "gefallen", "schweigen", "nehmen", "setzen/ stellen/ legen", "schlagen", "lesen", "trinken", "leben", "glauben", "lachen", "folgen", "genügen", "machen", "sagen", "schreiben", "erhalten", "enttäuschen", "erblicken", "müssen", "können", "wollen", "müssen/ notwendig sein", "gelten/ Wert haben", "sich setzen", "wissen", "sehen", "regnen" ];


document.addEventListener("DOMContentLoaded", () => {

    const MAX_WORDS = 148; 
    let RichtigCounter = 0;
    let FalschCounter = 0;
    let NEWCOUNT = 148;

    const input = document.getElementById("input");
    const fehlerBox = document.getElementById("FehlerBox");
    const reaktionText = document.getElementById("Reaktion");


    let indices = Array.from({length: MAX_WORDS}, (_, i) => i); 
    let falschListe = []; 
    let aktuelleRundePool = [...indices]; 

    let randomIndex = 0;
    let currentPos = -1;
    let fehlerVisible = false;
    let roundOver = false;
    let isFirstRound = true;

    function RandomWord() {

        if (aktuelleRundePool.length === 0) {
            roundOver = true;
            
            if (!isFirstRound && falschListe.Length == 0) {

                alert("Du hast alle Vokabeln gelernt!");
            }
            return;
        }


        currentPos = Math.floor(Math.random() * aktuelleRundePool.length);
        randomIndex = aktuelleRundePool[currentPos];

        document.getElementById("ausgabe").textContent = Deutsch[randomIndex];


        fehlerBox.style.display = "none";
        document.getElementById("DeineAntwort").textContent = "";
        document.getElementById("Lösung").textContent = "";
        document.getElementById("ausgabe2").textContent = "";

        
        fehlerVisible = false;
        input.value = "";
        input.focus();
    }

    input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;


        if (roundOver) {
            if (isFirstRound) {

                isFirstRound = false;
                aktuelleRundePool = [...falschListe];
                falschListe = [];
            } else {

                aktuelleRundePool = [...falschListe];
                falschListe = [];
            }

            NEWCOUNT = FalschCounter;
            FalschCounter = 0;

            roundOver = false;
            UpdateBar();
            
            if (aktuelleRundePool.length > 0) {
                RandomWord();
            } else {
                location.reload(); 
            }
            return;
        }


        if (fehlerVisible) {
            RandomWord();
            return;
        }


        const savedText = input.value.trim();
        const istRichtig = Französisch[randomIndex] === savedText;

        if (istRichtig) {
            reaktionText.textContent = "Richtig!!";
            RichtigCounter++;

            aktuelleRundePool.splice(currentPos, 1);
            
            UpdateBar();
            setTimeout(RandomWord, 400);
        } else {

            FalschCounter++;
            document.getElementById("DeineAntwort").textContent = savedText;
            document.getElementById("Lösung").textContent = Französisch[randomIndex];
            document.getElementById("ausgabe2").textContent = Deutsch[randomIndex];


            if (!falschListe.includes(randomIndex)) {
                falschListe.push(randomIndex);
            }
            
           
            aktuelleRundePool.splice(currentPos, 1);

            UpdateBar();
            fehlerBox.style.display = "block";
            fehlerVisible = true;
        }
    });

    function UpdateBar() {

        const Rpercent = (RichtigCounter / MAX_WORDS) * 100;

        const Fpercent = (FalschCounter / MAX_WORDS) * 100;

        document.getElementById("Richtigbar").style.height = Math.min(Rpercent, 100) + "%";
        document.getElementById("Falschbar").style.height = Math.min(Fpercent, 100) + "%";

        document.getElementById("AnzahlR").textContent = RichtigCounter + " / " + MAX_WORDS;
        document.getElementById("AnzahlF").textContent = FalschCounter + " / " + NEWCOUNT;
    }


    RandomWord();
});