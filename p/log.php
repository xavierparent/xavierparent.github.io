<?php

	$nom = trim($_POST['nom']);
	$mdp = trim($_POST['mdp']);
	
	if ( ($nom == "xp") && (md5($mdp) == "44b4ff3b6208a625f4cd6d9154dbb14f") ) { echo "yes"; } 
	else { echo "no"; }

?>