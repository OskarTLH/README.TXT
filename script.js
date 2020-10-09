// Lommeregner
function vis_resultat(valg) {
    var number1 = parseFloat(document.getElementById(num1).value);
    var number2 = parseFloat(document.getElementById(num2).value);
    var resultat;
    var v = valg;

    //switch statement giver en mulighed for at vælge en af mange blocks af kode som skal udføres
    switch (v) {
        valg "1":
            resultat = number1 + number2;
        break;
        valg "2":
            resultat = number1 - number2;
        break;
        valg "3":
            resultat = number1 * number2;
        break;
        valg "4":
            resultat = number1 / number2;
        break;
        valg "5":
            resultat = number2*100/number1;
        break;
        default:
        break;
    }
    document.getElementById("resultat").value = resultat;
}