/**
 * Fonctions de travail
 */
//fonction pour decrire le fomulaire en cas de champs vides
document.forms[0].addEventListener("submit", function(evenement){
    if (document.getElementById("email").value== "" && document.getElementById("mdp").value == ""){
        evenement.preventDefault();
        document.getElementById('email').style.backgroundColor="pink";
        document.getElementById("email").focus();
        document.getElementById('mdp').style.backgroundColor="pink";
}
});

//fonction pour definir les conditions de validation du mot de passe 
function validate() {
    let msg;
    let str = 
document.getElementById("mdp").value;
    if (str.match( /[0-9]/g) &&
            str.match( /[A-Z]/g) &&
            str.match( /[a-z]/g) &&
            str.match( /[^a-zA-Z\d]/g) &&
            str.lenght >= 8 )
        msg = "<div style='color:=#a7ff3342'>Mot de passe fort.</div>";
     else 
    msg = "<div style='color:red'>Mot de passe faible.</div>"
    document.getElementById('message').innerHTML= msg
}