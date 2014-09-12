function validateDescription(description)
{
	return true;
}

function validatePrice(price)
{

}

function validateUrl(url)
{
	var re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
	return re.test(url);
}

function validateEmail(email)
{
	
}
