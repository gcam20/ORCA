var skinTones = ["0xFAE7D0", "0xDFC183", "0xAA724B", "0xFFCC99", "0xCEAB69", "0x935D37", "0xFEB186", "0xB98865", "0x7B4B2A", "0xC8ACA3", "0xE8CDA8", "0xC0A183", "0xCAA661", "0x573719", "0xC18E74", "0xB58A3F", "0x483728", "0xE5C298", "0xE5B887", "0xBA6C49", "0xFFDFC4", "0xF0D5BE", "0xEECEB3", "0xE1B899", "0xE5C298", "0xFFDCB2", "0xE5B887", "0xE5A073", "0xE79E6D", "0xC67856", "0xA57257", "0xF0C8C9", "0xDDA8A0", "0xB97C6D", "0xA8756C", "0xAD6542", "0x5C3836", "0xCB8442", "0xBD723C", "0x704139", "0xA3866A", "0x430000", "0xBF9680", "0xA48D87", "0x92776D", "0x3C2E28", "0x4B3932", "0x5A453C", "0x695046", "0x785C50", "0x87675A", "0x967264", "0xA57E6E", "0xB48A78", "0xC39582", "0xD2A18C", "0xE1AC96", "0xF0B8A0", "0xFFC3AA", "0xFFCEB4", "0xFFDABE", "0xFFE5C8", "0xC3A392", "0x8A6D62", "0x977C74", "0x95786E", "0x947668", "0x886F68", "0x977A72", "0x82665E", "0x987F77", "0xBFA698", "0xAA8372", "0xA98D86", "0x876B60", "0x957469", "0x9C7E74", "0x986247", "0x86543F", "0xA68A7F", "0xE5D3CD", "0x9A5A46", "0xBC7B61", "0xA0847C", "0xD2A790", "0xA7928E", "0xC68A68", "0xC98C67", "0xAE6F50", "0xB19189"];

var backgroundTones = ["0x716E71", "0xFDFDFD", "0xB1AFB3", "0xA6AEB4", "0x7D7C7F", "0x797475", "0x716C70", "0x736F74", "0xFEFEFE", "0x8D8C91", "0x7C7985", "0x888588", "0xA8A5A6", "0xA3A0A4"];

function inRange(color, compColor)
{
    var rS = color.substring(1, 3),
    gS = color.substring(3, 5),
    bS = color.substring(5),
    r = parseInt(rS, 16),
    g = parseInt(gS, 16),
    b = parseInt(bS, 16),
    compRS = compColor.substring(2, 4),
    compGS = compColor.substring(4, 6),
    compBS = compColor.substring(6),
    compR = parseInt(compRS, 16),
    compG = parseInt(compGS, 16),
    compB = parseInt(compBS, 16);
    if ((r > (compR - parseInt("0x05", 16)) && r < (compR + parseInt("0x05", 16))) && (g > (compG - parseInt("0x05", 16)) && g < (compG + parseInt("0x05", 16))) && (b > (compB - parseInt("0x05", 16)) && b < (compB + parseInt("0x05", 16)))) {
        return true;
    }
    return false;
}

function isSkinTone(color) {
    var skin;
    for (var i=0;i<skinTones.length;i++) {
        if (inRange(color, skinTones[i])) {
            return true;
        }
    }
    return false;
}

function isBackground(color) {
    var back;
    for (var i=0;i<backgroundTones.length;i++) {
        if (inRange(color, backgroundTones[i])) {
            return true;
        }
    }
    return false;
}

