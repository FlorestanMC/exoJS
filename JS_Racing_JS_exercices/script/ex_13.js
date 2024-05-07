window.addEventListener('load', function(){
    var content = document.getElementsByTagName("footer")[0].children[0];
    
    
    
    

   const img = localStorage.getItem("ex12_img");

   content.innerHTML = "<img src ='" + img + "' style='width:100%' >";

   var zoneimg = document.getElementsByTagName("img")[0];

   zoneimg.addEventListener('click', function(){

   localStorage.removeItem("ex12_img");
   location.reload();


   })

   zoneimg.addEventListener('mouseenter', function(){
    zoneimg.style.width = 95 + "%"
   })

   zoneimg.addEventListener('mouseout', function(){
    zoneimg.style.width = 100 + "%"
   })
});
