// java.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/04/24

function validationFormulaire(){
    age = document.forms["monFormulaire"]["age"].value;
    poids = document.forms["monFormulaire"]["poids"].value;
    var error = "";
    var isValid = true;
    if( !document.getElementById("nom").value.match(/^[A-Za-z]+$/)){
        isValid = false;
        error = error + "Le nom est invalide </br>";
    }

    if ( !document.getElementById("age").value.match(/^[0-9]+$/)){
        isValid = false;
        error = error + "L'age est invalide </br>";
    }

    if ( age >= 40 ){
        isValid = false;
        error = error + "Un chat qui vit en haut de 40ans ... impossible";
    }

    if ( !document.getElementById("poids").value.match(/^[0-9]+$/)){
        isValid = false;
        error = error + "Le poids est invalide </br>";
    }

    if (poids >= 50){
        isValid = false;
        error = error + "Ouuff, le chat serait bien trop lourds";
    }

    if( !document.getElementById("couleur").value.match(/^[A-Za-z]+$/)){
        isValid = false;
        error = error + "La couleur est invalide </br>";
    }

    if( !document.getElementById("lieu").value.match(/^[A-Za-z]+$/)){
        isValid = false;
        error = error + "Le nom de la ville est invalide </br>";
    }

    if ( !document.getElementById("email").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)){
        isValid = false;
        error = error + "Format du courriel est invalide </br>"
    }

    if ( !document.getElementById("telephone").value.match(/[0-9]{4,4}[\-]{1,1}[0-9]{3,3}[\-]{2,2}[0-9]{1,1}[\/]{1,1}[A-Z]{1,1}/)){
        isValid = false;
        error = error + "Format du # de téléphone est invalide"
    }

    if (isValid) {
        alert("Ajout du chat compléter");
    } else {
        document.getElementById("erreur").innerHTML = error;
    }
}

