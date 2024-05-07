 // Au moment du load de la page on lance la fonction
window.addEventListener('load', function(){
    // On récupère le footer
    var content = document.getElementsByTagName("footer")[0].children[0];
    // On récupère les canvas avec querySelectorAll
    var squares = document.querySelectorAll("footer canvas");
    // On initialise le tableau backgrounds
    backgrounds = [];
    // Pour tous les carrés/canvas 
    squares.forEach((element) => {
        // On récupère le style
       style = window.getComputedStyle(element);
       // Puis plus précisément la Backgroundcolor
       var backgroundColor = style.backgroundColor;
        // Et enfin on la met dans le tableau backgrounds
        backgrounds.push(backgroundColor);
      
    })

    // Définir l'ordre des couleurs (respectivement les codes couleur de orange/purple/black/green)
    var colorOrder = ["rgb(255, 165, 0)", "rgb(128, 0, 128)", "rgb(0, 0, 0)", "rgb(128, 128, 0)"];

    // Trier les couleurs en utilisant l'ordre spécifié
    var sortbg = backgrounds.sort(function(a, b) {
        return colorOrder.indexOf(a) - colorOrder.indexOf(b);
    });

    //initialiser le html
    var canvasHTML = "";
    // pour chaque couleur de bg on crée un nouveau canva avec pour style le bg
   sortbg.forEach((element) => {
    canvasHTML += "<canvas style='background-color:"+ element +"!important'></canvas>"
   })
   // On met tout le html dans le footer
    content.innerHTML = canvasHTML
    
})

