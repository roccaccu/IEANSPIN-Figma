var link = document.querySelector("link[rel=import]");
var content = link.import;
var linkDoc = content.querySelector(".header");
document.body.appendChild(content.cloneNode(true));
