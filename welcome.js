var num = 1;
var img1 = new Image ();
img1.src = "img/welcome1_text.jpg";
var img2 = new Image ();
img2.src = "img/welcome2_text.jpg";
var img3 = new Image ();
img3.src = "img/welcome3_text.jpg";

var i = 1;

function pictureClick()
{
	window.location.href = "signup.html";
	return false;
}

function runTransitions()
{
	window.setTimeout(function (){
		var nextpath = "img/welcome" + i.toString() + "_text.jpg";
		document.getElementById('slideshow_pic').src = nextpath;
		//Transitions.fade("#slideshow_pic", nextpath, "Welcome", "0.5", runTransitions());
		i++;
		if (i == 4) {i = 1;}
		runTransitions();
	}, 3000);
}

function slideshowUp() 
{
	num = num + 1;
	if (num == 4) {num = 1;}
	var path = eval("img" + num.toString() + ".src");
	document.getElementById('slideshow_pic').src = path;
}

function slideshowDown()
{
	num = num - 1;
	if (num == 0) {num = 3;}
	var path = eval("img" + num.toString() + ".src");
	document.getElementById('slideshow_pic').src = path;
}