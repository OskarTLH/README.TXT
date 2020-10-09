// Lommeregner
function showres(choice) {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var r;
    var c = choice;

    //switch statement giver en mulighed for at vælge en af mange blocks af kode som skal udføres
    switch(c) {
        case '1':
            r=n1+n2;
        break;
        case '2':
            r=n1-n2;
        break;
        case '3':
            r=n1*n2;
        break;
        case '4':
            r=n1/n2;
        break;
        case '5':
            r=n2*100/n1;
        break;
        default:
        break;
    }
    document.getElementById("resultat").value = r;
}