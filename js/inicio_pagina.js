"use strict";
// 🔴 Inicialización
// import * as DZ from "/js/diccionario.js";
// import { PAG_INDEX } from "/contenido/def/esquema.js";

// 🔴Algunós valores
export const iniciarPiePorId = function ({id_pie, texto_nivel, texto_titulo, texto_tilulo_pagina, separador}) {
	const nodo_pie = document.getElementById(id_pie);
	nodo_pie.appendChild(crearNodoTexto({nombre_nodo: "span", texto: texto_nivel}));
	nodo_pie.appendChild(crearNodoTexto({nombre_nodo: "span", texto: separador}));
	nodo_pie.appendChild(crearNodoTexto({nombre_nodo: "span", texto: texto_titulo}));
	nodo_pie.appendChild(crearNodoTexto({nombre_nodo: "span", texto: separador}));
	nodo_pie.appendChild(crearNodoTexto({nombre_nodo: "span", texto: texto_tilulo_pagina}));
}
// 🔴Insertar texto
export const modificarTituloDocumento = function({texto}) {
	const nodo_titulo = document.querySelector("head>title");
	nodo_titulo.innerHTML = texto;
}
export const modificarTextoPorId = function({id , texto}) {
	const contenedor = document.getElementById(id);
	contenedor.innerHTML = texto;
}
export const crearNodoTexto = function ({nombre_nodo, texto, id}) {
	const nodo_texto = document.createElement(nombre_nodo);
	nodo_texto.innerHTML = texto;
	if (id) nodo_texto.id = id;
	return nodo_texto;
}
/*export const iniciarContenido = function ({id_seccion, archivo_xml}) {
	
	const sec = document.getElementById(id_seccion);
	const parser = new DOMParser();
	var contenido_xml = new Document(); 	
	fetch(archivo_xml) 
		.then(response => response.text())
		.then(text => {
		const doc_xml = parser.parseFromString(text, "text/html");
		contenido_xml.appendChild(doc_xml.documentElement);
	}) 
	//if (contenido_xml.querySelector("titulo").innerHTML != "") {
		// Titulo pagina	
	//}
	const nodo_seccion = contenido_xml.querySelectorByTagName("seccion");

	console.log(nodo_seccion);
	
	/*children.forEach(articulo => {
		switch(articulo.tagName) {
			case "ilustracion" : {
				const nodo = document.createElement("figure");
				const nodo_imagen = document.createElement("img");
				nodo_imagen.src = articulo.firstChild.innerText;
				nodo_imagen.alt = articulo.firstChild.getAttribute("alt");
				nodo.appendChild(nodo_imagen);
				const nodo_figcaption = document.createElement("figcaption");
				nodo_figcaption.innerHTML = articulo.lastChild.innerText;
				nodo.appendChild(nodo_figcaption);
				sec.appendChild(nodo);
				break;
			}


		}
	})
	
	//	sec.innerHTML = a;	
	//	if (articulo.tagName == "bloque_texto") {
	//		sec.innerHTML = "CULO";
	//		return;
	//	}
	//})	



	

}*/



