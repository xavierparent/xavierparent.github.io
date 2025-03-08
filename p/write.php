<?php

	if ( (!empty($_POST['fichier'])) && (!empty($_POST['contenu'])) ) {

		$contenu = stripslashes($_POST['contenu']);
		$contenu = htmlspecialchars_decode($contenu);
		$fichier = $_POST['fichier'];
		$fichier = "../txt/" . $fichier . ".txt";

		$wo = fopen($fichier, 'w');
		fwrite($wo, $contenu);	
		fclose($wo);
	} 
	
	else {echo 'error';}
	
?>