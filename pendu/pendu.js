mots = ["CHIEN", "CHAT", "MAISON", "JARDIN", "VOITURE", "SOLEIL"];
secret = mots[Math.floor(Math.random() * mots.length)];
longueur = secret.length;
étapes = [
	" ┌───┐\n     │\n     │\n     │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n     │\n     │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n │   │\n ╵   │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n╭┤   │\n ╵   │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n╭┼╮  │\n ╵   │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n╭┼╮  │\n╭┘   │\n     │\n─────┘",
	" ┌───┐\n ☻   │\n╭┼╮  │\n╭┴╮  │\n     │\n─────┘"
];
essaisRestants = 6;
trouvées = 0;
affiché = "";
for (var i = 0; i < longueur; i++) {affiché += "_ ";}

function initialiser() {
	mot.textContent = affiché.trim();
	pre.innerText = étapes[0];
}

function essayer() {
	tentative = input.value.toUpperCase();
	if (tentative.length !== 1 || !tentative.match(/[a-z]/i)) {
		message.textContent = "Veuillez entrer une lettre de l'alphabet.";
	} else {
		nouveauAffiché = "";
		trouvée = false;
		for (var i = 0; i < longueur; i++) {
			if (secret[i] === tentative) {
				nouveauAffiché += tentative + " ";
				trouvée = true;
				trouvées++;
			} else {nouveauAffiché += mot.textContent[i * 2] + " ";}
		}
		mot.textContent = nouveauAffiché.trim();
		input.value = "";
		input.focus();
		if (trouvée) {
			if (trouvées === longueur) {
				message.textContent = "Félicitations ! Vous avez deviné le mot.";
				input.disabled = true;
				button.disabled = true;
			} else {message.textContent = "Bonne devinette !";}
		} else {
			message.textContent = "Ce n'est pas une bonne lettre. Essayez encore !";
			essaisRestants--;
			pre.innerText = étapes[6 - essaisRestants];
			mauvais.innerText += " " + tentative;
			if (essaisRestants === 0) {
				message.textContent = "Dommage, vous avez perdu. Le mot était : " + secret;
				input.disabled = true;
				button.disabled = true;
			}
		}
	}
}
