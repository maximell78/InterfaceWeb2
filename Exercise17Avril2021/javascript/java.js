// java.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/04/24

function validationFormulaire(){
    var nom = document.forms["monFormulaire"]["nom"].value;
    var age = document.forms["monFormulaire"]["age"].value;
    var error = "";
    var isValid = true;
    if(nom =="" || nom >=0 ){
        isValid = false;
        error = error + "Le nom est invalide </br>";
    }

    if (age =="" || age > 40){
        isValid = false;
        error = error + "L'age est invalide";
    }

    if (poids =="" || poids > 40){
        isValid = false;
        error = error + "L'age est invalide";
    }

    if (isValid) {
        alert("Good Good")
    } else {
        document.getElementById("erreur").innerHTML = error;
    }
}