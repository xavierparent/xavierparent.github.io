$(document).ready(function(){
 
	
/*###__load content__####*/

/*
	$(".content").each(function() {
		var txtid = $(this).attr("id");
		$(this).children("article").load('txt/' + txtid + '.txt');		
	});
	
	$('#bio .article').show();
*/	
/*	$('.content h2').click(function() {
		$(this).next("article").toggle('slow');
	});*/
/*	
	$('.content h2').mousedown(function() {
		$(this).css("background-color","white");
	});
	$('.content h2').mouseup(function() {
		$(this).css("background-color","#E7E8E7");
	});
*/
	$('#maj').load('p/date.txt');
	
/*###__deroulement__###*/

/*	$('#articles h2').click(function() {
		$("#articles .deroul").toggle();
	});
	
	$('.deroul').click(function() {
		$(this).prev("article").slideToggle("slow");
		$(this).hide();
	});
*/

/*####__footer__####*/

	$('#footer a').click(function() {
		$(this).parent().next(".plus").slideToggle("slow").toggleClass("aff");
		$(this).parent().next().siblings(".plus").slideUp("fast").removeClass("aff");
		$(".error").remove();
		
		if ( $('.plus').hasClass("aff") ) {
			$('#update, #maj').slideUp("slow");
		} else { 
			$('#update, #maj').slideDown("slow");
		}
	});

	
/*	$('#footer a').mouseout(function() {
		$('.plus').slideUp("slow").removeClass("aff");
		$('#update').slideDown("slow");
	});*/
	
	$('#footer .plus a').hover(function() {
		var plusho = $(this).attr("title");
		$(this).after("<div class=\"plush\">" + plusho + "</div>");
	}, function() {
		$('#footer .plush').remove();
	});
	
/*###__crypt email__####*/

	$('#spemail').spemail('||,;', 'plainbase');


/*#########################################################__login__####*/

	$('#user, #pass').focus(function() { 
		$(".error").fadeTo("slow", 0).remove();
	});
	
	
	$('#subm').click(function () {
		
/*		$(".error").hide();*/
		var verror = false;
		var nomVal = $('#user').val();
		var mdpVal = $('#pass').val();
		
		if ( (nomVal == "") || (mdpVal == "") ) {
			$('#formlog').append('<div class="error">error</div>');
			$('.error').fadeTo("fast", 1);
			verror = true;
		}
		
		if (verror == false) {
			$.post("p/log.php", {nom: nomVal, mdp: mdpVal}, function(data) {
				if (data == "no") {
					$('#subm').after('<div class="error">error</div>');
					$('.error').fadeTo("fast", 1);
				} else {
					$('#subm').after('<div class="error">id ok</div>');
					$('.error').fadeTo("fast", 1);
					$('.article').attr('contenteditable', 'true');
					$('#formlog').oneTime(1500, function() {
						$('#formlog .error').fadeOut("slow");
					});
					$('.content').prepend('<div class="btw"><a>w</a></div>');

					$('#footer .more').load('p/statlog');
					$('#footer .btmore').live("mouseover", function() {
						$(this).next().fadeIn();
					});
					$('#footer .btmore').live("mouseout", function() {
						$(this).next().fadeOut();	
					});

				}
			});
			
		}
		else { return false; }
	});

	
/*######################################################__write__#####*/
	
	$('#content .article').live('focus', function() {
		$(this).addClass("writing");
	});
	$('#content .article').live('blur', function() {
		$(this).removeClass("writing");
	});
	
	$('.btw a').live('click', function() {
		var ths = this;
		var txt = $(this).parent().parent().attr('id');
		var texte = $(this).parent().siblings('.article').html();
		$.ajax ({
			type: "POST",
			ifModified: true,
			url: "p/write.php",
			data: {fichier:txt, contenu:texte},
			context: ths,
			error: function(msg) {
				$(this).before('<div class="error">' + msg + '</div>');
				$('.error').oneTime(1000, function() {
					$(this).fadeOut(1500).remove();
				});
			},
			success: function() {
				$(this).after('<div class="wok">writed !</div>');
				$('.wok').oneTime(1000, function() {
					$(this).fadeOut(1500).remove();
				});
				$(this).load("p/date.fctn.php");
			}
		});
	});


/*######################################################__mail__#######*/

/*	$('#mail').load('p/mail.inc.php');*/
	
	$('#mel').click(function() {
		/* #mel est dans p/src/spemail.js - l.51 */
	//###reset##
		$('#Mform, #Mbouton').fadeIn();
		$('#Msubmit').show();
		$('#Mresult, #loading, .erreur').hide();
		$('#Mform #recaptchadiv').removeClass("aaff");
		$('#Mnom, #Mmel, #Mmessage, #Mobjet').val('');
		
	//###_display_##
		$('#page').animate({opacity: 0}, "slow").toggle("fast").animate({opacity: 1}, 1000);
//		$('#mail').fadeTo("slow", 0.5).slideToggle("").fadeTo("fast", 1)/*.fadeIn("slow")*/;
		$('#mail').animate({opacity: 0}, "slow").toggle("fast").animate({opacity: 1}, 1000);
		
	});
	
	//###_close-mail_###
	
	$('#closemel').click(function() {
		$('#mail').fadeOut("fast");
		$('#page').fadeIn("slow");
		$('#Mform #recaptchadiv').removeClass("aaff");
	});
	$('#closemel').mouseover(function() {
		$(this).css("color", "white");
	});
	$('#closemel').mouseout(function() {
		$(this).css("color", "#606060");
	});
	
	//#################_validation/envoi_###

	$('#Mform input, #Mform textarea').focus(function() { 
		$(this).next(".erreur").remove();
				$(this).css("backfround-color", "red");
	});
	$('input#recaptcha_response_field').focus(function() { 
		$('#recaptchadiv').prev(".erreur").remove();
	});
	$('#Mform #Mmel').focus(function() {
		$('#Mform #recaptchadiv').css("opacity", 0).addClass("aaff").fadeTo(2000, 1);
	});
	
	
	$('#Msubmit').click(function() {
	
	//#########################verif##

		var verror = false;
		$('.erreur').remove();
	
	//email
		var MmelVal = $("#Mmel").val();
		var Mverif = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+$/;
		if ( MmelVal == '' ) {
			$("#Mmel").after('<div class="erreur">email address error</div>');
			verror = true;
		} else if ( !Mverif.test(MmelVal) ) {	
			$("#Mmel").after('<div class="erreur">email address error</div>');
			verror = true;
		}
	
	//emptymessage
		var MmessageVal = $("#Mmessage").val();
		if ( MmessageVal == '' ) {
			$("#Mmessage").after('<div class="erreur">empty message</div>');
			verror = true;
		}

	//recapatcha
		var challengeField = $('#recaptcha_challenge_field').val();
		var responseField = $('#recaptcha_response_field').val();
		$.ajax({
			type: "POST",
			url: "p/recaptcha.verif.php",
			data: {recaptcha_challenge_field:challengeField, recaptcha_response_field:responseField},
			async: false,
			success: function(data) {
				if (data == "nok") {
					$("#recaptchadiv").before('<div class="erreur">captcha incorrect</div>');
					verror = true;
//					Recaptcha.reload();
				}
			},
			error: function() {
				$("#recaptchadiv").before('<div class="erreur">erreur</div>');			
				verror = true;
			}
		});
 
		
	//################################envoi##
		if ( verror == false ) {
			$('#Msubmit').hide();
			$('#Mbouton').append('<img src="p/img/loading.gif" id="loading" />');

			var MnomVal = $('#Mnom').val();
			var MobjetVal = $('#Mojet').val();
			
			$.ajax({
				type: "POST",
				url: "p/mail.fctn.php", 
				data: {nom:MnomVal, mel:MmelVal, objet:MobjetVal, message:MmessageVal},
//				context: document.body,
				success: function() {
						$('#Mform').fadeOut().hide();
						$('#mail').oneTime(500, function() {
							$('#Mbouton').fadeOut("slow", function() {
								$('#Mresult').fadeIn();
							});
						});
						$('#mail').oneTime(2000, function() {
							$('#mail').fadeOut(1000);
						});
						$('#mail').oneTime(3000, function() {
							$('#mail').css("display", "none");
							$('#content').fadeIn(1000);
						});
//					}
				}
			});
	
		} else { return false; }
		
	});
		

/*°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°__fin__°°°°°°*/

});