window.addEventListener('load', function(){
    // Au moment du load de la page on lance la fonction
    var plus = document.getElementsByTagName("footer")[0].children[0].children[0]
    var moins = document.getElementsByTagName("footer")[0].children[0].children[1]
    
    
    var fontSize = 16;
    // Lorsque j'appuie sur plus la fonction se lance et augmente ma fontSize de +1
    plus.addEventListener('click', function(event) {
        
        fontSize = fontSize + 1
        document.body.style.fontSize = fontSize + "px";
        console.log(fontSize)
       
     
    });

    // Lorsque j'appuie sur plus la fonction se lance et diminue ma fontSize de - 1
    moins.addEventListener('click', function(event) {
        
        fontSize = fontSize - 1
        // On modifie la font size en la rendant égale à une valeur ATTENTION à ne pas oublier le + "px" sinon pas pris en compte
        document.body.style.fontSize = fontSize + "px";
        console.log(fontSize)
    });
    // je vise le select du footer
    var selectElement = document.querySelector("footer select");
   // sur l'élément sélectionné je change la couleur du background par la valeur du select ( selectElement.value )
    selectElement.addEventListener('change', function(event) {
        var selectedColor = selectElement.value;
        document.body.style.backgroundColor = selectedColor;
    });
    
})