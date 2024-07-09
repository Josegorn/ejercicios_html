"use strict";
// 🔴 Inicialización
import * as DZ from "@json/diccionario.json";
import { PAG_INDEX } from "@json/esquema.json";
import { iniciarPie }  from "@js/comun.js";

// 🔴Algunós valores

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	document.title = PAG_INDEX.tituloPag(0,0);
	// Píe
	let div_principal = document.getElementById(DZ.ID_DIV);
	
	iniciarPie({	nodo_padre: div_principal, 
					texto_nivel: PAG_INDEX.nivel, 
					texto_titulo: PAG_INDEX.tituloDocumento, 
					texto_tilulo_pagina: PAG_INDEX.tituloPag(0,0), 
					separador: DZ.SEPARADOR_PIE
				});
})




