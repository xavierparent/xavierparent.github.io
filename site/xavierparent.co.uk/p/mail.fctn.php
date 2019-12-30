<?php

$nom = $_POST['nom'] ;
$adresse = $_POST['mel'] ;
$objet = $_POST['objet'] ;
$message = trim($_POST['message']) ;
//$societe = $_POST['societe'] ;

	if (empty($nom)) {
		$nom = '\'anonyme\'' ; 
	}
	
		$to = 'xavier.parent@uni.lu' ;
		$nom = stripslashes($nom) ;
		$objet = stripslashes($objet) ;
		$objet = $objet . ' || via xavierparent.org';
		$message = stripslashes($message) ;
		$message = wordwrap($message, 100) ;
//		$contenu_message = '[ message de ' . $adresse . "\n" . $nom . ' - ' . $societe . ' ] :' . "\n\n" . $message . "\n"  ;
		$contenu_message = '[ message de ' . $adresse . ' ( ' . $nom . ' ) ] :' . "\n\n" . $message . "\n"  ;
	
		$from = 'From: contact@xavierparent.org' ;
		$cc = 'Cc: ' . $adresse ;
		$re = 'Reply-To: ' . $adresse ;
		$type = 'Content-Type: text/plain; charset=UTF-8; format=flowed' ;
		$entetes = $from . "\r\n" . $cc . "\r\n" . $re . "\r\n" . $type ;

		mail($to, $objet, $contenu_message, $entetes) ;


  }
  
?>

