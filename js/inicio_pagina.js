"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { insertar_texto } from "./inicio_frame";

// 🔴Algunós valores
export const iniciarPiePorId = function ({id_pie, texto_nivel, texto_titulo, texto_tilulo_pagina, separador}) {
	nodo_pie = document.getElementById(id_pie);
	nodo_pie.appendChild(crear_nodo_texto({nombre_nodo: "scan", texto: texto_nivel}));
	nodo_pie.appendChild(crear_nodo_texto({nombre_nodo: "scan", texto: separador}));
	nodo_pie.appendChild(crear_nodo_texto({nombre_nodo: "scan", texto: texto_titulo}));
	nodo_pie.appendChild(crear_nodo_texto({nombre_nodo: "scan", texto: separador}));
	nodo_pie.appendChild(crear_nodo_texto({nombre_nodo: "scan", texto: texto_tilulo_pagina}));
}
// 🔴Insertar texto
export const modificarTituloDocumento = function({texto}) {
	let nodo_titulo = document.querySelector("head>title");
	nodo_titulo.innerHTML = texto;
}
export const modificarTextoPorId = function({id , texto}) {
	let contenedor = document.getElementById(id);
	contenedor.innerHTML = texto;
}
export const crearNodoTexto = function ({nombre_nodo, texto, id}) {
	let nodo_texto = document.createElement(nombre_nodo);
	nodo_texto.innerHTML = texto;
	if (id) nodo_texto.id = id;
	return nodo_texto;
}
export const iniciarContenido = function ({seccion, archivo_xml}) {
	let sec = document.getElementById(ID_CUERPO);
	let doc_xml = new XMLDocument(archivo_xml);
	
	doc_xml.getRootNode().forEach((articulo) => {
		switch(articulo.tagName) {
			case document.doctype.childNodes.item("BLOQUE_TEXTO").nodeValue : {
				sec.appendChild(document.createElement("article"));
				break;
			}

		}
		
	}) ;
}

