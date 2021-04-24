function validationFormulaire(){
    var isValid = true;
    var error = "";

    //Test Nom du Chat [a-z - A-Z ]
    if ( !document.getElementById("nom").value && !document.getElementById("nom").value.match(/([a-zA-z])/))
    {
        isValid =false;
        error = error + "Nom du chat invalide </br> ";
    }

    //Test de l'âge du chat
    if ( !document.getElementById("age").value.match(/([0-9])/))
    {
        isValid = false;
        error = error + "L'âge du chat est invalide </br> "
    }

    if ( document.getElementById("age").value > 40){
        isValid = false;
        error = error + "L'âge du chat est invalide </br> "
    }

    //Test Email [a-z - A-Z ]
    if ( !document.getElementById("email").value.match(/([a-z]@[a-z].[a-z])/)
    ) {
    isValid = false;
    error = error + "Email non valide </br> ";
    }

    //Affichage du resultat de la validation
    if (isValid) {
    //paiement est un succes
    alert("Message envoyé");
    } else {
    //un erreur c'est produite
    document.getElementById("erreur").innerHTML = error;
    }
}