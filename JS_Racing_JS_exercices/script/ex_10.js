// Au moment du load de la page on lance la fonction
window.addEventListener('load', function(){
    
    // On récupère la balise concernée
    var content = document.getElementsByTagName("footer")[0].lastElementChild
    // On récupère le nom et le bouton pour pouvoir agir dessus
    var input = document.getElementsByTagName("input")[0]
    var btn = document.getElementsByTagName("button")[0]
    // fonction qui met un écouteur d'évnènement sur le bouton et qui récupère la value de l'input
    btn.addEventListener('click', function(){
        var code = input.value
        console.log(code)
        // On met l'url dans une variable
    url = "https://apicarto.ign.fr/api/codes-postaux/communes/" + code + "/"

    

    console.log(url)
    // fonction fetch pour récupérer les données voulues
    const fetchcity = () => {
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
                   
                   results = data[0]
                   console.log(results)
                    var infocommune = ""; // Variable pour stocker le HTML de la ville
                    
                        infocommune += "<tr> <th scope='row'>" + results.nomCommune + "</th> <td>" + results.libelleAcheminement + "</td> </tr>" ;
                 
                    // tab qui sert à mettre en place ce qui sera autour des lignes d'infos ( mise en place du tableau etc )
                    var tab = "<table> <thead>  <tr> <th scope='col'>Commune</th>  <th scope='col'> Libellé Acheminement</th> </tr> </thead>  <tbody>" + infocommune + "</tbody> </table>"
                    content.innerHTML = tab
                    // on l'insère dans content et le tour est joué !
            })      
            .catch((error) => { 
                console.error("Error fetching school details:", error);
            });
    };
    fetchcity();
    }) 
    
    
    
    
    
    
})