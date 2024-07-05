"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { 	iniciarPie, 
			crearNodoTexto
		}  from "/js/comun.js";

// 🔴Algunós valores
const IDP = "portada";
const ID_CARTEL = "tcabecera_portada";
const SEPARADOR_PIE = DZ.SEPARADOR_PIE;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const TITULO = 			PAG_INDEX.atributos.descripcion;
	const NIVEL = 			PAG_INDEX.atributos.nivel;
	const TITULO_PAGINA = 	PAG_INDEX.menu_0.pag[IDP].titulo;
	// Cartel
	iniciarCartel({id_cartel: ID_CARTEL, texto_pretitulo: NIVEL, texto_titulo: TITULO});
	// Píe
	let div_principal = document.getElementById("principal_portada");
	iniciarPie({	nodo_padre: div_principal,
					texto_nivel: NIVEL,
					texto_titulo: TITULO,
					texto_tilulo_pagina: TITULO_PAGINA,
					separador: SEPARADOR_PIE
				});
})
const iniciarCartel = function ({id_cartel, texto_pretitulo, texto_titulo}) {
	const nodo_cartel = document.getElementById(id_cartel);
	const nodo_div = document.createElement("div");
	nodo_div.appendChild(crearNodoTexto({nombre_nodo: "h1", texto: texto_pretitulo}));
	nodo_div.appendChild(crearNodoTexto({nombre_nodo: "h1", texto: texto_titulo}));
	nodo_cartel.appendChild(nodo_div);
}

