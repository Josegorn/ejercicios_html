"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { iniciarPie }  from "/js/comun.js";

// 🔴Algunós valores
const SEPARADOR_PIE = DZ.SEPARADOR_PIE;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const TITULO = 			PAG_INDEX.atributos.descripcion;
	const NIVEL = 			PAG_INDEX.atributos.nivel;
	const TITULO_PAGINA = 	window.document.title;
	console.log(TITULO_PAGINA);
	// Píe
	let div_principal = document.getElementById("principal");
	iniciarPie({	nodo_padre: div_principal, 
					texto_nivel: NIVEL, 
					texto_titulo: TITULO, 
					texto_tilulo_pagina: TITULO_PAGINA, 
					separador: SEPARADOR_PIE
				});
})




