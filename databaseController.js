var DATA_SIZE = 2950;
var MAX_DIST = 442.0;
var MAX_PERC = 100.0;
var MAX_BID = .5;
var DIST_WEIGHT = .65;
var PERC_WEIGHT = .30;
var BID_WEIGHT = .05;

// Connect to Parse database
function connectToDB()
{
    Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
}

// Verify login
function attemptLogin(entries)
{
    var username = entries.username;
    var password = entries.password;

    Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("username", username);

    query.find({
	success: function(results) {
	    for (var i = 0; i < results.length; i++) {
			var user = results[i];
			var pass = user.get('pword');
			if (pass == password) {
				window.name = user.id;
				window.location.href = "profile.html";
			} else {
				alert("The login information you entered is incorrect. Please try again.")
			}
	    }
	},
	error: function(error) {
	    alert(error.code + "\n" + error.message);
	    return -1;
	}
    });

}

// Set up inputs for settings.html
function setUpInputs()
{
	var id = window.name;
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", id);
    query.find({
	success: function(results) {
	    for (var i = 0; i < results.length; i++) {
			var user = results[i];

			// Account information
			var username = user.get("username");
			var website = user.get("website");
			var company = user.get("company");
    		document.getElementById('username_input').value = username;
		    document.getElementById('url_input').value = website;
		    document.getElementById('company_input').value = company;

		    // Contact information
		    var cname = user.get("name");
		    var phone = user.get("phone");
		    var email = user.get("email");
		    var address = user.get("address");
		    var city = user.get("city");
		    var state = user.get("state");
		    var zip = user.get("zip")
		    document.getElementById('cname_input').value = cname;
		    document.getElementById('cphone_input').value = phone;
		    document.getElementById('cemail_input').value = email;
		    document.getElementById('address1_input').value = address;
		    //document.getElementById('address2_input').value;
		    document.getElementById('city_input').value = city;
		    document.getElementById('state_input').value = state;
		    document.getElementById('zip_input').value = zip;
	    }
	},
	error: function(error) {
	    alert(error.code + "\n" + error.message);
	    return -1;
	}
    });
}

// Display username in welcome message
function loadUser(id)
{
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", id);
    query.find({
		success: function(results) {
			if(results.length >= 1) {
				document.getElementById('welcome_message').innerHTML = "Welcome, " + results[0].get('username') + "!";
			}
		},
		error: function(error) {
			alert("ERROR");
		}
	});
}

// Load out old payment options in payment.html
function loadPayments() 
{
	var id = window.name;
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", id);
    query.find({
		success: function(results) {
			var user = results[0];
			var cc = user.get("cc");
			var expM = user.get('expM');
			var expY = user.get('expY');
			var cvv = user.get('cvv');

			var ccString = cc.toString(); // All CCs are 16 digits
			var blockedCC = "XXXX-XXXX-XXXX-" + ccString.substring(12, 16);

			document.getElementById('blocked_cc_txt').innerHTML = blockedCC;
			
		},
		error: function(error) {

		}
	});
}

// Load old payment option for payment.html
function loadOldPayment()
{
	var id = window.name;
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", id);
    query.find({
		success: function(results) {
			// Get
			var user = results[0];
			var pname = user.get('pname');
			var cc = user.get('cc');
			var ccString = cc.toString(); // All CCs are 16 digits
			var blockedCC = "XXXXXXXXXXXX" + ccString.substring(12, 16);
			var expM = user.get('expM');
			var expY = user.get('expY');
			var cvv = user.get('cvv');
			var paddress = user.get('paddress');
			var pcity = user.get('pcity');
			var pstate = user.get('pstate');
			var pzip = user.get('pzip');

			//Set
			document.getElementById('pname_input').value = pname;
			document.getElementById('cc_input').placeholder = blockedCC;
			document.getElementById('exp_m_input').value = expM;
			document.getElementById('exp_y_input').value = expY;
			document.getElementById('cvv_input').value = cvv;
			document.getElementById('paddress1_input').value = paddress;
			document.getElementById('pcity_input').value = pcity;
			document.getElementById('pstate_input').value = pstate;
			document.getElementById('pzip_input').value = pzip;
			
		},
		error: function(error) {

		}
	});
}

