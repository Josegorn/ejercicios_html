"use strict";
export const iniciarPie = function (  	nodo_padre = HTMLDivElement, 
										texto_nivel = String(), 
										texto_titulo = String(), 
										texto_tilulo_pagina = String(), 
										Optional : {
											separador = String() || " - "
										}) {
	const nodo_pie = document.createElement("footer");
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
export const insertarSVG = async function({id_contenedor, url_SVG})  {
	const contenedor = document.getElementById(id_contenedor);
	const promesa = await fetch(url_SVG);
	contenedor.innerHTML = await promesa.text();
}	

