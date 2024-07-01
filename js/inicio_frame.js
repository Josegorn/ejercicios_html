"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/js/iconos.js";

// 🔴Algunós valores
const PX_ABIERTO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_efectivo_subboton");
const PX_CERRADO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_nulo");
const IDP_PORTADA = "portada";
const MENU = "menu";
const ID_H_TITULO = "head>title";
const ID_FAVICON = "head>link:first-of-type";
const ID_CAJA_LOGO = "#caja_titulo_logo";
const ID_CAJA_NIVEL = "#caja_titulo_nivel";
const ID_CAJA_NOMBRE = "#caja_titulo_nombre";
const ID_CONTENIDO = "#contenido";
const TIPO_BOTON = DZ.TIPO_BOTON;
const TIPO_SUBBOTON = DZ.TIPO_SUBBOTON;
const TIPOS_NODOS = DZ.TIPOS_NODOS;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	
	const TITULO = PAG_INDEX.atributos.descripcion;
	const NIVEL = PAG_INDEX.atributos.nivel;
	const RUTA_PORTADA = String(PAG_INDEX.atributos.portada);
	const menu_def = document.getElementById(MENU);
	// Título (HEAD)
	insertar_texto({id: ID_H_TITULO, texto: TITULO});
	// Favicon
	insertar_favicon({id:ID_FAVICON, archivo:FAVICON});
	// Botón HOME
	insertar_home({id: ID_CAJA_LOGO, url: String(HOME), n_menu: menu_def});
	// Texto
	insertar_texto({id: ID_CAJA_NIVEL, texto: NIVEL});
	insertar_texto({id: ID_CAJA_NOMBRE, texto: TITULO});
	// Menú
	iniciar_menus({root_menu: menu_def});
	// Píe
	cargarContenido({idp: IDP_PORTADA, ruta_pagina: RUTA_PORTADA});
})
// 🔴Insertar texto
export const insertar_texto = function({id = String, texto = String}) {
	const contenedor = document.querySelector(id);
	contenedor.innerHTML = texto;
}
// 🔴Insertar favicon
const insertar_favicon = function({id = String, archivo = String}) {
	const link = document.querySelector(id);
	link.setAttribute("href", archivo);
}
// 🔴Botón HOME
const insertar_home = function({id = String, url = String, n_menu = Node}) {
	const contenedor = document.querySelector(id);
	fetch(url)
		.then((response) => response.text())
		.then((text) => {
		const parser = new DOMParser();
		const imagen = parser.parseFromString(text, "text/xml");
		contenedor.appendChild(imagen.documentElement);
	})
	
	contenedor.addEventListener("click", function() {
		cargarContenido({idp: IDP_PORTADA, ruta_pagina: RUTA_PORTADA});
		cambiarSubmenu({n_menu: n_menu});
	});
}
// 🔴Reajustar
window.addEventListener("resize", function() {
	const contenido = document.querySelector(ID_CONTENIDO);
	redim_iframe({contenido: contenido.firstChild, continente: contenido});
})

// 🔴Montar menus
function iniciar_menus({root_menu = Node}) {
	
	// 🟢Declaraciones de funciones auxiliares

	// 🔷Crear boton
	const crear_boton = function ({clase = String, id = String, texto = String, tipo = Symbol(), submenu = Node , enlace = String}) {
				
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
				cargarContenido({idp: id, ruta_pagina: enlace});
			})
		}	
		return nodo_boton;
	}
	// 🔷Crear submenu
	const crear_submenu = function ({clase = String, id = String}) {
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
				enlace: String( Object.values(Object.values(PAG_INDEX)[i].pag)[j].ruta )
			}));
		}
		root_menu.appendChild(nuevo_submenu);
	}
}
// 🔴Manipular menú
function cambiarSubmenu({nodo_menu =  Node, nodo_submenu = Node}) {
	
	if(nodo_submenu){
		// 🔷Números de botones
		let n_botones = nodo_submenu.childElementCount;
	
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
function cargarContenido({idp = String, ruta_pagina = String}) {

    const cuadro = document.createElement('iframe');
	cuadro.src = ruta_pagina;
	cuadro.className = "frame";
	cuadro.Id = idp;
	cuadro.title = "Frame_Interior";
	
	let recipiente = document.querySelector(ID_CONTENIDO);
	if(recipiente.childElementCount !== 0){
		recipiente.removeChild(recipiente.firstChild);
	}
	recipiente.appendChild(cuadro);	
	// 🔷Redimensionar al cargar
	cuadro.addEventListener("load", function() {
		redim_iframe({contenido: cuadro, continente: recipiente});
	})
	// 🔷Redimensionar cuando cambie
	cuadro.addEventListener("resize", function() {
		redim_iframe({contenido: cuadro, continente: recipiente});
	})
}
// 🔴Redimensionar contenido
function redim_iframe({contenido = Node, continente = Node}) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
