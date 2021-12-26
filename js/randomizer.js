const generateur = document.getElementById('generateur')
const ville = document.getElementById('ville')
const villeFrance = ["Paris", "Marseille", "Lyon", "Monaco", "Bordeaux", "Saint-Etienne", "Strasbourg", "Angers", "Montpellier", "Lorient", "Reims", "Rennes", "Brest", "Lille", "Metz", "Nice", "Clermont", "Troyes", "Nantes", "Lens"]

generateur.addEventListener('click', function(){
    let number = Math.floor(Math.random()*villeFrance.length)
    ville.innerHTML = villeFrance[number]
})
