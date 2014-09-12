function cancelClick()
{
	window.location.href = "welcome.html";
	return false;
}

function loginClick()
{
	var entries = getEntries();
	objId = attemptLogin(entries);
/*	if (objId != -1) {
		window.name = objId + " aabbcc123";
		//window.location.href = "profile.html";
		alert(window.name);
	}*/
	return false;
}

function getEntries()
{
	var usernameString = document.getElementById('username_input').value;
	var passwordString = document.getElementById('password_input').value;
	var entries = {username: usernameString, password: passwordString};
	return entries;
}