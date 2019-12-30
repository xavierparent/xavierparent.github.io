<?php

//########__recaptcha__######

	require_once("src/recaptchalib.php");
//xp	$publickey = "6Le5L7sSAAAAALmGT8hDoL2hUnlI8QpzdjkUa2ZF"; 
//3pts.me	$publickey = "6LeC1cASAAAAALC6bSGgOmfiwr08Q-quffXGGd5b";
	$publickey = "6LdOQ8kSAAAAAOpPXubO-McMsH40z6VsoCUCFxak";	//3pts.net
//xp	$privatekey = "6Le5L7sSAAAAAEKCDLYLVzfx3onW0pBO9Iv2qvAL";
//3Pts.me	$privatekey = "6LeC1cASAAAAAA40V9qWWshOaKhfdermBGBZdxd9";
	$privatekey = "6LdOQ8kSAAAAABth8EDBBAdmchcX4FM_wAXznVm-";	//3pts.net
	$resp = recaptcha_check_answer (
		$privatekey,
		$_SERVER["REMOTE_ADDR"],
		$_POST["recaptcha_challenge_field"],
		$_POST["recaptcha_response_field"]
	);

  if ( $resp->is_valid ) { echo "ok"; } 
  else { echo "nok"; }
 
 ?>