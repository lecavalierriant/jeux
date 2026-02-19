points = 0;
coefficient = 1;
document.addEventListener("keydown", pressée);
document.addEventListener("keyup", relachée);
droite = false;
gauche = false;

function pressée(événement) {
	if (événement.key == "ArrowRight") {droite = true;}
	else if (événement.key == "ArrowLeft") {gauche = true;}
}

function relachée(événement) {
	if (événement.key == "ArrowRight") {droite = false;}
	else if (événement.key == "ArrowLeft") {gauche = false;}
}

function afficherJoueur() {
	contexte.beginPath();
	contexte.rect(joueur.x, joueur.y, joueur.width, joueur.height);
	contexte.fillStyle = joueur.color;
	contexte.fill();
	contexte.closePath();
}

function afficherCible() {
	contexte.beginPath();
	contexte.rect(cible.x, cible.y, cible.width, cible.height);
	contexte.fillStyle = cible.color;
	contexte.fill();
	contexte.closePath();
}

function collisions() {
	if (
		joueur.x < cible.x + cible.width &&
		joueur.x + joueur.width > cible.x &&
		joueur.y < cible.y + cible.height &&
		joueur.y + joueur.height > cible.y
	) {
		points++;
		cible.x = Math.random() * (canvas.width - cible.width);
		cible.y = 0;
		cible.speed += 0.2 * coefficient;
		coefficient = coefficient / 1.1;
	}
}

function afficherPoints() {
	contexte.font = "100% garamond";
	contexte.fillStyle = "#ffffff";
	contexte.fillText("Points : " + points, 10, 20);
}

function rafraichir() {
	contexte.clearRect(0, 0, canvas.width, canvas.height);
	if (droite && joueur.x < canvas.width - joueur.width) {
		joueur.x += 5;
	} else if (gauche && joueur.x > 0) {
		joueur.x -= 5;
	}
	cible.y += cible.speed;
	afficherJoueur();
	afficherCible();
	collisions();
	afficherPoints();
	requestAnimationFrame(rafraichir);
}

function initialiser() {
	contexte = canvas.getContext("2d");
	joueur = {
		x: canvas.width / 2,
		y: canvas.height - 30,
		width: 20,
		height: 20,
		color: "#009900"
	};
	cible = {
		x: canvas.width / 2,
		y: 0,
		width: 30,
		height: 30,
		color: "#990000",
		speed: 2
	};
	rafraichir();
}
