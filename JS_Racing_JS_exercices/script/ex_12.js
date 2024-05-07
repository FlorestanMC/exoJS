window.addEventListener('load', function(){
    // cibler le contenu voulu
    var content = document.getElementsByTagName("footer")[0].children[0];

    // On met dans le local storage l'url de la photo et on le nomme ex12_img
   localStorage.setItem("ex12_img","https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
   // on régupère l'url et on la stock dans la constante img
   const img = localStorage.getItem("ex12_img");
   // On la met à l'endroit voulu
   content.innerHTML = "<img src ='" + img + "' style='width:100%' >"

});
