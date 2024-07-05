"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/js/iconos.js";
import {	modificarTextoPorId,
			modificarFavicon,
			insertarSVG,

} from "/js/comun.js";

// 🔴Algunós valores
const IDP_PORTADA = "portada";
const MENU = "menu";
const ID_IFRAME = "frame_pagina";
const ID_CAJA_LOGO = "caja_titulo_logo";
const ID_CAJA_NIVEL = "caja_titulo_nivel";
const ID_CAJA_NOMBRE = "caja_titulo_nombre";
const ID_CONTENIDO = "contenido";
const TIPO_BOTON = DZ.TIPO_BOTON;
const TIPO_SUBBOTON = DZ.TIPO_SUBBOTON;
const TIPOS_NODOS = DZ.TIPOS_NODOS;
const PX_ABIERTO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_efectivo_subboton");
const PX_CERRADO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_nulo");

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const TITULO = PAG_INDEX.atributos.descripcion;
	const NIVEL = PAG_INDEX.atributos.nivel;
	const RUTA_PORTADA = PAG_INDEX.atributos.portada;
	// Título (HEAD)
	document.title = TITULO;
	// Favicon
	modificarFavicon({archivo: FAVICON});
	// Botón HOME
	insertarSVG({id_contenedor: ID_CAJA_LOGO, url_SVG: HOME});
	insertarLinkHome({id_contenedor: ID_CAJA_LOGO, id_portada: IDP_PORTADA, ruta_portada: RUTA_PORTADA, id_menu: MENU});
	// Título
	modificarTextoPorId({id: ID_CAJA_NIVEL, texto: NIVEL});
	modificarTextoPorId({id: ID_CAJA_NOMBRE, texto: TITULO});
	// Menú
	iniciarMenu({id_menu: MENU, id_iframe: ID_IFRAME});
	// Píe
	cargarContenido({id: IDP_PORTADA, ruta_pagina: RUTA_PORTADA, id_iframe: ID_IFRAME});
})
window.addEventListener("resize", function({id_contenedor = ID_CONTENIDO}) {
	const contenido = document.getElementById(id_contenedor);
	redimesionar_iframe({contenido: contenido.firstChild, continente: contenido});
})
// 🔴Botón HOME
const insertarLinkHome = function({id_contenedor, id_portada, ruta_portada, id_menu, id_iframe}) {
	const contenedor = document.getElementById(id_contenedor);
	const n_menu = document.getElementById(id_menu);
	contenedor.addEventListener("click", function() {
		cargarContenido({id_pagina: id_portada, ruta_pagina: ruta_portada, id_iframe: id_iframe});
		cambiarSubmenu({nodo_menu: n_menu});
	});
}
// 🔴Montar menus
const iniciarMenu = function({id_menu, id_iframe}) {
	
	// 🟢Obtener nodo raiz
	const root_menu = document.getElementById(id_menu);
	
	// 🟢Declaraciones de funciones auxiliares
	// 🔷Crear boton
	const crear_boton = function ({clase, id, texto, tipo, submenu, enlace}) {
				
		if(!TIPOS_NODOS.includes(tipo)){
			throw new SyntaxError("Error: Submenú no definido");
		}
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = id;
		nodo_boton.innerHTML = texto;
		nodo_boton.type = "button";
		
		if(tipo === TIPO_BOTON){
			nodo_boton.addEventListener( "click", function(){	
				cambiarSubmenu({nodo_menu: root_menu, nodo_submenu: submenu});
			})
		}
		if(tipo === TIPO_SUBBOTON){
			nodo_boton.addEventListener("click", function(){
				cargarContenido({id_pagina: id, ruta_pagina: enlace, id_iframe: id_iframe});
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
	for(let i = 1; i < Object.values(PAG_INDEX).length; i++){
		let n= i - 1;
		const nuevo_submenu = crear_submenu({clase: "submenu", id: "submenu"+toString(n)});
		root_menu.appendChild(crear_boton({
			clase: "boton-menu", 
			id: "boton"+n, texto: Object.values(PAG_INDEX)[i].titulo, 
			tipo: TIPO_BOTON, 
			submenu: nuevo_submenu
		}));								 
		for(let j = 0; j < Object.values(Object.values(PAG_INDEX)[i].pag).length ; j++){
			nuevo_submenu.appendChild(crear_boton({
				clase: "boton-submenu",
				id: "subboton"+n+"_"+j, 
				texto: Object.values(Object.values(PAG_INDEX)[i].pag)[j].titulo, 
				tipo: TIPO_SUBBOTON, 
				enlace: PAG_INDEX.atributos.ruta + Object.values(Object.values(PAG_INDEX)[i].pag)[j].archivo 
			}));
		}
		root_menu.appendChild(nuevo_submenu);
	}
}
// 🔴Manipular menú
const cambiarSubmenu = function ({nodo_menu, nodo_submenu = undefined}) {
	
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
const cargarContenido = function ({id_pagina, ruta_pagina, id_iframe}) {

    const cuadro = document.createElement('iframe');
	cuadro.src = ruta_pagina;
	cuadro.name = id_pagina;
	cuadro.title = id_pagina;
	cuadro.Id = id_iframe;
	
	const recipiente = document.getElementById(ID_CONTENIDO);
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
function redimesionar_iframe({contenido, continente}) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
