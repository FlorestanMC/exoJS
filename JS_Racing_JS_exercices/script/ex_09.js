window.addEventListener('load', function(){
    var whitebox1 = document.getElementsByTagName("footer")[0].children[0];
    
    function displayCoordinates() {
        var coordinatesDiv = document.getElementsByTagName("footer")[0].children[1];
        coordinatesDiv.textContent = "New coordinates => {x:" + square.x + ", y:" + square.y + "}";
    }
});
