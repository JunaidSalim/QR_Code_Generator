function Generate() {
    var url = "https://chart.googleapis.com/chart?cht=qr&"
    var text = document.getElementById("text").value;
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    url = url + "chl=" + text + "&chs=" + width + "x" + height + "&chf=bg,s,00000000";
    document.getElementById("qr").src = url;
    var qrcode = document.getElementById("qr");
    qrcode.style.padding = "3px";
    qrcode.style.border = "3px solid yellow";
}

