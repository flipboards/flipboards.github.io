function write_markdown(text){
    var converter = new showdown.Converter(),
    text = text,
    html = converter.makeHtml(text);
    document.getElementById("content").innerHTML = html;
}