window.addEventListener('load', function(){
    // Au moment du load de la page on lance la fonction
    var content = document.getElementsByTagName("footer")[0].lastElementChild
    // On met l'url dans une variable
    url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=25"
    // fonction fetch pour récupérer les données voulues
    const fetchschool = () => {
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
                   
                    var schoolsHTML = ""; // Variable pour stocker le HTML des établissements
                    data.results.forEach((element) => {
                        // Pour chaque element dans data.results on va créer une ligne html avec le nom de la commune de l'établissement et le mail
                        schoolsHTML += "<tr> <th scope='row'>" + element.nom_commune + "</th> <td>" + element.nom_etablissement + "</td> <td>" + element.mail +"</td> </tr>" ;
                    });
                    // tab qui sert à mettre en place ce qui sera autour des lignes d'infos ( mise en place du tableau etc )
                    var tab = "<table> <thead>  <tr> <th scope='col'>Commune</th>  <th scope='col'> Nom de l'établissement</th>  <th scope='col'>Mail</th>  </tr> </thead>  <tbody>" + schoolsHTML + "</tbody> </table>"
                    content.innerHTML = tab
                    // on l'insère dans content et le tour est joué !
            })      
            .catch((error) => { 
                console.error("Error fetching school details:", error);
            });
    };
    fetchschool();
    
    
    
})