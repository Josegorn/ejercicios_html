"use strict";
export const iniciarPie = function ({nodo_padre, texto_nivel, texto_titulo, texto_tilulo_pagina, separador}) {
	let nodo_pie = document.createElement("footer");
	const objetos = [texto_nivel, separador, texto_titulo, separador, texto_tilulo_pagina];
	objetos.forEach(objeto => {
		const nodo_span = crearNodoTexto({nombre_nodo: "span", texto: objeto});
		nodo_pie.appendChild(nodo_span);
	})
	nodo_padre.appendChild(nodo_pie);
}
export const modificarTextoPorId = function({id , texto}) {
	let contenedor = document.getElementById(id);
	contenedor.innerHTML = texto;
}
export const crearNodoTexto = function ({nombre_nodo, texto, id = undefined}) {
	const nodo_texto = document.createElement(nombre_nodo);
	nodo_texto.innerHTML = texto;
	if(id !== undefined ) nodo_texto.id = id;
	return nodo_texto ;
}
export const modificarFavicon = function({archivo}) {
	const link = document.querySelector("head>link[rel='icon']");
	link.setAttribute("href", archivo);
}
// 🔴Insertar SVG
export const insertarSVG = function({id_contenedor, url_SVG}) {
	let contenedor = document.getElementById(id_contenedor);
	let parser = new DOMParser();
	fetch(url_SVG)
		.then(response => response.text())
		.then(texto => {
		let imagen = parser.parseFromString(texto, "text/xml");
		contenedor.appendChild(imagen.documentElement);
	})
}