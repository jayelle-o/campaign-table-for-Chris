
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.
  loadData();
});

function loadData() {
	$.getJSON("js/donations_over_5K.json", function(data){
		//console.log(data);
		writeTable(data);
	});

}

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable(); 
	// note: writeTable is just the name I give a command
	// the for functionalizes the writeTable to go through every line of my json file.
function writeTable(data) {

	for (i=0; i<data.length; i++) {
		var date = data[i]["Contribution Date"];
		var info = data[i]["Contribution Information"];
		var amount = data[i]["Amount"];
		var committee = data[i]["Committee"];
		

			if (committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {

				//console.log(date, info, amount, committee);

				$(".chart").append(
					'<tr>+<td>'+date+'</td>+<td class="info">'+info+'</td>+<td class="amount">'+amount+'</td>+</tr>'
				);
			}
	}	
}	 



// 	// 3.
// 	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
// 	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
// 	// Each row should contain of three columns (<td></td>): 
// 	// - Contribution Date
// 	// - Contributon Information
// 	// - Amount
// }

