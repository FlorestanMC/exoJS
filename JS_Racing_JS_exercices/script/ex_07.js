window.addEventListener('load', function(){
    // Au moment du load de la page on lance la fonction
    var whitebox = document.getElementsByTagName("footer")[0].children[0]
    var moins = document.getElementsByTagName("footer")[0].children[0].children[1]
    
    console.log(whitebox)
    whitebox.innerHTML = "<canvas width='20px' height='20px'></canvas> <canvas id='canvas'></canvas>"
    
    function draw() {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
      
          ctx.beginPath();
          ctx.moveTo(6, 6);
          ctx.lineTo(14, 10);
          ctx.lineTo(6, 14);
          ctx.fill();
        }
      }
      draw();
})