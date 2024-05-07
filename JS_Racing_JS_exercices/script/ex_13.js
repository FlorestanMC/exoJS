window.addEventListener('load', function(){
    // cibler le contenu voulu
    var content = document.getElementsByTagName("footer")[0].children[0];
    // On récupère l'img depuis le localStorage
   const img = localStorage.getItem("ex12_img");
    // On rajoute l'img au bon endroit
   content.innerHTML = "<img src ='" + img + "' style='width:100%' >";
    // On cible la zone de l'img
   var zoneimg = document.getElementsByTagName("img")[0];
    // Ecouteur d'évènement au click on enlève l'image et on recharge la page 
   zoneimg.addEventListener('click', function(){

   localStorage.removeItem("ex12_img");
   location.reload();

   })
   // Lorsque la souris survole la zone de l'img la taille de l'image est réduit de 5% 
   zoneimg.addEventListener('mouseenter', function(){
    zoneimg.style.width = 95 + "%"
   })
   // Lorsque la souris quitte la zone de l'img la taille de l'image reviens à 100%
   zoneimg.addEventListener('mouseout', function(){
    zoneimg.style.width = 100 + "%"
   })
});
