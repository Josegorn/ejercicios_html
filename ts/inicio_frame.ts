"use strict";
// 🔴 Inicialización
import * as DZ from "../json/diccionario.json";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/js/iconos.js";
import {	modificarTextoPorId,
			modificarFavicon,
			insertarSVG
} from "/js/comun.js";


Object.entries(DZ).forEach(([key, value]) => {(globalThis as any)[key] = value as string});


// 🔴Algunós valores
const PX_ABIERTO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_efectivo_subboton");
const PX_CERRADO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_nulo");


// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	// Título (HEAD)
	document.title = PAG_INDEX.titulo;
	// Favicon
	modificarFavicon({archivo: FAVICON});
	// Botón HOME
	insertarSVG({id_contenedor: DZ.ID_CAJA_LOGO, url_SVG: HOME});
	insertarLinkHome({	id_contenedor: DZ.ID_CAJA_LOGO,
						id_portada: DZ.IDP_PORTADA,
						ruta_portada: PAG_INDEX.rutaPortada,
						id_menu: DZ.MENU,
						id_contenedor_pagina: DZ.ID_CONTENIDO,
						id_iframe: DZ.ID_IFRAME
					});
	// Título
	modificarTextoPorId({id: DZ.ID_CAJA_NIVEL, texto: PAG_INDEX.nivel});
	modificarTextoPorId({id: DZ.ID_CAJA_NOMBRE, texto: PAG_INDEX.tituloDocumento});
	// Menú
	iniciarMenu({id_menu: DZ.MENU, id_contenedor: DZ.ID_CONTENIDO, id_iframe: DZ.ID_IFRAME});
	// Contenido
	cargarContenido({id_contenedor: DZ.ID_CONTENIDO, id_pagina: DZ.IDP_PORTADA, ruta_pagina: PAG_INDEX.rutaPortada, id_iframe: DZ.ID_IFRAME});
	// Redimensionar
	const contenedor = document.getElementById(DZ.ID_CONTENIDO);
	redimesionar_iframe({contenido: contenedor.firstChild, continente: contenedor});

})
window.addEventListener("resize", function({id_contenedor = DZ.ID_CONTENIDO}) {
	const contenido = document.getElementById(id_contenedor);
	redimesionar_iframe({contenido: contenido.firstChild, continente: contenido});
})
// 🔴Botón HOME
const insertarLinkHome = function({ id_contenedor = String(),
									id_portada = String(),
									ruta_portada = String(),
									id_menu = String(),
									id_contenedor_pagina = String(),
									id_iframe = String()
								}) {
	const contenedor = document.getElementById(id_contenedor);
	const n_menu = document.getElementById(id_menu);
	contenedor.addEventListener("click", function() {
		cargarContenido({id_contenedor: id_contenedor_pagina,  id_pagina: id_portada, ruta_pagina: ruta_portada, id_iframe: id_iframe});
		cambiarSubmenu({nodo_menu: n_menu});
	});
}
// 🔴Montar menus
const iniciarMenu = function({	id_menu =  String(),
								id_contenedor = String(), 
								id_iframe = String()
							}) {
	
	// 🟢Obtener nodo raiz
	const root_menu = document.getElementById(id_menu);
	
	// 🟢Declaraciones de funciones auxiliares
	// 🔷Crear boton
	const crear_boton = function ({ clase = String(),
									id = String(),
									texto = String(),
									tipo = DZ.TIPOS_NODOS.includes(tipo) ? tipo = Symbol() : undefined,
									submenu =  undefined, 
									id_pagina =  undefined, 
									enlace = undefined
								}) {
				
		if(!DZ.TIPOS_NODOS.includes(tipo)){
			throw new SyntaxError("Error: Submenú no definido");
		}
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = id;
		nodo_boton.innerHTML = texto;
		nodo_boton.type = "button";
		
		if(tipo === DZ.TIPO_BOTON){
			nodo_boton.addEventListener( "click", function(){	
				cambiarSubmenu({nodo_menu: root_menu, nodo_submenu: submenu});
			})
		}
		if(tipo === DZ.TIPO_SUBBOTON){
			nodo_boton.addEventListener("click", function(){
				cargarContenido({id_contenedor: id_contenedor, id_pagina: id_pagina, ruta_pagina: enlace, id_iframe: id_iframe});
			})
		}	
		return nodo_boton;
	}
	// 🔷Crear submenu
	const crear_submenu = function ({clase, id}) {
		let nodo_submenu = document.createElement("div");
		nodo_submenu.className = clase;
		nodo_submenu.id = id;
		nodo_submenu.style.height = PX_CERRADO;
		return nodo_submenu;
	} 	
	// 🟢Menú
	for(let i = 0; i < PAG_INDEX.numUD; i++){
		const nuevo_submenu = crear_submenu({clase: "submenu", id: "submenu"+toString(i)});
		root_menu.appendChild(crear_boton({
			clase: "boton-menu", 
			id: "boton"+toString(i),
			texto: PAG_INDEX.UD(i).titulo, 
			tipo: DZ.TIPO_BOTON, 
			submenu: nuevo_submenu
		}));								 
		for(let j = 0; j < PAG_INDEX.numPag(i)  ; j++){
			nuevo_submenu.appendChild(crear_boton({
				clase: "boton-submenu",
				id: "subboton"+toString(i)+"_"+toString(j), 
				texto: PAG_INDEX.tituloPag(i, j), 
				tipo: DZ.TIPO_SUBBOTON, 
				id_pagina: PAG_INDEX.idPag(i, j),
				enlace: PAG_INDEX.ruta + PAG_INDEX.archivoPag(i, j)
			}));
		}
		root_menu.appendChild(nuevo_submenu);
	}
}
// 🔴Manipular menú
const cambiarSubmenu = function ({	nodo_menu = HTMLElement,
									nodo_submenu = undefined
								}) {
	
	// 🔷Abrir/Cerrar submenú
	if(nodo_submenu !== undefined){
		// 🔷Números de botones
		const n_botones = nodo_submenu.childElementCount;
	
		// 🔷Manipular submenú
		if (nodo_submenu.style.height === PX_CERRADO) {
			nodo_submenu.style.height = (parseInt(PX_ABIERTO,10) * n_botones)+"px";
		} else {
			nodo_submenu.style.height = PX_CERRADO;
		}
	}
	// 🔷Cerrar todos los demas
	nodo_menu.querySelectorAll(".submenu").forEach(sub => {
		if(sub !== nodo_submenu) sub.style.height = PX_CERRADO;
	});
}
// 🔴Cargar subpágina
const cargarContenido = function ({	id_contenedor = String(), 
									id_pagina = String(), 
									ruta_pagina = String(), 
									id_iframe = String()
								}) {

    const cuadro = document.createElement('iframe');
	cuadro.src = ruta_pagina;
	cuadro.name = id_pagina;
	let ud  = Object.keys(PAG_INDEX).find(({index: ud}) => { ud = [1,...PAG_INDEX.numUD], Object.keys(Object.keys(PAG_INDEX)[ud].pag).includes(id_pagina) ? ud : undefined ;}); 
	cuadro.title = PAG_INDEX[ud].pag[id_pagina].titulo;
	cuadro.id = id_iframe;
	
	const recipiente = document.getElementById(id_contenedor);
	if(recipiente.childElementCount !== 0){
		recipiente.removeChild(recipiente.firstChild);
	}
	recipiente.appendChild(cuadro);	
	// 🔷Redimensionar al cargar
	cuadro.addEventListener("load", function() {
		redimesionar_iframe({contenido: cuadro, continente: recipiente});
	})
	// 🔷Redimensionar cuando cambie
	cuadro.addEventListener("resize", function() {
		redimesionar_iframe({contenido: cuadro, continente: recipiente});
	})
	redimesionar_iframe({contenido: cuadro, continente: recipiente});
}
// 🔴Redimensionar contenido
function redimesionar_iframe({contenido = HTMLIFrameElement, continente = HTMLDivElement}) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
