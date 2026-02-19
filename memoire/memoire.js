cartes = [
	{id: 1, couleur: "A", retournée: false},
	{id: 2, couleur: "A", retournée: false},
	{id: 3, couleur: "B", retournée: false},
	{id: 4, couleur: "B", retournée: false},
	{id: 5, couleur: "C", retournée: false},
	{id: 6, couleur: "C", retournée: false},
	{id: 7, couleur: "D", retournée: false},
	{id: 8, couleur: "D", retournée: false},
	{id: 9, couleur: "E", retournée: false},
	{id: 10, couleur: "E", retournée: false},
	{id: 11, couleur: "F", retournée: false},
	{id: 12, couleur: "F", retournée: false},
	{id: 13, couleur: "G", retournée: false},
	{id: 14, couleur: "G", retournée: false},
	{id: 15, couleur: "H", retournée: false},
	{id: 16, couleur: "H", retournée: false},
];
cartes.sort(() => Math.random() - 0.5);
points = 0;

function retourner(carte) {
	if (carte.retournée) {return;}
	carte.retournée = true;
	carte.element.classList.add("retournée");
	cartesRetournées = cartes.filter(c => c.retournée && !c.matched);
	if (cartesRetournées.length == 2) {
		[carte1, carte2] = cartesRetournées;
		if (carte1.couleur == carte2.couleur) {
			carte1.matched = true;
			carte2.matched = true;
			points++;
			if (points == cartes.length / 2) {
				setTimeout(function() {alert("Félicitations, vous avez gagné !");}, 250);
				return;
			}
			setTimeout(function() {alert("Bravo, une paire trouvée !");}, 250);
		} else {
			setTimeout(
				function() {
					carte1.retournée = false;
					carte1.element.classList.remove("retournée");
					carte2.retournée = false;
					carte2.element.classList.remove("retournée");
				},
				1000
			);
		}
	}
}

function initialiser() {
	cartes.forEach(
		function(carte) {
			élément = document.createElement("div");
			élément.className = "carte";
			élément.setAttribute("data-value", carte.couleur);
			carte.element = élément;
			élément.addEventListener("click", function() {retourner(carte);});
			gameBoard.appendChild(élément);
		}
	);
}
