// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON, HOME } from "/img/iconos.js";


// 🔴Tamaño del boton secundario
const ALTURA_SBOTON = 43;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	insertar_texto("head>title", PAG_INDEX.atributos.descripcion);
	insertar_favicon("favicon", FAVICON);	
	insertar_home("caja_titulo_logo", HOME, PAG_INDEX.menu_0.pag.portada.ruta);
	insertar_texto("#caja_titulo_nivel", PAG_INDEX.atributos.nivel);
	insertar_texto("#caja_titulo_nombre", PAG_INDEX.atributos.descripcion);
	iniciar_menus();
	loadContent(PAG_INDEX.menu_0.pag.portada.ruta);
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
const insertar_home = function(id, codigo, ruta) {
	let contenedor = document.getElementById(id);
	let parser = new DOMParser();
	let imagen = null;
	try {
		imagen = parser.parseFromString(codigo, "image/svg+xml");
	} catch (error) {
		throw new SyntaxError("Error parseando el SVG", error.message);
	} finally {
		imagen.documentElement.alt = "0";
		contenedor.appendChild(imagen.documentElement);
		contenedor.addEventListener("click", function() {
			loadContent(ruta);
			toggleSubmenu(DZ.RESET);
		});
	}
}
// 🔴Reajustar
window.addEventListener("resize", function() {
	let cont = document.getElementById('contenido');
	redim_iframe(cont.firstChild, cont);
})

// 🔴Montar menus
function iniciar_menus() {
	
	// 🟢Nodo padre
	let menu = document.getElementById("sidebar");
	
	// 🟢Declaraciones de funciones auxiliares
	
	// 🔷Crear boton
	const crear_boton = function (clase, id, texto, tipo , submenu = undefined, enlace = undefined) {
		let funcion_final;
		switch(tipo){
			case DZ.TIPO_BOTON:
				if(submenu.isUndefined){ throw new SyntaxError("Error: Submenú no definido"); }
				funcion_final = (nodo) => {
					nodo.addEventListener("click", function(){
						toggleSubmenu(submenu); 
					});
				}
				break;
			case DZ.TIPO_SUBBOTON:
				if(enlace.isUndefined){ throw new SyntaxError("Error: Enlace no definido"); }
				funcion_final = (nodo) => { 
					nodo.addEventListener("click", function(){
						loadContent(enlace);
					});
				}
				break;
			default:
				throw new SyntaxError("Error: Tipo no definido");					  
		}	
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = id;
		nodo_boton.type = "button";
		nodo_boton.innerHTML = texto;
		funcion_final(nodo_boton);
		return nodo_boton;
	}
	// 🔷Crear botón submenu
	const crear_menu =function(clase, id) {
		let nodo_submenu = document.createElement("div");
		nodo_submenu.className = clase;
		nodo_submenu.id = id;
		nodo_submenu.style.height = "0px";
		return nodo_submenu;
	}	
	// 🟢Menú 
	for(let n = 0, i = 1; PAG_INDEX[i].isDefined; i++ & n++ ){
		let submenu = crear_menu("submenu", "submenu"+n);
		menu.appendChild(crear_boton( "boton-menu", "boton"+n, PAG_INDEX[i].titulo, DZ.TIPO_BOTON, "submenu"+n, undefined ));								 
		for(let j = 0; PAG_INDEX[i].pag[j].isDefinede; j++){
			submenu.appendChild(crear_boton("boton-submenu", "suboton"+n+"_"+j, PAG_INDEX[i].pag[j].titulo, PAG_INDEX[i].pag[j].ruta));
		}
		menu.appendChild(submenu);
	}
}
// 🔴Manipular menú
function toggleSubmenu(id_sub) {
	
	// 🟢Cerrar todos (cado particular)
    if(id_sub === DZ.RESET) {
		document.querySelectorAll(".submenu").forEach(sub => {
			sub.style.height = "0px";
		})
		return DZ.RESET;
	}
	// 🟢Abrir un menú, cerrar los demás
	
	// 🔷Submenú 
	let nodo = document.getElementById(id_sub);
	
	// 🔷Números de botones
	const n = nodo.childElementCount;
	
	// 🔷Tamaño final del submenú
	let altura = n * ALTURA_SBOTON;
	
	// 🔷Manipular submenú
    if (nodo.style.height === "0px") {
        nodo.style.height = altura.toString()+"px";
    } else {
        nodo.style.height = "0px";
    }
	// 🔷Cerrar todos los demas
	document.querySelectorAll(".submenu").forEach(sub => {
		if(sub.id !== id_sub) sub.style.height = "0px";
	})
}
// 🔴Cargar subpágina
function loadContent(pagId) {

    let nodo = document.createElement('iframe');
	nodo.src = PAG_INDEX[pagId]["ruta"];
	nodo.className = "frame";
	nodo.Id = pagId;
	nodo.title = "Frame_Interior";
	
	let recipiente = document.getElementById('contenido');
	if(recipiente.childElementCount !== 0){
		recipiente.removeChild(recipiente.firstChild);
	}
	recipiente.appendChild(nodo);	
	// 🔷Redimensionar al cargar
	nodo.addEventListener("load", function() {
		redim_iframe(nodo, recipiente);
	})
	// 🔷Redimensionar cuando cambie
	nodo.addEventListener("resize", function() {
		redim_iframe(nodo, recipiente);
	})
	
}
// 🔴Redimensionar contenido
function redim_iframe(contenido, continente) {
	contenido.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
    continente.style.height = contenido.contentWindow.document.body.scrollHeight + 'px';
}
