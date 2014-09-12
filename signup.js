function submitClick()
{

    // TOOOOOODOOOOOOO : put back the validation check
    if (true) {

    	// Change back to main profile page
        document.getElementById('signup_container').style.display = 'none';
        document.getElementById('thanks_container').style.display = 'block';
        window.setTimeout("goToProfile()", 2000);
    }
}

function goToProfile() 
{
    window.location.href = "profile.html";
    return false
}

function cancelClick()
{
    if(confirm("Are you sure you want to cancel your sign up?")) {
		window.location.href = "welcome.html";
		return false;
    } else {
	//Do nothing
    }
}

function logoClick()
{
    window.location.href = "welcome.html";
    return false;
}

function validationCheck() {
    var a = getEntries()
    
    // Validate all fields have information entered into them
    var alertMsg = "Please fill out the following:";
    if (a.description == "") {
	   alertMsg += "\n-Description"
    }
    if (a.price == "0") {
	   alertMsg += "\n-Price"
    }
    if (a.picUrl == "") {
	   alertMsg += "\n-Picture"
    }
    if (a.url == "") {
	   alertMsg += "\n-URL"
    }
    if (a.bid == "0") {
	   alertMsg += "\n-Bid Price"
    }
    if (alertMsg != "Please fill out the following:") {
	   alert(alertMsg);
	return false;
    }

    // Validate description is in correct format
    if (!validateDescription(descriptionInput)) {
	   alert("Please enter an appropriate description.");
	return false;
    }

    // Validate url format
    if (!validateUrl(urlInput)) {
	   alert("Please enter a correctly formatted item URL.");
	return false;
    }

    // Validate picture is url format
    if (!validateUrl(picInput)) {
	   alert("Please enter a correctly formatted picture URL.");
	return false;
    }

    return true;
}

function getContactAddress() {
    var caddess1Input = document.getElementById('address1_input').value;
    var caddess2Input = document.getElementById('address2_input').value;
    var ccityInput = document.getElementById('city_input').value;
    var cstateInput = document.getElementById('state_input').value;
    var czipInput = document.getElementById('zip_input').value;

    var addressFull = caddess1Input + " " + caddess2Input;
    var input = {address1: caddess1Input, address2:caddess2Input, city: ccityInput, state: cstateInput, zip: czipInput};
    return input;
}

function fillBilling() {
    var addressInfo = getContactAddress();
    var address1 = addressInfo.address1;
    var address2 = addressInfo.address2;
    var city = addressInfo.city;
    var state = addressInfo.state;
    var zip = addressInfo.zip;
    document.getElementById('paddress1_input').value = address1;
    document.getElementById('paddress2_input').value = address2;
    document.getElementById('pcity_input').value = city;
    document.getElementById('pstate_input').value = state;
    document.getElementById('pzip_input').value = zip;

}

function getEntries() {

    // User information
    var usernameInput = document.getElementById('username_input').value;
    var password1Input = document.getElementById('password1_input').value;
    var password2Input = document.getElementById('password2_input').value;
    var urlInput = document.getElementById('url_input').value;
    var companyInput = document.getElementById('company_input').value;

    // Contact information
    var cnameInput = document.getElementById('cname_input').value;
    var cphoneInput = document.getElementById('cphone_input').value;
    var cemailInput = document.getElementById('cemail_input').value;
    var caddess1Input = document.getElementById('address1_input').value;
    var caddess2Input = document.getElementById('address2_input').value;
    var ccityInput = document.getElementById('city_input').value;
    var cstateInput = document.getElementById('state_input').value;
    var czipInput = document.getElementById('zip_input').value;

    // Payment information
    var pnameInput = document.getElementById('pname_input').value;
    var ccInput = document.getElementById('cc_input').value;
    var expmInput = document.getElementById('exp_m_input').value;
    var expyInput = document.getElementById('exp_y_input').value;
    var cvvInput = document.getElementById('cvv_input').value;
    var paddress1Input = document.getElementById('paddress1_input').value;
    var paddress2Input = document.getElementById('paddress2_input').value;
    var pcityInput = document.getElementById('pcity_input').value;
    var pstateInput = document.getElementById('pstate_input').value;
    var pzipInput = document.getElementById('pzip_input').value;

    return inputs;
}