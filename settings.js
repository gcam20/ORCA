var account_settings = document.getElementById('account_settings_pane');
var contact_settings = document.getElementById('contact_settings_pane');
var payment_settings = document.getElementById('payment_settings_pane')

function logoClick()
{
	window.location.href = "profile.html";
	return false;
}

function saveClick() 
{
	// Add DB save functionality
	window.location.href = "profile.html";
	return false;

}

function changePasswordOpen()
{
	document.getElementById('chg_password_confirm').style.display = 'none';
	document.getElementById('old_password_label').style.display = 'block';
	document.getElementById('password1_label').style.display = 'block';
	document.getElementById('password2_label').style.display = 'block';
	document.getElementById('old_password_input').style.display = 'block';
	document.getElementById('password1_input').style.display = 'block';
	document.getElementById('password2_input').style.display = 'block';
	document.getElementById('br1').style.display = 'block';
	document.getElementById('br2').style.display = 'block';
	document.getElementById('br3').style.display = 'block';
	document.getElementById('br4').style.display = 'block';
	document.getElementById('br5').style.display = 'block';
	document.getElementById('br6').style.display = 'block';


}

function accountSettingsOpen()
{
	var current = document.getElementById('account_settings_pane').style.display;
	if (current == 'none') {
		document.getElementById('account_settings_pane').style.display = 'block'
		document.getElementById('contact_settings_pane').style.display = 'none'
		document.getElementById('payment_settings_pane').style.display = 'none'
		document.getElementById('account_open_close_indicator').innerHTML = '[ - ]'
	} else {
		document.getElementById('account_settings_pane').style.display = 'none'
		document.getElementById('contact_settings_pane').style.display = 'none'
		document.getElementById('payment_settings_pane').style.display = 'none'
		document.getElementById('account_open_close_indicator').innerHTML = '[+]'
	}
	
}

function contactSettingsOpen()
{
	var current = document.getElementById('contact_settings_pane').style.display;
	if (current == 'none') {
		document.getElementById('account_settings_pane').style.display = 'none'
		document.getElementById('contact_settings_pane').style.display = 'block'
		document.getElementById('payment_settings_pane').style.display = 'none'
		document.getElementById('contact_open_close_indicator').innerHTML = '[ - ]'
	} else {
		document.getElementById('account_settings_pane').style.display = 'none'
		document.getElementById('contact_settings_pane').style.display = 'none'
		document.getElementById('payment_settings_pane').style.display = 'none'
		document.getElementById('contact_open_close_indicator').innerHTML = '[+]'
	}
}

function paymentSettingsOpen()
{
	var current = document.getElementById('payment_settings_pane').style.display;
	if (current == 'none') {
		document.getElementById('account_settings_pane').style.display = 'none'
		document.getElementById('contact_settings_pane').style.display = 'none'
		document.getElementById('payment_settings_pane').style.display = 'block'
		document.getElementById('payment_open_close_indicator').innerHTML = '[ - ]'
	} else {
		document.getElementById('account_settings_pane').style.display = 'none'
		document.getElementById('contact_settings_pane').style.display = 'none'
		document.getElementById('payment_settings_pane').style.display = 'none'
		document.getElementById('payment_open_close_indicator').innerHTML = '[+]'
	}
}