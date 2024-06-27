"use strict";
// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/img/iconos.js";

// 🔴Algunós valores
const PX_ABIERTO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_efectivo_subboton");
const PX_CERRADO = window.getComputedStyle(document.documentElement).getPropertyValue("--tamv_nulo");
const ID_PORTADA = "portada";
const TITULO = PAG_INDEX.atributos.descripcion;
const NIVEL = PAG_INDEX.atributos.nivel;
const RUTA_PORTADA = PAG_INDEX.menu_0.pag.portada.ruta;
const MENU = document.getElementById("menu");
const TIPO_BOTON = DZ.TIPO_BOTON;
const TIPO_SUBBOTON = DZ.TIPO_SUBBOTON;
const TIPOS_NODOS = DZ.TIPOS_NODOS;


// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	// Título (Head)
	insertar_texto("head>title", TITULO);
	// Favicon
	insertar_favicon("favicon", FAVICON);
	// Botón HOME
	insertar_home("caja_titulo_logo", HOME, MENU);
	// Texto
	insertar_texto("#caja_titulo_nivel", NIVEL);
	insertar_texto("#caja_titulo_nombre", TITULO);
	// Menú
	iniciar_menus({menu: MENU});
	// Píe
	loadContent(ID_PORTADA,RUTA_PORTADA);
})
// 🔴Insertar texto
const insertar_texto = function(id, texto) {
	let contenedor = document.querySelector(id);
	contenedor.innerHTML = texto;
}
// 🔴Insertar favicon
const insertar_favicon = function(id, archivo) {
	let link = document.getElementById(id);
	link.href = archivo;
}
// 🔴Botón HOME
const insertar_home = function(id, url, menu) {
	let contenedor = document.getElementById(id);
	let imagen = document.createElement("img");
	imagen.src = url;
	imagen.alt = "Inicio";
	contenedor.appendChild(imagen);
	contenedor.addEventListener("click", function() {
		loadContent(ID_PORTADA,RUTA_PORTADA);
		toggleSubmenu({menu: menu});
	});
}
// 🔴Reajustar
window.addEventListener("resize", function() {
	let cont = document.getElementById('contenido');
	redim_iframe(cont.firstChild, cont);
})

// 🔴Montar menus
function iniciar_menus({menu}) {
	
	// 🟢Declaraciones de funciones auxiliares
	
	// 🔷Crear boton
	const crear_boton = function ({clase, id, texto, tipo , submenu, enlace}) {
				
		if(!TIPOS_NODOS.includes(tipo)){
			throw new SyntaxError("Error: Submenú no definido");
		}
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = id;
		nodo_boton.innerHTML = texto;
		nodo_boton.type = "button";
		
		if(tipo === TIPO_BOTON){
			nodo_boton.addEventListener("click", function(){	
				toggleSubmenu({menu: menu, submenu: submenu});
			})
		}
		if(tipo === TIPO_SUBBOTON){
			nodo_boton.addEventListener("click", function(){
					loadContent(id, enlace);
			})
		}	
		return nodo_boton;
	}
	// 🔷Crear submenu
	const crear_submenu = function({clase, id}) {
		let nodo_submenu = document.createElement("div");
		nodo_submenu.className = clase;
		nodo_submenu.id = id;
		nodo_submenu.style.height = PX_CERRADO;
		return nodo_submenu;
	}	
	// 🟢Menú
	for(let i = 1; i < Object.values(PAG_INDEX).length; i++){
		let n= i - 1;
		let nuevo_submenu = crear_submenu({clase:"submenu", id:"submenu"+n});
		menu.appendChild(crear_boton({
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
				enlace: Object.values(Object.values(PAG_INDEX)[i].pag)[j].ruta
			}));
		}
		menu.appendChild(nuevo_submenu);
	}
}
// 🔴Manipular menú
function toggleSubmenu({menu: nodo_menu , submenu: nodo_submenu}) {
	
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
function loadContent(id, ruta) {

    let cuadro = document.createElement('iframe');
	cuadro.src = ruta;
	cuadro.className = "frame";
	cuadro.Id = id;
	cuadro.title = "Frame_Interior";
	
	let recipiente = document.getElementById('contenido');
	if(recipiente.childElementCount !== 0){
		recipiente.removeChild(recipiente.firstChild);
	}
	recipiente.appendChild(cuadro);	
	// 🔷Redimensionar al cargar
	cuadro.addEventListener("load", function() {
		redim_iframe(cuadro, recipiente);
	})
	// 🔷Redimensionar cuando cambie
	cuadro.addEventListener("resize", function() {
		redim_iframe(cuadro, recipiente);
	})
	
}
// 🔴Redimensionar contenido
function redim_iframe(contenido, continente) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
