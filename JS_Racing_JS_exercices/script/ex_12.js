window.addEventListener('load', function(){
    var content = document.getElementsByTagName("footer")[0].children[0];

    
   localStorage.setItem("url","https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
   
   const img = localStorage.getItem("url");

   content.innerHTML = "<img src ='" + img + "' style='width:100%' >"

});