function checkSkin(inClass) {
    if (inClass === "wQytK1Jmkp") { //shorts
        return true;
    }
    else if (inClass === "4UegvZYVvb") { //Accessories
        return true;
    }
    else if (inClass === "E9Kbsd7WeY") { //shirts & tops
        return true;
    }
    else if (inClass === "M7Fg9Ehso4") { //socks
        return true;
    }
    else if (inClass === "aaB4BFSY05") { //swimwear
        return true;
    }
    else if (inClass === "9whubZU6Kh") { //sleepwear
        return true;
    }
    else if (inClass === "s1G8wJaWau") { //Underwear or Underwear & Intimates
        return true;
    }
    else if (inClass === "zraUG46N0m") { //Skirts
        return true;
    }
    else if (inClass === "l4MKUbS3vM") { //Dresses
        return true;
    }
    else if (inClass === "7DWGckRKov") { //Jumpsuits & Rompers
        return true;
    }
    else if (inClass === "t7dHuQTBVm") { //Scarves
        return true;
    }
    return false;
}

function getColor(pUrl, skinCheck, doneFunction) {
    //doneFunction.preventDefault();
    var pastSkin = false;
    var priColor = '';
    var secColor = '';
    var curColor = '';
    var timscolor;
    $.ajax({
        url: 'https://apicloud-colortag.p.mashape.com/tag-url.json?url=' + pUrl + '&palette=w3c&sort=relevance', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) {
            //alert(JSON.stringify(data));
            //alert(data.tags[0].label);
            for (var i=0;i<data.tags.length;i++) {
		curColor = data.tags[i].color;
                if (priColor !== '' && secColor !== ''){
                    break;
                }
                if (skinCheck) {
                    if (isBackground(curColor)) {
                        continue;
                    }
                    if (priColor == '' && isSkinTone(curColor) && !pastSkin) {
                        pastSkin = true;
                    }
                    else if (priColor == '' && !isSkinTone(curColor)) {
                        priColor = curColor;
                    }
                    else if (priColor == '' && pastSkin) {
                        priColor = curColor;
                    }
                    else if (priColor != '' && isSkinTone(curColor)) {
                        break;
                    }
                    else {
                        secColor = curColor;
                        break;
                    }
                }
                else {
                    if (isBackground(curColor)) {
			continue;
                    }
                    if (priColor == '' && !isBackground(curColor)) {
			priColor = curColor;
                    }
                    else if (priColor != '' && !isSkinTone(curColor)) {
			secColor=curColor;
			break;
                    }
                    else {
			break;
                    }
                }
            }
		var pR = priColor.substring(1, 3),
		pG = priColor.substring(3, 5),
		pB = priColor.substring(5),
		priR = parseInt(pR, 16),
		priG = parseInt(pG, 16),
		priB = parseInt(pB, 16);
		sR = secColor.substring(1, 3),
		sG = secColor.substring(3, 5),
		sB = secColor.substring(5),
		secR = parseInt(sR, 16),
		secG = parseInt(sG, 16),
		secB = parseInt(sB, 16);
	    alert("Item Added!");
	    var itemInfo = getEntries();
	    
       // alert(priColor);
        //alert(secColor);

	    // Write to Items table
	    writeToTable("Items", itemInfo, priR, priG, priB, secR, secG, secB, priColor, secColor);
	    window.location.href = "profile.html";

	    return color;      
	},
        error: function (err) {
            alert(JSON.stringify(err));
            priColor='';
            secColor='';
            notification(priColor,secColor);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "UD677VxqJ5h53t8iGgfaqIHumFmx7Tez");
        }
    });
}

function notification(priColor,secColor)
{
    if (priColor!='') {
	var pR = priColor.substring(1, 3),
        pG = priColor.substring(3, 5),
        pB = priColor.substring(5),
        priR = parseInt(pR, 16),
        priG = parseInt(pG, 16),
        priB = parseInt(pB, 16);
	alert("Primary: "+priColor+"</br>"+priR+"  "+priG+"  "+priB);
    }
    if (secColor!='') {
        sR = secColor.substring(1, 3),
        sG = secColor.substring(3, 5),
        sB = secColor.substring(5),
        secR = parseInt(sR, 16),
        secG = parseInt(sG, 16),
        secB = parseInt(sB, 16);
	alert("Secondary: "+secColor+"</br>"+secR+"  "+secG+"  "+secB);
    }
    var color = {priR: priR, priG: priG, priB: priB};
    return color;
}