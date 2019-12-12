window.addEventListener("load", documentLoaded);



function documentLoaded() {

	function caca() {
		alert("caca!");
	}

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
	   /*
	var currentLevel = 0;
	var htmlContent = "";
	for (var key in images) {
		var currentImageLevel = images[key].niveau;
		if (currentLevel < currentImageLevel) {
			htmlContent += "<ul>";
			currentLevel = currentImageLevel;
		}
		if (currentLevel > currentImageLevel) {
			for (var i = 0 ; i < (currentLevel - currentImageLevel) ; ++i) {
				htmlContent += "</ul>";
			}
			currentLevel = currentImageLevel;
		}
		htmlContent += "<i><span>" + key + "</span></i><br>";
	}
	htmlContent += "</ul>";

	document.getElementById("liste").innerHTML = htmlContent;
	*/
	var niveauPrecedent = 0;
    var htmlContent = "";
    for (var key in images) {
        var currentImageLevel = images[key].niveau;

    	// cas 1- executer quand le niveau augmente
 		if (niveauPrecedent  < currentImageLevel) {
            htmlContent += "<ul>";
            niveauPrecedent  = currentImageLevel;
        }

		// cas 2- executer quand le niveau diminue
        if (niveauPrecedent  > currentImageLevel) {
            for (var i = 0 ; i < (niveauPrecedent - currentImageLevel) ; ++i) {
                htmlContent += "</ul>";
            }
            niveauPrecedent = currentImageLevel;
        }
        htmlContent += "<i><span>" + key + "</span></i><br>";
    }
    htmlContent += "</ul>";
    
    document.getElementById("liste").innerHTML = htmlContent;


	var spans = document.querySelectorAll("span");
	for (var i = 0 ; i < spans.length ; ++i) {
		spans[i].addEventListener("mouseover", function(event) {
			event.target.classList.add("hoveredSpan");
			var divAffichage = document.getElementById("affichage");
			var nomFichierImage = images[event.target.textContent].fichier;
			if (nomFichierImage.length > 0) {
				divAffichage.innerHTML = "<img src=images/" + nomFichierImage + ">"
			} else {
				divAffichage.innerHTML = "<img src=images/No_image_available.png>"
			}
		})
		spans[i].addEventListener("mouseout", function() {
			event.target.classList.remove("hoveredSpan");
			var divAffichage = document.getElementById("affichage");
			divAffichage.innerHTML = "";
		})
	}

	
	
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