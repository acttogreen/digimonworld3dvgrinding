<?php
if(!isset($frontpage)) header("location:js/..");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Digimon World 3 DV Grinding Support Tools</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="style/favicon.ico" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" rel="stylesheet">

  <!-- Bootstrap css -->
  <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.theme.default.min.css" rel="stylesheet">
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/modal-video/css/modal-video.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/element.css" rel="stylesheet">

  <!-- =======================================================
    Theme Name: eStartup
    Theme URL: https://bootstrapmade.com/estartup-bootstrap-landing-page-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= -->
  
<style>
.profile-image {
  width: 150px;
  height: 150px;
  border: 4px solid black;
  -webkit-border-radius: 75px;
  border-radius: 75px;
  overflow: hidden;
  margin-bottom: 20px;

  vertical-align:middle;
  text-align:center;
}
.profile-image img {
  width: 100%;
  /*height: 100%;*/
}

</style>
</head>

<body>

  <header id="header" class="header header-hide">
    <div class="container">

      <div id="logo" class="pull-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href=""><img src="style/logolabel.png" height="40px" alt="" title="" /></a>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
			<li class="menu-active"><a href="#home" onclick="javascript: menuload('home');">Home</a></li>
			<li class="menu-has-children"><a href="#menu1">Menu</a>
			<ul>
				<li><a href="#dvtable" onclick="javascript: menuload('dvtable');">DV Poin Table</a></li>
				<li><a href="#dvtable" onclick="javascript: menuload('dvcalculator');">DV Grinding<br />Support Tool</a></li>
				<li><a href="#rookielevelexp" onclick="javascript: menuload('rookielevelexp');">Rookie Level<br />Exp Table</a></li>
			</ul>
			</li>


			<li class="menu"><a href="#menu2">...</a>
			</li>

        </ul>



      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

  <div id="loadmenu" style="display:none;"><br /><br /><center><span style="position: relative;background: url(style/loading.gif) no-repeat; width: 170px; height: 170px; display:block; background-size: 100% 100%; -webkit-background-size: 100% 100%; -khtml-background-size: 100% 100%; -moz-background-size: 100% 100%;"></span></center></div>
<br /><br /><br />
  <section id="home">
  </section>

  <section id="menu1" style="display:none;">
  </section>
  <section id="dvtable">
  </section>
  <section id="dvcalculator">
  </section>
  <section id="rookielevelexp">
  </section>

<br />
<br />






  <!--==========================
    Footer
  ============================-->
  <footer class="footer">
    <div class="copyrights" style="height:101px; margin:0; padding:0;">
      <div class="container">
        <p>&copy;Copyright <a href='https://www.youtube.com/@rikopal' target='_blank'>Riko Pal Yt Channel</a>.</p>
        <div class="credits">
          <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eStartup
          -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>

  </footer>



  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/superfish/hoverIntent.js"></script>
  <script src="lib/superfish/superfish.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/modal-video/js/modal-video.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>
  <script src="js/jquery.js"></script>

<script type="text/javascript">
$(document).ready(function(){
});

function emptymenu(){
	document.getElementById("home").innerHTML="";
	document.getElementById("dvtable").innerHTML="";
	document.getElementById("dvcalculator").innerHTML="";
	document.getElementById("rookielevelexp").innerHTML="";

	document.getElementById("home").style.display="none";
	document.getElementById("dvtable").style.display="none";
	document.getElementById("dvcalculator").style.display="none";
	document.getElementById("rookielevelexp").style.display="none";
}

if (window.XMLHttpRequest) var xmlhttp=new XMLHttpRequest();
else var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
function menuload(menupilihan, pesasan){
	menupilihan = typeof menupilihan !== 'undefined' ? menupilihan : "dvcalculator";
	pesasan = typeof pesasan !== 'undefined' ? pesasan : "";
	emptymenu();
	document.getElementById("loadmenu").style.display="block";
	document.getElementById(menupilihan).innerHTML=pesasan;
	document.getElementById(menupilihan).style.display="block";
    xmlhttp.abort();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
 			if(xmlhttp.responseText=="????") location.reload();
			else{
				document.getElementById("loadmenu").style.display="none";
				document.getElementById(menupilihan).innerHTML=xmlhttp.responseText;
				document.getElementById(menupilihan).style.display="block";


				// var myEle;
				// myEle = document.getElementsByName('periodenilaipes')[0];
				// if(myEle){
					// myEle.focus();
					// centerpopupnilaipes();
				// }
			}
        }
    }
    xmlhttp.open("POST", "menu/" + menupilihan + ".php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}
menuload();


function menuloadmaster(iddiisi, lokasimenu){
	document.getElementById(iddiisi).innerHTML="<center><span style=\"position: relative;background: url(style/loading.gif) no-repeat; width: 170px; height: 170px; display:block; background-size: 100% 100%; -webkit-background-size: 100% 100%; -khtml-background-size: 100% 100%; -moz-background-size: 100% 100%;\"></span></center>";
    xmlhttp.abort();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
 			if(xmlhttp.responseText=="????") location.reload();
			else{
				document.getElementById(iddiisi).innerHTML=xmlhttp.responseText;
			}
        }
    }
    xmlhttp.open("GET", lokasimenu,true);
    xmlhttp.send();
}


