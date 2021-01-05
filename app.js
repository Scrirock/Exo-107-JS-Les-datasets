// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p1.dataset.nbr = (parseInt(p1.dataset.nbr) + 10 ).toString();

p2.dataset.chaine = p2.dataset.chaine.length.toString();

let tableau = p3.dataset.liste.split(",");
for (let i of tableau) p3.innerHTML += i + " / ";

if (p4.dataset.test.toLowerCase() === "true") p4.innerHTML = "La valeur est vraie";
else p4.innerHTML = "L'inverse";

p5.setAttribute("data-truc", "table");
p6.setAttribute("data-bidule", "chaise");
p7.setAttribute("data-chose", "tabouret");
p8.setAttribute("data-brol", "marteau");

let newElement = document.createElement("p");

let Objet = function (nom, prenom){
    this.nom = nom;
    this.prenom = prenom;

    return this.nom + " " + this.prenom;
}

newElement.dataset.test = Objet("Doe", "John");
document.body.append(newElement);