// Load a single item for manageItem.html
function loadItem() 
{
	var windowname = window.name;
	var namesplit = windowname.split(" ");
	var itemid = namesplit[1];
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var Items = Parse.Object.extend("ItemsAuto");
    var query = new Parse.Query(Items);
    query.equalTo("objectId", itemid);
    query.find({
		success: function(results) {
			var item = results[0];

			// Get
			var brand = item.get("brand");
			var title = item.get("itemTitle");
			var price = formatPrice(item.get("price"));
			var picture = item.get("picUrl");
			//var category = item.get("generalCategory");
			var url = item.get("url");
			var bid = item.get("bid");

			// Set
			document.getElementById('brandInput').value = brand;
			document.getElementById('titleInput').value = title;
			document.getElementById('priceInput').value = price;
			document.getElementById('picInput').value = picture;
			document.getElementById('urlInput').value = url;
			document.getElementById('bidInput').value = bid;
			
		},
		error: function(error) {

		}
	});
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

// Load items into table of manage.html
function loadItemsToTable()
{
	var current_user = window.name;
	var namesplit = window.name.split(" ");
	var nameid = namesplit[0];
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
   	var ItemsAuto = Parse.Object.extend("ItemsAuto");
	var matchQuery = new Parse.Query(ItemsAuto);
	matchQuery.descending('itemTitle');
	matchQuery.limit(DATA_SIZE)
	
  	matchQuery.find({
		success: function(results) {
			for(var i = 0; i < results.length; i++) {
				var table = document.getElementById('itemTable');
				var r = strcmp(results[i].get('user').id, nameid);
				if (r != 0){
					continue;
				}

				//Get
				var brand = results[i].get('brand');
				var title = results[i].get('itemTitle');
				var bid = "$" + formatPrice(results[i].get('bid'));
				var price = "$" + formatPrice(results[i].get('price'));

				//Set
				var row = table.insertRow(1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				cell1.innerHTML = brand;
				cell2.innerHTML = title;
				cell3.innerHTML = bid;
				cell4.innerHTML = price;

				cell5.innerHTML = '<input type="button" value="Edit Item" onClick="editClick(\'' + results[i].id.toString() + '\')" />';
			}
		},
		error: function(error) {

		}
	});
}

// function to edit an item, sets new window name accordingly with new objID as second parameter 
function editClick(obj)
{
	var namesplit = window.name.split(" ");
	var nameid = namesplit[0];
	window.name = nameid + " " + obj;
	window.location.href = "manageItem.html";
	return false;
}

// compares 2 strings, 0 if equal
function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}


// Save a new row entry; instance is the table, attributes are the column entries
function writeToTable(table, attributes, priR, priG, priB, secR, secG, secB, pc, sc)
{
    
    Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");
    var Class = Parse.Object.extend(table);
    var instance = new Class();

    var Items = Parse.Object.extend("ItemsAuto");
    var items = new Items();

    var User = Parse.Object.extend("User");
    var user = new User();
    user.id = window.name;

    var Category = Parse.Object.extend("Classifications");
    var cat = new Category();

    var General = Parse.Object.extend("GeneralCat");
    var gen = new General();

    var category = attributes.category;
    cat.id = category;

    if(category == "BYp2mF8T2u" || category == "p3I52RVE6H"  || category == "1MkXqio4LH" || category == "R1kInPVbTS"  || 
       category == "6PoE3ZrV3P"  || category == "v5SJb4ep2l"  || category == "KI6vQ8wZp3"  || category == "xuqtfHVlPv"  || 
       category == "Aux3w2SjxK"  || category == "bfLfH89w2W"  || category == "awjLsHOjcR"  || category == "O5SlG4YPoN"){
	gen.id = "rP2qeD4Bhz"
    }
    else if(category == "wQytK1Jmkp" || category == "zraUG46N0m" || category == "JCPAIGeUQv" || category == "jii4OY2kdD"){
	gen.id = "ysSUpUQcyY";
    }
    else if(category == "HNMT7kpQDB" || category == "789KhBdPpx"){
	gen.id = "wd8v7I0rGL";
    }
    else if(category == "4UegvZYVvb"){
	gen.id = "a2fXI5xpp7";
    }
    else if(category == "ZggvwNHArf" || category == "VwzzdNRzlt"){
	gen.id = "BdSF5NCCwO";
    }
    else if(category == "E9Kbsd7WeY"){
        gen.id = "PB0utGBtbS"
    }
    else if(category == "M7Fg9Ehso4"){
        gen.id = "K4gAqr6dJE";
    }
    else if(category == "aaB4BFSY05"){
        gen.id = "dEiALt9ec3";
    }
    else if(category == "9whubZU6Kh"){
        gen.id = "6hMYtgeaaK";
    }
    else if(category == "s1G8wJaWau"){
        gen.id = "NbDykXyrad";
    }
    else if(category == "l4MKUbS3vM" || category == "7DWGckRKov"){
        gen.id = "iiHAPCKx0Z";
    }
    else if(category == "t7dHuQTBVm"){
        gen.id = "FdztkIVM2S";
    }
    else if(category == "6loC16B00G"){
        gen.id = "8lV0L0IFBi";
    }

    var desc = attributes.description;
    var name = attributes.name;
    var price = parseFloat(attributes.price);
    var bid = parseFloat(attributes.bid)
    var pr = priR;
    var pg = priG;
    var pb = priB;
    var sr = secR;
    var sg = secG;
    var sb = secB;
    var male = attributes.mens;
    var ship = attributes.availShip;
    var store = attributes.availStore;
    var url = attributes.url;
    var pic = attributes.picUrl;
    var pri = pc;
    var sec = sc;
    var percentile = 0;
    //alert(attributes.category);

    items.save({user:user, brand: desc, itemTitle: name, price: price, bid: bid, mens: male, availShip: ship, availStore: store, url: url, picUrl: pic, primaryR: pr, primaryG: pg, primaryB: pb, secondaryR: sr, secondaryG: sg, secondaryB: sb, priColor: pri, secColor: sec, classification: cat, generalCategory: gen, percentile: percentile}, {
	success: function(object) {
	    $(".success").show();
	},
	error: function(model, error) {
	    $(".error").show();
	}
    });
}

function formatPrice(price)
{
	var formatted = new String(price);
	var priceArray = formatted.split(".");
	if (priceArray != null && priceArray.length > 1 && priceArray[1].length == 1) {
		formatted = formatted + '0';
	}
	return formatted;
}

function setComponent(results)
{
	document.getElementById('img1').src = results[0].get('picUrl');
	document.getElementById('img2').src = results[1].get('picUrl');
	document.getElementById('img3').src = results[2].get('picUrl');
	document.getElementById('company1').innerHTML = results[0].get('brand');
	document.getElementById('company2').innerHTML = results[1].get('brand');
	document.getElementById('company3').innerHTML = results[2].get('brand');
	document.getElementById('info1').innerHTML = results[0].get('itemTitle');
	document.getElementById('info2').innerHTML = results[1].get('itemTitle');
	document.getElementById('info3').innerHTML = results[2].get('itemTitle');
	document.getElementById('price1').innerHTML = '$' + formatPrice(results[0].get('price'));
	document.getElementById('price2').innerHTML = '$' + formatPrice(results[1].get('price'));
	document.getElementById('price3').innerHTML = '$' + formatPrice(results[2].get('price'));
	document.getElementById('url1').href = results[0].get('url');
	document.getElementById('url2').href = results[1].get('url');
	document.getElementById('url3').href = results[2].get('url');
}


function matchItems(currentItem)
{
	var ItemsAuto = Parse.Object.extend("ItemsAuto");
	var matchQuery = new Parse.Query(ItemsAuto);
	matchQuery.limit(1000);
	matchQuery.descending('bid');
	matchQuery.equalTo('mens', currentItem.get('mens'));
	var categories = getMatches(currentItem.get('generalCategory').id);
	var pointers = _.map(categories, function(item_id) {
		var pointer = new Parse.Object("GeneralCat");
		pointer.id = item_id;
		return pointer;
	});
	matchQuery.containedIn('generalCategory', pointers);

	matchQuery.find({
		success: function(results) {
		    // Find complementary items

		    var complement = Colors.complement(currentItem.get('primaryR'), currentItem.get('primaryG'),
				currentItem.get('primaryB'));
		    for(var i = 0; i < results.length; i++) {
				if (i + 1 < results.length) {
				    results[i].set('bid', results[i + 1].get('bid'));
				}
				var R = Math.abs(complement.R - results[i].get('primaryR'));
				var G = Math.abs(complement.G - results[i].get('primaryG'));
				var B = Math.abs(complement.B - results[i].get('primaryB'));
				var distance = MAX_DIST - Math.round(Math.sqrt(Math.pow(R, 2) + Math.pow(G, 2) + Math.pow(B, 2)));
				var percentile = MAX_PERC - Math.round(Math.abs(currentItem.get('percentile') - results[i].get('percentile')));
				var score = Math.round(1000*(DIST_WEIGHT*(distance/MAX_DIST) + PERC_WEIGHT*(percentile/MAX_PERC)
					+ BID_WEIGHT*(results[i].get('bid')/MAX_BID)));
				results[i].set('score', score);
		    }

		    results.sort(function(a, b) {
				var A = a.get('score');
				var B = b.get('score');
				if (A > B) return -1;
				if (A < B) return 1;
				return 0;
		    });

		    setComponent(results);
		},
		error: function(error) {
		    alert("ERROR");
		}
	});
}

function setCurrentItem(currentItem)
{
	document.getElementById('current_item_image').src = currentItem.get('picUrl');
	document.getElementById('current_company').innerHTML = currentItem.get('brand');
	document.getElementById('current_info').innerHTML = currentItem.get('itemTitle');
	document.getElementById('current_price').innerHTML = '$' + formatPrice(currentItem.get('price'));
	document.getElementById('current_url').href = currentItem.get('url');
}

function displayItem()
{
	console.log("Parse loaded.");
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");

	var ItemsAuto = Parse.Object.extend("ItemsAuto");
	var randomQuery = new Parse.Query(ItemsAuto);
	randomQuery.skip(Math.floor(Math.random()*DATA_SIZE));
	randomQuery.limit(1);

	randomQuery.find({
		success: function(currentItem) {
		    // Random element selection

		    setCurrentItem(currentItem[0]);
		    matchItems(currentItem[0]);
		},
		error: function(error) {
		    alert("ERROR");
		}
	});
}

function displayRecentItem()
{
	console.log("Parse loaded.");
	Parse.initialize("gAdEQQbgTQEoNmw81snMGY91IulLKmVMimWguSRq", "5GuEUHlU0BXBAQ3o6UCyzX3drAFESYFr7iR7lUnp");

	var ItemsAuto = Parse.Object.extend("ItemsAuto");
	var recentQuery = new Parse.Query(ItemsAuto);
	recentQuery.descending('createdAt');
	recentQuery.first();

	recentQuery.find({
		success: function(currentItem) {
		    // Random element selection

		    setCurrentItem(currentItem[0]);
		    matchItems(currentItem[0]);
		},
		error: function(error) {
		    alert("ERROR");
		}
	});
}
