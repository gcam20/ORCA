function submitClick()
{
    if (false) {

    } else {
	var descriptionInput = document.getElementById('descriptionInput').value;
	var priceInput = document.getElementById('priceInput').value;
	var picInput = document.getElementById('picInput').value;
	var availStoreInput = document.getElementById('availStoreInput').value;
	var availShipInput = document.getElementById('availShipInput').value;
	var urlInput = document.getElementById('urlInput').value;
	// colors??
	var sizesInput = getSizeInputs(); // not being used
	var bidInput = document.getElementById('bidInput').value;

	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
	
	var Items = Parse.Object.extend("Items");
	var items = new Items();

	// Testing .get(...)
	// var query = new Parse.Query(Items);

	// query.get("YoPdXCGVAH", {
	// 	success: function(items) {
	// 		alert("Got em!");
	// 	},
	// 	error: function(object, error) {
	// 		alert("NOOOOOO");
	// 	}
	// });

/*	items.set("description", descriptionInput);
	items.set("price", priceInput);
	items.set("picUrl", picInput);
	items.set("availStore", availStoreInput);
	items.set("availShip", availShipInput);
	items.set("url", urlInput);
	items.set("bid", bidInput);*/

	// var itemInfo = {description: descriptionInput, price: priceInput, picUrl: picInput, availStore: availStoreInput, availShip: availShipInput, url: urlInput, bid: bidInput};

	var NewTable = Parse.Object.extend("NewTable");
	var testObject = new NewTable();
	
	var price = parseFloat(priceInput)

	items.save({description: descriptionInput, url: urlInput, price: price}, {
	    success: function(object) {
		$(".success").show();
	    },
	    error: function(model, error) {
		$(".error").show();
	    }
	});

	alert(priceInput);


/*	items.save(null, {
	    success: function(items) {
		alert("Successfully added your item!");
	    },
	    error: function(items, error) {
		alert("Item addition did not work.\n\nERROR CODE: " + error.code + "\nERROR DESCRIPTION: " + error.description);
	    }
	});*/

	window.location.replace("profile.html");
    }
}

function validationCheck() {
    var descriptionInput = document.getElementById('descriptionInput').value;
    var priceInput = document.getElementById('priceInput').value;
    var picInput = document.getElementById('picInput').value;
    var availStoreInput = document.getElementById('availStoreInput').value;
    var availShipInput = document.getElementById('availShipInput').value;
    var urlInput = document.getElementById('urlInput').value;
    // colors??
    var sizesInput = getSizeInputs(); // not being used
    var bidInput = document.getElementById('bidInput').value;
    var alertMsg = "Please fill out the following:";

    if (descriptionInput == "") {
	alertMsg += "\n-Description"
    }
    if (priceInput == "0") {
	alertMsg += "\n-Price"
    }
    if (picInput == "") {
	alertMsg += "\n-Picture"
    }
    if (urlInput == "") {
	alertMsg += "\n-URL"
    }
    if (bidInput == "0") {
	alertMsg += "\n-Bid Price"
    }
    if (alertMsg != "Please fill out the following:") {
	alert(alertMsg);
	return false;
    }

    if (!validateDescription(descriptionInput)) {
	alert("Please enter an appropriate description.");
	return false;
    }

    if (!validateUrl(urlInput)) {
	alert("Please enter a correctly formatted item URL.");
	return false;
    }

    if (!validateUrl(picInput)) {
	alert("Please enter a correctly formatted picture URL.");
	return false;
    }

    return true;
}

function cancelClick()
{
    if(confirm("Are you sure you want to cancel your item addition?")) {
	window.location.replace("profile.html");
    } else {
	//Do nothing
    }
}

function getSizeInputs()
{
    var sizesXSInput = document.getElementById('sizesXSInput').checked;
    var sizesSInput = document.getElementById('sizesSInput').checked;
    var sizesMInput = document.getElementById('sizesMInput').checked;
    var sizesLInput = document.getElementById('sizesLInput').checked;
    var sizesXLInput = document.getElementById('sizesXLInput').checked;
    var sizesXXLInput = document.getElementById('sizesXXLInput').checked;

    var sizesInput = {XS: sizesXSInput, S: sizesSInput, M: sizesMInput, L: sizesLInput, XL: sizesXLInput, XXL: sizesXXLInput};
    return sizesInput;
}