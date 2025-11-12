cartes = [
	{id: 1, value: "A", flipped: false},
	{id: 2, value: "B", flipped: false},
	{id: 3, value: "A", flipped: false},
	{id: 4, value: "B", flipped: false},
	{id: 5, value: "C", flipped: false},
	{id: 6, value: "D", flipped: false},
	{id: 7, value: "C", flipped: false},
	{id: 8, value: "D", flipped: false},
	{id: 9, value: "E", flipped: false},
	{id: 10, value: "F", flipped: false},
	{id: 11, value: "E", flipped: false},
	{id: 12, value: "F", flipped: false},
	{id: 13, value: "G", flipped: false},
	{id: 14, value: "H", flipped: false},
	{id: 15, value: "G", flipped: false},
	{id: 16, value: "H", flipped: false}
];
cartes.sort(() => Math.random() - 0.5);
points = 0;

function retourner(carte) {
	if (carte.flipped) {return;}
	carte.flipped = true;
	carte.element.classList.add("flip");
	cartesRetournées = cartes.filter(c => c.flipped && !c.matched);
	if (cartesRetournées.length === 2) {
		[carte1, carte2] = cartesRetournées;
		if (carte1.value === carte2.value) {
			carte1.matched = true;
			carte2.matched = true;
			points++;
			if (points === cartes.length / 2) {
				setTimeout(function() {alert("Félicitations, vous avez gagné !");}, 500);
			}
		} else {
			setTimeout(
				function() {
					carte1.flipped = false;
					carte2.flipped = false;
					carte1.element.classList.remove("flip");
					carte2.element.classList.remove("flip");
				},
				1000
			);
		}
	}
}

function initialiser() {
	gameBoard = document.getElementById("gameBoard");
	cartes.forEach(
		function(carte) {
			cardElement = document.createElement("div");
			cardElement.className = "carte";
			cardElement.setAttribute("data-value", carte.value);
			carte.element = cardElement;
			cardElement.addEventListener("click", function() {retourner(carte);});
			gameBoard.appendChild(cardElement);
		}
	);
}