if (window.XMLHttpRequest) var xmlhttpglobal=new XMLHttpRequest();
else var xmlhttpglobal=new ActiveXObject("Microsoft.XMLHTTP");
function loadelementdata(idlocation, alamat, param){
	document.getElementById(idlocation).innerHTML=param;
	document.getElementById(idlocation).innerHTML="<center><span style=\"position: relative;background: url(style/loading.gif) no-repeat; width: 170px; height: 170px; display:block; background-size: 100% 100%; -webkit-background-size: 100% 100%; -khtml-background-size: 100% 100%; -moz-background-size: 100% 100%;\"></span></center>";
	loadelementdata2(idlocation, alamat, param);
}
function loadelementdata2(idlocation, alamat, param){
    xmlhttpglobal.abort();
    xmlhttpglobal.onreadystatechange=function(){
        if (xmlhttpglobal.readyState==4 && xmlhttpglobal.status==200){
 			if(xmlhttpglobal.responseText=="????") location.reload();
			else{
				document.getElementById(idlocation).innerHTML=xmlhttpglobal.responseText;
				// elecek = document.getElementById('prtoelementy');
				// if(elecek) window.scrollTo(0, elecek.offsetTop-60);
			}
        }
    }
    xmlhttpglobal.open("POST", "menu/"+ alamat,true);
    xmlhttpglobal.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttpglobal.send(param);
}



function ifromshow(alamat){
	//alert(alamat);
	$('body').css('overflow','hidden');//hidden scroll

    document.getElementById("uploaddalam").innerHTML="<center><iframe id=\"frameupload\" src=\""+ alamat +"\" frameBorder=\"0\" style=\"border:0; display:none;\"><p>Sepertinya Browser anda tidak mendukung dengan fitur ini.</p></iframe><span id=\"loadingupload\" style=\"position: relative;background: url(style/loading.gif) no-repeat; width: 42px; height: 42px; display:block;\"></span><span id=\"closeifrom\" onclick=\"javascript:return uploadclose();\" style=\"position: absolute; background: url(style/deleteicon.png) no-repeat; background-size: contain; width: 22px; height: 22px; display:inline-block; cursor: pointer; float:right; margin-top:-10px; margin-right:-10px; cursor:pointer; top: 0px; right: 0px;\"></span></center>";
    $("#upload").show();
    indoscreenH=document.getElementById("frameupload").clientHeight;
    indoscreenW=document.getElementById("frameupload").clientWidth;
    centerpopupupload();    
}

var tutup=true;

function uploadclose(){
	if(tutup==true){
		$("#upload").hide();
		$('body').css('overflow','auto');   //activated scroll
		document.getElementById("uploaddalam").innerHTML="";
 	}
}

$( window ).resize(function() {
    centerpopupupload();
});

var x = setInterval(function() {
	centerpopupupload();
}, 500); 

var indoscreenH=0;
var indoscreenW=0;
function centerpopupupload(){ //Popup ingin muncul di tengah layar browser0
    document.getElementById('frameupload').style.width = 1 + 'px';
    document.getElementById('frameupload').style.height = 1 + 'px';
    
	var menutup=20;

    if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 70 >= indoscreenW) document.getElementById('frameupload').style.width=indoscreenW + 'px';
    else document.getElementById('frameupload').style.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 70 + 'px';
    if(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 70 - (menutup*2) >= indoscreenH) document.getElementById('frameupload').style.height=indoscreenH + 'px';
    else document.getElementById('frameupload').style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 70 - (menutup*2) + 'px';

    document.getElementById('uploadisi').style.top = (((window.innerHeight/2)+$(document).scrollTop()) - (document.getElementById('uploadisi').clientHeight/2)) + menutup + 'px';
    document.getElementById('uploadisi').style.left = (window.innerWidth/2 - document.getElementById('uploadisi').clientWidth/2) + 'px';

	// var heightall = window.innerHeight + $(document).scrollTop();
	// var weightall = document.body.clientWidth + $(document).scrollLeft();
	var heightall = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
						   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	var weightall = Math.max( document.body.scrollWidth, document.body.offsetWidth, 
						   document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth );
    document.getElementById('upload').style.height = heightall + 'px';
    document.getElementById('upload').style.width = weightall + 'px';
}


function getdateml(mth, yr, dt)
{
	var sum=new Date(yr, mth, 0).getDate();
	var str="";
	for (var i = 1; i <= sum; i++) {
		str=str+'<option value="'+ i +'"';
		if(i==dt)str=str+' selected';
		str=str+'>'+ i +'</option>';
	}
	return str;
}

function numberkey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    //(delete), (backspace) atau 0-9
    if (charCode == 127 || charCode == 8 || charCode == 46 || charCode == 44 || (charCode >= 48 && charCode <= 57)){
        return true;
    }
    else return false;
}

</script>

<?php
//include("menu/akademik/akademiksc.php");
?>

<div id="upload" style="position: absolute; background:rgba(141, 208, 255, 0.5);padding:7px;border-radius: 0px; top:0px; left:0px; display:none;" onclick="javascript : uploadclose();"><div id="uploadisi" style="position: absolute; background-color:#6068ff;padding:7px;border-radius: 9px 9px 9px 9px;"><div id="uploaddalam" style="background-color:#ffffff;color:#000000;width: auto; height: 95.5%;padding:7px;"></div></div></div>

</body>
</html>
