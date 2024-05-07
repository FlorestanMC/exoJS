window.addEventListener('load' ,function(){
    // on cible les différentes balises au moment du load de la page
    var cookies = document.getElementsByTagName("footer")[0].children[0].children[0]
    var content = document.getElementsByTagName("footer")[0]
   
    // fonction que je comprends assez mal on récupère via le checkCookie le nom du cookie donc en l'occurence value puis on le gère ?
   function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
// permet de vérifier si value est true ou false et adopte en certain comportement en fonction
    function checkValueCookie() {
        let value = getCookie("value");
        if (value != "true") {
        // ne fais rien si le cookie est vide
        } else {
            // laisse apparaitre le bouton pour supprimer les cookies
            content.innerHTML = "<div></div><div><button> Supprimer les cookies </button></div>"
            var supprimer = document.getElementsByTagName("footer")[0].children[1].children[0]
            
            supprimer.addEventListener('click', function(){
                document.cookie = "value=true; expires=Thu, 01 Jan 1970 00:00:00 UTCs;"
                location.reload();
                // On reload la page pour pouvoir remettre le cookie si voulu et on lui applique une date passée pour qu'il soit supprimé
                
            })
        }
    }

    checkValueCookie();

    cookies.addEventListener('click', function(){

        
        // vérification de la date, durée du cookie 24h 
        date = new Date()
        // nouvelle date
        const tomorrow = 24 * 60 * 60 * 1000;   
        // date au moment de la création du cookie + 24 h pour définir l'expiration
        date.setTime(date.getTime()+ tomorrow);
        document.cookie = "value=true; expires=" + date ;
        checkValueCookie();
        
    })

    
      
        
       
    
        
      
        
  
        
        
    
})  
