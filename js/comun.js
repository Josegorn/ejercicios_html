const url_wiki = {nombre: "HTML Wikipedia", url: URL("https://es.wikipedia.org/wiki/HTML")};

document.addEventListener("DOMContentLoaded", function() {
	let boton = document.getElementById("link_wiki");
	boton.className = "boton_enlace"
	boton.href = url_wiki.get("url");
	boton.target = "_black";
	boton.rel = "noopener";
	boton.addEventListener("click", function() {
		window.open(url_wiki.get("url"), url_wiki.get("name"), "popup");
	});
	boton.innerHTML = url_wiki.get("name");
});