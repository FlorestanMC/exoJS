window.addEventListener('load' ,function(){
    var content = document.getElementsByTagName("footer")[0].lastElementChild
   // on cible la balise au moment du load de la page
        let text;
        person = ""

        
      ask()
        function ask () {
          // Prompt me permet d'ouvrir une box pour demander le nom
          let person = prompt("Please enter your name:", );
          if (person == null || person == "") {
          ask();
          // si le nom est null ou non rentré alors la fonction se répète
        }
        else {
         // sinon le text Hello **prenom** est affiché
          text = "Hello " + person + "! How are you today?";  
          
        }
        // on ajoute à la balise concernée le message
        content.innerHTML = text;
        alert("Hello " + person)
       

        
      
        }
  
        
    
})  
