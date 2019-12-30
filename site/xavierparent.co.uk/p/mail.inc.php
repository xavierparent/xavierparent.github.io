<script type="text/javascript" src="http://www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>

<script type="text/javascript">
	var RecaptchaOptions = {
		theme : 'blackglass',
		tabindex : 2
	};
 </script>


		<img id="qr" src="p/img/qrcode.png" width="150px" />

		<div id="closemel">x</div>


		<div id="Mform">
		
			<p>name : <input type="text" name="nom" id="Mnom" class="mform" size="50" /></p>
<!--			<p class="mform">working : <input type="text" name="societe" id="Msociete" size="57" /></p>-->
			<p><b>email</b> : <input type="text" name="mel" id="Mmel" class="mform" size="50" onclick="showRecaptcha()" /></p>
			<p>subject : <input type="text" name="objet" id="Mobjet" class="mform" size="48" /></p>
			<p><b>message</b> : </p>
				<p><textarea name="message" id="Mmessage" class="mform" rows="10" cols="50"></textarea></p>		

			<ul id="Mbouton">
				<li><input type="submit" name="submit" id="Msubmit" value="send" /></li>
				<ul>
					<li class="note"><b>"human being" and bold fields</b> required</li>
					<li class="note">a copy of the message will be sent to your email address.</li>
				</ul>
			</ul>		
	
			<div id="recaptchadiv">
				<?php
					require_once('src/recaptchalib.php');
//xp	$publickey = "6Le5L7sSAAAAALmGT8hDoL2hUnlI8QpzdjkUa2ZF"; 
//3pts.me					$publickey = "6LeC1cASAAAAALC6bSGgOmfiwr08Q-quffXGGd5b";
	$publickey = "6LdOQ8kSAAAAAOpPXubO-McMsH40z6VsoCUCFxak"; 	//3pts.net
//xp	$privatekey = "6Le5L7sSAAAAAEKCDLYLVzfx3onW0pBO9Iv2qvAL";
//3pts.me					$privatekey = "6LeC1cASAAAAAA40V9qWWshOaKhfdermBGBZdxd9";
	$privatekey = "6LdOQ8kSAAAAABth8EDBBAdmchcX4FM_wAXznVm-";	//3pts.net
					echo recaptcha_get_html($publickey);
				?>
			</div>

		</div>
		
		<div id="Mresult"><p>your message has been sent.</p><p>thanks.</p></div>

