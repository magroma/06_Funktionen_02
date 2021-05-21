
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check!
*/

// Modul: Addition a + b | Test:
// ausgabe(addieren(2,5));
function addieren(a,b) {
    return a + b;
}

// Modul: Subtraktion a - b | Test:
// ausgabe(subtrahieren(2,5));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Multiplizieren a * b | Test:
// ausgabe(multiplizieren(2,5));
function multiplizieren(a,b) {
    return a * b;
}

// Modul: Dividieren a / b | Test:
ausgabe(dividieren(prompt("Erste Zahl?"),prompt("Zweite Zahl?")));
function dividieren(a,b) {
    // wenn b = 0 // dann Fehlermeldung
    if (b==0) {
        return "Division durch 0 nicht erlaubt!"
    } else {
        return a / b;    
    }
}

// Modul: Konsolenausgabe | Test:
// ausgabe("Heinz");
function ausgabe(outputStr) {
    console.log(outputStr);
}

