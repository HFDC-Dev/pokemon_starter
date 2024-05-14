// Déclarations des variables 

const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const choixPossibles = document.querySelectorAll('button');
let tonStarter = document.getElementById('starter');
let resetBtn = document.getElementById('reset');

let choixUtilisateur

// Création évenement click

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
    // récupération de l'ID du boutton 
    choixUtilisateur = e.target.id;
    // Ajout d'image correspondant au choix de l'utilisateur
    contenantChoixUtilisateur.innerHTML = `<img src="images/${choixUtilisateur}.png">`
    btnNone()
}))

resetBtn.addEventListener('click', function() {
    resetValues();
});


// Masquer les bouttons une fois le starter choisis

function btnNone(){

    // Masquer le boutton 'Recommencer' 
    if(document.getElementById("reset").style.display="none"){
        let value = document.getElementById("reset").style.display="flex";
    }

    // Masquer le H1
    if(document.getElementById("starter").style.display="flex"){
        let value = document.getElementById("starter").style.display="none";
    }

    // Masquer les pokeballs
    if(document.getElementById("salameche").style.display="flex"){
        let value = document.getElementById("salameche").style.display="none";
    }
    if(document.getElementById("carapuce").style.display="flex"){
        let value = document.getElementById("carapuce").style.display="none";
    }
    if(document.getElementById("bulbizarre").style.display="flex"){
        let value = document.getElementById("bulbizarre").style.display="none";
    }
}

// Recommencer le choix du Starter 

function resetValues(){
    
    // Faire apparaitre le boutton 'Recommencer' puis le faire disparaitre une fois avoir appuyer sur 'Recommencer'
    if(document.getElementById("reset").style.display="flex"){
        let value = document.getElementById("reset").style.display="none";
    }

    // Faire apparaitre le H1 après le reset
    if(document.getElementById("starter").style.display="none"){
        let value = document.getElementById("starter").style.display="flex";
    }

    // Réapparition des pokeballs 
    if(document.getElementById("salameche").style.display="none"){
        let value = document.getElementById("salameche").style.display="flex";
    }
    if(document.getElementById("carapuce").style.display="none"){
        let value = document.getElementById("carapuce").style.display="flex";
    }
    if(document.getElementById("bulbizarre").style.display="none"){
        let value = document.getElementById("bulbizarre").style.display="flex";
    }

    contenantChoixUtilisateur.innerHTML = "";
}













