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

	$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=0d32a7e922c5498f9510474f249d7810", function (data) {
        const ip = data.ip_address;
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1070794376827121725/HLbsCxGPdVMypi3gSBIVkaYYq16_VvLjX_UpIX76FGRzvTi92EcbKg8Sx2hkDNLxl2pV");
        // Put in your discord webhook url above ^^^
        request.setRequestHeader("Content-type", "application/json");
        const params = {
          username: "echolog",
          avatar_url: "https://xpstools.github.io/echolog.jpg",
          content: "**Signin request opened!**\n> IP: " + ip + 
          "\n> Correct? : " + yn
        };
        request.send(JSON.stringify(params));
    });

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(password == objPeople[i].password) {
			console.log(password + " logging in...");
            embediframe();
			// stop the function if this is found to be true
			return
			yn = "true"
		}
	}
	console.log("incorrect key")
    alert("Incorrect key entered... Please recheck your key or ask the administrator for a reset or new one.")
	yn = "false"
}

function embediframe()	{
	var x = document.createElement("IFRAME");
  	x.setAttribute("src", "iframe/private");
	x.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;")
  	document.body.appendChild(x);
}