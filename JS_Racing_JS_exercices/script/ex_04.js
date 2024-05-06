window.addEventListener('load', function(){
    // Au moment du load de la page on lance la fonction
    var content = document.getElementsByTagName("footer")[0].lastElementChild
    // On récupère le footer dans un tableau HTMLContent
    let touchesAppuyees = ""
    // Je crée touchesAppuyees qui contiendra toutes les touches 
    document.addEventListener('keydown', function(event) {
        // à chaque fois qu'une touche est enclanchéee elle est ajoutée à touchesAppuyes
        touchesAppuyees = touchesAppuyees + event.key;
        
       // Si la chaine fait plus de 42 caractères alors elle enlève le premier à l'aide de substring (le dernier caractère moins 42 pour avoir le premier)
    if (touchesAppuyees.length > 42) {
        touchesAppuyees = touchesAppuyees.substring(touchesAppuyees.length - 42);
    }
    content.innerHTML = touchesAppuyees
    });
    
    
})