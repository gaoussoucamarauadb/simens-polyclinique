var base_url = window.location.toString();
var tabUrl = base_url.split("public");
var genreMaman = 0;
$(function() {
	//GESTION DES ACCORDEONS
	//GESTION DES ACCORDEONS
	//GESTION DES ACCORDEONS
	//$( "#accordionss" ).accordion(); //sous accordeon
    //$( "#accordions" ).accordion();
    
/********************************************************************************************/
/********************************************************************************************/ 
    //BOITE DE DIALOG POUR LA CONFIRMATION DE SUPPRESSION
    function confirmation(){
	  $( "#confirmation" ).dialog({
	    resizable: false,
	    height:170,
	    width:485,
	    autoOpen: false,
	    modal: true,
	    buttons: {
	        "Oui": function() {
	            $( this ).dialog( "close" );

	             $('#photo').children().remove(); 
	             $('<input type="file" />').appendTo($('#photo')); 
	             $("#div_supprimer_photo").children().remove();
	             Recupererimage();          	       
	    	     return false;
	    	     
	        },
	        "Annuler": function() {
                $( this ).dialog( "close" );
            }
	   }
	  });
    }
    //FONCTION QUI RECUPERE LA PHOTO ET LA PLACE SUR L'EMPLACEMENT SOUHAITE
    function Recupererimage(){
    	$('#photo input[type="file"]').change(function() {
    	  
    	   var file = $(this);
 		   var reader = new FileReader;
 		   
	       reader.onload = function(event) {
	    		var img = new Image();
                 
        		img.onload = function() {
				   var width  = 100;
				   var height = 105;
				
				   var canvas = $('<canvas></canvas>').attr({ width: width, height: height });
				   file.replaceWith(canvas);
				   var context = canvas[0].getContext('2d');
	        	    	context.drawImage(img, 0, 0, width, height);
			    };
			    document.getElementById('fichier_tmp').value = img.src = event.target.result;
			   
    	};
    	 $("#modifier_photo").remove(); //POUR LA MODIFICATION
    	reader.readAsDataURL(file[0].files[0]);
    	//Cr�ation de l'onglet de suppression de la photo
    	$("#div_supprimer_photo").children().remove();
    	$('<input alt="supprimer_photo" title="Supprimer la photo" name="supprimer_photo" id="supprimer_photo">').appendTo($("#div_supprimer_photo"));
      
    	//SUPPRESSION DU PHOTO
        //SUPPRESSION DU PHOTO
          $("#supprimer_photo").click(function(e){
        	 e.preventDefault();
        	 confirmation();
             $("#confirmation").dialog('open');
          });
      });
    	     
    }
    //AJOUTER LA PHOTO DU PATIENT
    //AJOUTER LA PHOTO DU PATIENT
    Recupererimage();
    
    //AJOUT LA PHOTO DU PATIENT EN CLIQUANT SUR L'ICONE AJOUTER
    //AJOUT LA PHOTO DU PATIENT EN CLIQUANT SUR L'ICONE AJOUTER
    $("#ajouter_photo").click(function(e){
    	e.preventDefault();
    });
    
    //VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
    //VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
    //VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
    
            var      nom = $("#NOM");
            var   prenom = $("#PRENOM");
            var     sexe = $("#SEXE");
            var date_naissance = $("#DATE_NAISSANCE");
            var lieu_naissance = $("#LIEU_NAISSANCE");
            var nationalite_origine = $("#NATIONALITE_ORIGINE");
            var nationalite_actuelle = $("#NATIONALITE_ACTUELLE");
            var     adresse = $("#ADRESSE");
            var   telephone = $("#TELEPHONE");
            var       email = $("#EMAIL");
            var  profession = $("#PROFESSION");
    	
    //$( "button" ).button(); // APPLICATION DU STYLE POUR LES BOUTONS
    
    //Au debut on cache le bouton modifier et on affiche le bouton valider
  	$( "#bouton_donnees_valider" ).toggle(true);
  	$( "#bouton_donnees_modifier" ).toggle(false);
  	
  	$( "#bouton_donnees_valider" ).click(function(){
  		            nom.attr( 'readonly', true );    
  		         prenom.attr( 'readonly', true );  
  		           sexe.attr( 'readonly', true );
         date_naissance.attr( 'readonly', true );
         lieu_naissance.attr( 'readonly', true );
    nationalite_origine.attr( 'readonly', true );
   nationalite_actuelle.attr( 'readonly', true );
                adresse.attr( 'readonly', true );
              telephone.attr( 'readonly', true );
                  email.attr( 'readonly', true );
             profession.attr( 'readonly', true );
             
  		$("#bouton_donnees_valider").toggle(false);  
  		$("#bouton_donnees_modifier").toggle(true); 
  		return false; 
  	});
  	
  	$( "#bouton_donnees_modifier" ).click(function(){
                   nom.attr( 'readonly', false );    
                prenom.attr( 'readonly', false );  
                  sexe.attr( 'readonly', false );
        date_naissance.attr( 'readonly', false );
        lieu_naissance.attr( 'readonly', false );
   nationalite_origine.attr( 'readonly', false );
  nationalite_actuelle.attr( 'readonly', false );
               adresse.attr( 'readonly', false );
             telephone.attr( 'readonly', false );
                 email.attr( 'readonly', false );
            profession.attr( 'readonly', false );
  		
        $("#bouton_donnees_valider").toggle(true);  
  		$("#bouton_donnees_modifier").toggle(false); 
  		return false; 
  	});
  	
  	//MENU GAUCHE
  	//MENU GAUCHE
  	
  	$("#vider").click(function(){
  		$('#LIEU_NAISSANCE').val('');
  		$('#EMAIL').val('');
  		$('#NOM').val('');
  		$('#TELEPHONE').val('');
  		$('#NATIONALITE_ORIGINE').val('');
  		$('#PRENOM').val('');
  		$('#NATIONALITE_ACTUELLE').val('');
  		$('#DATE_NAISSANCE').val('');
  		$('#ADRESSE').val('');
  		if(genreMaman != 1) {	$('#SEXE').val(''); }
  		$('#PROFESSION').val('');
  		return false;
  	});
  	
  	
 
  		$('#vider_champ').hover(function(){
  			
  			 $(this).css('background','url("'+tabUrl[0]+'public/images_icons/annuler2.png") no-repeat right top');
  		},function(){
  			  $(this).css('background','url("'+tabUrl[0]+'public/images_icons/annuler1.png") no-repeat right top');
  	    });

  		$('#div_supprimer_photo').hover(function(){
  			
  			 $(this).css('background','url("'+tabUrl[0]+'public/images_icons/mod2.png") no-repeat right top');
  		},function(){
  			  $(this).css('background','url("'+tabUrl[0]+'public/images_icons/mod.png") no-repeat right top');
  	    });

  		$('#div_ajouter_photo').hover(function(){
  			
  			 $(this).css('background','url("'+tabUrl[0]+'public/images_icons/ajouterphoto2.png") no-repeat right top');
  		},function(){
  			  $(this).css('background','url("'+tabUrl[0]+'public/images_icons/ajouterphoto.png") no-repeat right top');
  	    });

  		$('#div_modifier_donnees').hover(function(){
  			
  			 $(this).css('background','url("'+tabUrl[0]+'public/images_icons/modifier2.png") no-repeat right top');
  		},function(){
  			  $(this).css('background','url("'+tabUrl[0]+'public/images_icons/modifier.png") no-repeat right top');
  	   });
  
  //FIN VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
  //FIN VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
  //FIN VALIDATION OU MODIFICATION DU FORMULAIRE ETAT CIVIL DU PATIENT
  		
  		$('#DATE_NAISSANCE').datepicker(
    			$.datepicker.regional['fr'] = {
    					closeText: 'Fermer',
    					changeYear: true,
    					yearRange: 'c-80:c',
    					prevText: '&#x3c;Préc',
    					nextText: 'Suiv&#x3e;',
    					currentText: 'Courant',
    					monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
    					'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
    					monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
    					'Jul','Aout','Sep','Oct','Nov','Dec'],
    					dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    					dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    					dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    					weekHeader: 'Sm',
    					dateFormat: 'dd/mm/yy',
    					firstDay: 1,
    					isRTL: false,
    					showMonthAfterYear: false,
    					yearRange: '1900:2050',
    					showAnim : 'bounce',
    					changeMonth: true,
    					changeYear: true,
    					yearSuffix: ''
    			}
    	);
    
});