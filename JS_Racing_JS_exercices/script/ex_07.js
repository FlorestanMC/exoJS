window.addEventListener('load', function(){
    // Au moment du load de la page on lance la fonction
    var whitebox1 = document.getElementsByTagName("footer")[0].children[0]
    var whitebox2 = document.getElementsByTagName("footer")[0].children[1]

    var pausebtn = document.getElementsByTagName("footer")[0].children[1].children[0]
    var stopbtn = document.getElementsByTagName("footer")[0].children[1].children[1]
    var mutebtn = document.getElementsByTagName("footer")[0].children[1].children[2]
    
   
    whitebox1.innerHTML = "<canvas width='20px' height='20px'></canvas> <canvas id='canvas'></canvas>"
    var pause = document.getElementsByTagName("footer")[0].children[0].children[0]
    var play = document.getElementsByTagName("footer")[0].children[0].children[1]
    var audio = new Audio ("./triangle.ogg");
    var Mute = false;

    console.log(pause)
    console.log(play)
    console.log(whitebox2)

    pausebtn.addEventListener('click', function() {
        audio.pause();
    })

    stopbtn.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
    })

    mutebtn.addEventListener('click', function() {
        if (!Mute) {
            audio.volume = 0;
            Mute = true;
        } else {
            audio.volume = 1;
            Mute = false;   
        }
    })

    play.addEventListener('click', function(){
        audio.play();
    })

    pause.addEventListener('click', function(){
        audio.pause();
        audio.currentTime = 0;
    })

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