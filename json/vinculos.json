const ENLACES = Object.freeze({
	html_wiki:  { nombre: "HTML en Wikipedia", url: encodeURI("https://es.wikipedia.org/wiki/HTML")},
})

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll("button.boton_enlace").forEach(nodo_b => {
		const etiqueta = nodo_b.id;
		montar_boton(etiqueta, ENLACES[etiqueta]["nombre"], ENLACES[etiqueta]["url"]);
	});
});

const montar_boton = function(etiq, nombre, direccion) {
	let nodo = document.getElementById(etiq);
	nodo.href = direccion;
	nodo.target = "_black";
	nodo.rel = "noopener";
	nodo.addEventListener("click", function() {
		window.open(direccion, nombre, "popup");
	})
	nodo.innerHTML = nombre;
};