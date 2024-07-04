"use strict";
// 🔴 Inicialización
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { 	modificarTituloDocumento,
			iniciarPiePorId, 
			crear_nodo_texto,
			iniciarContenido 
		}  from "./inicio_pagina.js";

// 🔴Algunós valores
const IDP = "portada";
const ID_CARTEL = "tcabecera_portada";
const ID_CUERPO = "cuerpo_portada";
const ID_PIE = "pie_pagina";
const SEPARADOR_PIE = " - ";

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const RUTA_XML = PAG_INDEX.atributos.ruta+PAG_INDEX.menu_0.pag[IDP].archivo;
	const TITULO_PAGINA = PAG_INDEX.menu_0.pag[IDP].titulo;
	const TITULO = PAG_INDEX.atributos.descripcion;
	const NIVEL = PAG_INDEX.atributos.nivel;
	// Título (Head)
	modificarTituloDocumento({texto: TITULO_PAGINA});
    // Cartel
	insertar_texto({id: ID_PRETITULO,texto: NIVEL});
	insertar_texto({id: ID_TITULO, texto: TITULO});
	iniciarCartel({id_cartel: ID_CARTEL, texto_pretitulo: NIVEL, texto_titulo: TITULO});
	// Cuerpo
	iniciarContenido({seccion: ID_CUERPO, archivo_xml: RUTA_XML});
	// Píe
	iniciarPiePorId({id_pie: ID_PIE, texto_nivel: NIVEL, texto_titulo: TITULO, texto_tilulo_pagina: TITULO_PAGINA, separador: SEPARADOR_PIE});
})
const iniciarCartel = function ({id_cartel, texto_pretitulo, texto_titulo}) {
	const nodo_cartel = document.getElementById(id_cartel);
	const nodo_div = document.createElement("div");
	nodo_div.appendChild(crear_nodo_texto({nombre_nodo: "h1", texto: texto_pretitulo}));
	nodo_div.appendChild(crear_nodo_texto({nombre_nodo: "h1", texto: texto_titulo}));
	nodo_cartel.appendChild(nodo_div);
}

