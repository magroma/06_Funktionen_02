
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check!
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

// Modul: Auswahl der Rechenart | Test:
// ausgabe(rechner("+",2,2));
// ausgabe(rechner("-",8,2));
// ausgabe(rechner("*",3,4));
// ausgabe(rechner("/",25,5));
// ausgabe(rechner("/",25,0));
// ausgabe(rechner("x",25,5));
function rechner(op,a,b) {

    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "Irgendwas ist schiefgelaufen!"
    }

    // return dividieren(a,b);
    // return multiplizieren(a,b);
}


// Modul: Addition a + b | Test:
// ausgabe(addieren(parseFloat(prompt("Erste Zahl?")),parseFloat(prompt("Zweite Zahl?"))));
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
// ausgabe(dividieren(parseFloat(prompt("Erste Zahl?")),parseFloat(prompt("Zweite Zahl?"))));
function dividieren(a,b) {
    // wenn b = 0 // dann Fehlermeldung
    if (b!=0) {
        return a / b;
    } else {
        return "Division durch 0 nicht erlaubt!"    
    }
}

// Modul: Konsolenausgabe | Test:
// ausgabe("Heinz");
function ausgabe(outputStr) {
    console.log(outputStr);
}

