"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { insertar_texto } from "./inicio_frame";

// 🔴Algunós valores
const TITULO = PAG_INDEX.atributos.descripcion;
const NIVEL = PAG_INDEX.atributos.nivel;
const TITULO_PAGINA = Object.values(PAG_INDEX)[0].pag[0].titulo;
const ID_H_TITULO = "head>title";
const ID_PRETITULO = "#pre_titulo_portada";
const ID_TITULO = "#texto_cabecera_portada>h1";
const ID_CUERPO = "#texto_cabecera_portada>h2";
const ID_PIE = "#epitafio";

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	// Título (Head)
	insertar_texto(ID_H_TITULO, TITULO_PAGINA);
    // Cartel
	insertar_texto(ID_PRETITULO, NIVEL);
	insertar_texto(ID_TITULO, TITULO);
	// Cuerpo
	iniciar_contenido({seccion: ID_CUERPO});
	// Píe
	iniciar_pie({texto_pretitulo: NIVEL, texto_cuerpo: TITULO, texto_pie: TITULO_PAGINA, id_pie: ID_PIE});
})
