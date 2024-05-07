window.addEventListener('load', function(){
    var status = document.getElementsByTagName("footer")[0].children[0].children[0];
    
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    const fetchbtc = () => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    // Si erreur renvoie un message d'erreur
                    throw new Error("Network response was not ok");
                }
                // envoie la réponse sous forme de données json
                return response.json();
            })
            .then((data) => {

                var newprice = data.bpi.EUR.rate
                localStorage.setItem("oldprice",newprice);
                
                if (oldprice > newprice) {
                    status.style.backgroundColor = "green"
                    console.log("On est riches !")
                }
                else if (oldprice == newprice) {
                    status.style.backgroundColor = "orange"
                    console.log("Rien à signaler")
                }
                else {
                    status.style.backgroundColor = "red"
                    console.log("C'est la merde")
                }
                console.log(newprice);
                
                   
            })      
            .catch((error) => { 
                console.error("Error fetching data details:", error);
            });
    };
    var oldprice = localStorage.getItem("oldprice");
    console.log(oldprice)
                

    fetchbtc();

    
});
