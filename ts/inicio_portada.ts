"use strict";
// 🔴 Inicialización
import * as DZ from "@js/diccionario.js";
import { PAG_INDEX } from "@json/esquema.json";
import { 	iniciarPie, 
			crearNodoTexto
		}  from "@src/comun.js";
// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	document.title = PAG_INDEX.tituloPag(0,0);
	// Cartel
	iniciarCartel({id_cartel: DZ.ID_CARTEL, texto_pretitulo: PAG_INDEX.nivel, texto_titulo: PAG_INDEX.tituloDocumento});
	// Píe
	const div_principal = document.getElementById(DZ.ID_DIV_PORTADA);
	iniciarPie({	nodo_padre: div_principal,
					texto_nivel: PAG_INDEX.nivel,
					texto_titulo: PAG_INDEX.tituloDocumento,
					texto_tilulo_pagina: PAG_INDEX.tituloPag(0,0),
					separador: DZ.SEPARADOR_PIE
				});
})
const iniciarCartel = function ({id_cartel, texto_pretitulo, texto_titulo}) {
	const nodo_cartel = document.getElementById(id_cartel);
	const nodo_div = document.createElement("div");
	nodo_div.appendChild(crearNodoTexto({nombre_nodo: "h1", texto: texto_pretitulo}));
	nodo_div.appendChild(crearNodoTexto({nombre_nodo: "h1", texto: texto_titulo}));
	nodo_cartel.appendChild(nodo_div);
}

