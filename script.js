function Generate()
{
    var url = "https://chart.googleapis.com/chart?cht=qr&"
    var text = document.getElementById("text").value;
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    url = url + "chl=" + text + "&chs="+ width + "x" + height;
    document.getElementById("qr").src = url;

}