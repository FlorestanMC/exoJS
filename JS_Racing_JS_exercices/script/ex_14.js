window.addEventListener('load', function(){
    var downloadbtn = document.getElementsByTagName("footer")[0].children[0].children[0];
   
    
    const url = "https://jsonplaceholder.typicode.com/posts"
    const fetchinfos = () => {
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

                // Créer un texte à partir des données JSON
                const textData = JSON.stringify(data);

                // Créer un objet Blob à partir du texte
                const blob = new Blob([textData], { type: 'text/plain' });

                // Créer un objet URL à partir du Blob
                const blobURL = URL.createObjectURL(blob);

               

                // Ajouter un écouteur d'événements de clic au bouton de téléchargement
                downloadbtn.addEventListener('click', function() {
                    // Créer un lien de téléchargement et simuler le clic pour déclencher le téléchargement
                    const a = document.createElement('a');
                    a.href = blobURL;
                    a.download = 'data.txt';
                    a.click();
                });
                
                
                

                   
            })      
            .catch((error) => { 
                console.error("Error fetching data details:", error);
            });
    };
    fetchinfos();
});
