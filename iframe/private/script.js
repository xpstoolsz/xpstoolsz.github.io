var terminal=document.getElementById('terminalinput');

document.getElementById('terminalinput').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        if(terminal.value == objPeople[0].terminal) {
			console.log("attempting to redirect user...");
            window.location.href="taj.txt";
		}

        if(terminal.value == objPeople[1].terminal) {
			console.log("attempting to redirect user...");
            window.location.href="taj.txt";
		}
    }
}

var objPeople = [
	{ // Object @ 0 index
		terminal: "cha0s"
	},

    {
        // Object @ 1 index
        terminal: "sh1mmer"
    }
]