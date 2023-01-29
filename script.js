/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects

var objPeople = [
	{ // Object @ 0 index
		password: "itz_taj:Bluemoon23"
	},

	{
		// Object @ 1 index
		password: "Kings123"
	}
]

function getInfo() {
	var password = document.getElementById('key').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(password == objPeople[i].password) {
			console.log(password + " logging in...");
            embediframe();
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect key")
    alert("Incorrect key entered... Please recheck your key or ask the administrator for a reset or new one.")
}

function embediframe()	{
	var x = document.createElement("IFRAME");
  	x.setAttribute("src", "iframe/private");
	x.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;")
  	document.body.appendChild(x);
}