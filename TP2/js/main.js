window.addEventListener("load", documentLoaded);

function caca() {
	alert("caca!");
}

function documentLoaded() {

	// objet "tableau de correspondance" entre les libellés des LI et leur fichier image
	// vous pouvez choisir un autre thème avec d'autres images
	// =================================================================================
	var images = {
		"Peintres du 20ième siècle"	:	{"niveau" : 1, "fichier": "Guernica.jpg"},
        "Raoul Dufy"				:	{"niveau" : 2, "fichier": "Dufy-autoportrait.jpg"},
		"Bouquet de fleurs"			:	{"niveau" : 3, "fichier": "bouquet-de-fleurs.jpg"},
		"Italie"					:	{"niveau" : 3, "fichier": "Italie.jpg"},
		"Les turfistes"				:	{"niveau" : 3, "fichier": "les-turfistes.jpg"},
		"Orchestre mexicain"		:	{"niveau" : 3, "fichier": "orchestre-mexicain.jpg"},
		"Autre"                     :   {"niveau" : 2, "fichier": ""}, 
		"Dali, Christ en croix"		:	{"niveau" : 3, "fichier": "Dali-Christ-en-croix.jpg"},
		"Léger, les trapézistes"	:	{"niveau" : 3, "fichier": "Leger-les-trapezistes.jpg"},
		"Magritte, le retour"		:	{"niveau" : 3, "fichier": "Magritte-le-retour.jpg"},
		"Art Optique"				:	{"niveau" : 1, "fichier": "Buren-excentriques.jpg"},
        "Vasarely"					:	{"niveau" : 2, "fichier": "Vasarely-autoportrait.jpg"},
		"Catch"						:	{"niveau" : 3, "fichier": "catch.jpg"},
		"Sérigraphie"				:	{"niveau" : 3, "fichier": "serigraphie.jpg"},
        "Julio Le Parc"				:	{"niveau" : 2, "fichier": "Julio-Le-Parc-portrait.jpg"},
		"Rotation de carrés"		:	{"niveau" : 3, "fichier": "rotation-de-carres.jpg"},
	};

	var noImageFichier = "No_image_available.png";   // fichier image par défaut
	
	/* =====================================
	   insérez ici le code JavaScript du TP2
	   ===================================== */
	
	
	// vous pouvez utiliser cette fonction de trace
	// pour la mise au point de votre programmation JavaScript
	// =======================================================

	function trace(evt, msg) {
		msg =   evt.type + " "
			  + evt.target.nodeName + " "
			  + evt.target.parentNode.nodeName + " "
			  + evt.target.firstChild.nodeName  + " "
			  + evt.target.firstChild.nodeValue + " : "
			  + msg;
		document.getElementById("trace").innerHTML += msg + "<br>";
	}
	
	
}