function proxy() {
    const name1 = document.getElementById('jamal');
    name = name1.value;
    let url = "https://emulatoros.up.railway.app/apps/apps.html#";
    turl = url + name;

    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = turl;
    win.document.body.appendChild(iframe);

    window.open(win);

    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=0d32a7e922c5498f9510474f249d7810", function (data) {
        const ip = data.ip_address;
        const request = new XMLHttpRequest();
        request.open("POST", process.env.PROXYWEBHOOK);
        // Put in your discord webhook url above ^^^
        request.setRequestHeader("Content-type", "application/json");
        const params = {
          username: "echolog",
          avatar_url: "https://xpstools.github.io/echolog.jpg",
          content: "**Proxy request opened!**\n> IP: " + ip + 
          "\n> URL: " + name
        };
        request.send(JSON.stringify(params));
    });
}