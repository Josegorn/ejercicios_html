"use strict";
// 🔴 Inicialización
import { PAG_INDEX } from "./contenido/def/esquema.js";
import { insertar_texto } from "./inicio_frame.js";

// 🔴Algunós valores
const IDP = "portada";
const ID_H_TITULO = "head>title";
const ID_PRETITULO = "#tcabecera_portada>div:nth-child(0)";
const ID_TITULO = "#tcabecera_portada>div:nth-child(1)";
const ID_CUERPO = "#cuerpo_portada";
const ID_PIE = "#epitafio";
const RUTA_HTML = "/contenido/index.html";

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const RUTA_XML = PAG_INDEX[IDP].ruta+PAG_INDEX[IDP].archivo;
	const TITULO_PAGINA = PAG_INDEX[IDP].titulo;
	const TITULO = PAG_INDEX.descripcion;
	const NIVEL = PAG_INDEX.nivel;
	// Título (Head)
	insertar_texto(ID_H_TITULO, TITULO_PAGINA);
    // Cartel
	insertar_texto(ID_PRETITULO, NIVEL);
	insertar_texto(ID_TITULO, TITULO);
	// Cuerpo
	iniciar_contenido({seccion: ID_CUERPO, plantilla: RUTA_HTML, archivo_xml: RUTA_XML});
	// Píe
	iniciar_pie({texto_pretitulo: NIVEL, texto_cuerpo: TITULO, texto_pie: TITULO_PAGINA, id_pie: ID_PIE});
})
const iniciar_contenido = function ({seccion, plantilla, archivo_xml}) {
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