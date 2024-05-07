window.addEventListener('load', function(){
    var content = document.getElementsByTagName("footer")[0].children[0];

    
   localStorage.setItem("ex12_img","https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
   
   const img = localStorage.getItem("ex12_img");

   content.innerHTML = "<img src ='" + img + "' style='width:100%' >"

});
