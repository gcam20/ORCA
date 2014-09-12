function submitClick()
{

    // TOOOOOODOOOOOOO : put back the validation check
    if (validationCheck()) { 
    // Connect to DB
    connectToDB();
    
    // Build item information from form entries
    var picInput = document.getElementById('picInput').value;
    getColor(picInput,checkSkin('bfLfH89w2W'));
    }
}

function cancelClick()
{
    if(confirm("Are you sure you want to cancel your item addition?")) {
        window.location.href = "profile.html";
        return false;
    } else {
    //Do nothing
    }
}

function logoClick()
{
    window.location.href = "profile.html";
    return false;
}

function validationCheck() {
    var a = getEntries()
    
    // Validate all fields have information entered into them
    var alertMsg = "Please fill out the following:";
    if (a.description == "") {
       alertMsg += "\n-Brand"
    }
    if (a.name == "") {
       alertMsg += "\n-Name"
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

    return true;
}

function getEntries() {

    var descriptionInput = document.getElementById('descriptionInput').value;
    var nameInput = document.getElementById('nameInput').value;


    var priceString = document.getElementById('priceInput').value;
    var priceInput = parseFloat(priceString);

    var maleInput = false;
    if (document.getElementById('maleInput').checked) {
       maleInput = true;
    }

    var availStoreInput = false;
    if (document.getElementById('availStoreInput').checked) {
       availStoreInput = true;
    }

    var availShipInput = false;
    if (document.getElementById('availShipInput').checked) {
       availShipInput = true;
    }

    var urlInput = document.getElementById('urlInput').value;

    var bidString = document.getElementById('bidInput').value;
    var bidInput = parseFloat(bidString);
    var category = document.getElementById('category').value;
    var picInput = document.getElementById('picInput').value;

    //get color from pic

    var itemInfo = {description: descriptionInput, name: nameInput, availStore: availStoreInput, availShip: availShipInput, mens: maleInput, url: urlInput, price: priceInput, bid: bidInput, picUrl: picInput, availStore: availStoreInput, availShip: availShipInput, url: urlInput, category: category};
    return itemInfo;
}

function getCategories()
{
    console.log("Parse loaded.");
    Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");

    var Classification = Parse.Object.extend("Classifications");
    var query = new Parse.Query(Classification);
    query.limit(1000);
    query.ascending('levelA_name');

    query.find({
    success: function(results) {
        var select = document.getElementById('category');

        // results is an array of Parse.Object.
        for(var i = 0; i < results.length; i++) {
        //select.options[i].innerHTML = results[i].get('levelA_name');
        select.options[select.options.length] = new Option(results[i].get('levelA_name'),results[i].id);
        }
    },
    error: function(error) {
        // error is an instance of Parse.Error.
        alert("ERROR");
    }
    });
}