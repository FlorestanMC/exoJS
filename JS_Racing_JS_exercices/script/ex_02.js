window.addEventListener('load' ,function(){
    var content = document.getElementsByTagName("footer")[0].lastElementChild
    clics = 0;
    content.innerHTML = clics
    content.addEventListener("click", function(){
        clics = clics + 1;
        content.innerHTML = clics
    })
    
    
    
})  
