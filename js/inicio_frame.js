"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/js/iconos.js";
import { 	modificarTextoPorId,
			modificarTituloDocumento
 } from "/js/inicio_pagina.js";

// 🔴Algunós valores
const IDP_PORTADA = "portada";
const MENU = "menu";
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
	modificarTituloDocumento({texto: TITULO});
	// Favicon
	modificarFavicon({archivo: FAVICON});
	// Botón HOME
	insertarSVG({id_contenedor: ID_CAJA_LOGO, url_SVG: HOME});
	insertarLinkHome({id_contenedor: ID_CAJA_LOGO, ruta_portada: RUTA_PORTADA, id_menu: MENU});
	// Título
	modificarTextoPorId({id: ID_CAJA_NIVEL, texto: NIVEL});
	modificarTextoPorId({id: ID_CAJA_NOMBRE, texto: TITULO});
	// Menú
	iniciarMenu({id_menu: MENU});
	// Píe
	cargarContenido({id: IDP_PORTADA, ruta_pagina: RUTA_PORTADA});
})
window.addEventListener("resize", function() {
	const contenido = document.querySelector(ID_CONTENIDO);
	redimesionar_iframe({contenido: contenido.firstChild, continente: contenido});
})
// 🔴Insertar favicon
const modificarFavicon = function({archivo}) {
	const link = document.querySelector("head>link[rel='icon']");
	link.setAttribute("href", archivo);
}
// 🔴Insertar SVG
const insertarSVG = function({id_contenedor, url_SVG}) {
	let contenedor = document.getElementById(id_contenedor);
	let parser = new DOMParser();
	fetch(url_SVG)
		.then(response => response.text())
		.then(texto => {
		let imagen = parser.parseFromString(texto, "text/xml");
		contenedor.appendChild(imagen.documentElement);
	})
}
// 🔴Botón HOME
const insertarLinkHome = function({id_contenedor, ruta_portada, id_menu}) {
	let contenedor = document.getElementById(id_contenedor);
	let n_menu = document.getElementById(id_menu);
	contenedor.addEventListener("click", function() {
		cargarContenido({id: IDP_PORTADA, ruta_pagina: ruta_portada});
		cambiarSubmenu(n_menu, undefined);
	});
}

// 🔴Montar menus
function iniciarMenu({id_menu}) {
	
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
				cambiarSubmenu({nodo_menu: root_menu,nodo_submenu: submenu});
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
function cambiarSubmenu({nodo_menu, nodo_submenu}) {


	
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
function cargarContenido({id, ruta_pagina}) {

    let cuadro = document.createElement('iframe');
	cuadro.src = ruta_pagina;
	cuadro.className = "frame";
	cuadro.Id = id;
	cuadro.title = id;
	
	let recipiente = document.getElementById(ID_CONTENIDO);
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
}
// 🔴Redimensionar contenido
function redimesionar_iframe({contenido, continente}) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
