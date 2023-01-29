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
}