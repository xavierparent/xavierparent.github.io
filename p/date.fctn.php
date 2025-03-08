<?php

	$fichier = "date.txt";
	$date = date('d F Y') ;
	$update = "This page was updated on " . $date ;

	$wo = fopen($fichier, 'w');
	fwrite($wo, $update);	
	fclose($wo);

?>