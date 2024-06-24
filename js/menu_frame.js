// 🔴 Inicialización
import { DIC } from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON } from "/img/iconos.js";
import { HOME } from "/img/iconos.js";

// 🔴Tamaño del boton secundario
//const ALTURA_BOTON = 45;
const ALTURA_SBOTON = 43;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	insertar_favicon("favicon", FAVICON);
	insertar_imagen("caja_titulo_logo", HOME);
	iniciar_menus();
	loadContent("portada");
})
// 🔴Insertar favicon
const insertar_favicon = function(id, archivo) {
	let link = document.getElementById(id);
	link.href = archivo;
};
// 🔴Insertar imagen
const insertar_imagen = function(id, archivo) {
	let contenedor = document.getElementById(id);
	let imagen = document.createElement("img");
	imagen.src = URL(archivo);
	contenedor.appendChild(imagen);
};
// 🔴Reajustar
window.addEventListener("resize", function() {
	let cont = document.getElementById('contenido');
	redim_iframe(cont.firstChild, cont);
})

// 🔴Montar menus
function iniciar_menus() {
	
	// 🟢Bontón HOME
	let boton_home = document.getElementById("caja_titulo2");
	boton_home.addEventListener("click", function() {
		loadContent("portada");
		toggleSubmenu(DIC.RESET);
	});
	
	// 🟢Nodo padre
	let menu = document.getElementById("sidebar");
	
	// 🟢Declaraciones de funciones auxiliares
	
	// 🔷Crear botón primario
	const crear_bonton = function(clase, idb, nombre, submenu) {
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = idb;
		nodo_boton.type = "button";
		nodo_boton.innerHTML = nombre;
		nodo_boton.addEventListener("click", function(){
			toggleSubmenu(submenu);
		});
		return nodo_boton;
	}
	// 🔷Crear botón secundario
	const crear_sub_bonton = function(clase, idb, nombre, enlace) {
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = idb;
		nodo_boton.type = "button";
		nodo_boton.innerHTML = nombre;
		nodo_boton.addEventListener("click", function(){
			loadContent(enlace);
		});
		return nodo_boton;
	}
	// 🔷Crear botón submenu
	const crear_menu =function(clase, idm) {
		let nodo_submenu = document.createElement("div");
		nodo_submenu.className = clase;
		nodo_submenu.id = idm;
		nodo_submenu.style.height = "0px";
		return nodo_submenu;
	}	
	// 🟢Menú prologo
	let submenu_prologo = crear_menu("submenu", "submenu0");
	menu.appendChild(crear_bonton("boton-menu", "boton0", "Introducción", "submenu0"));
	submenu_prologo.appendChild(crear_sub_bonton("boton-submenu", "suboton0_1", PAG_INDEX["intro_1"]["titulo"], "intro_1"));
	submenu_prologo.appendChild(crear_sub_bonton("boton-submenu", "suboton0_2", PAG_INDEX["intro_2"]["titulo"], "intro_2"));
	submenu_prologo.appendChild(crear_sub_bonton("boton-submenu", "suboton0_3", PAG_INDEX["intro_3"]["titulo"], "intro_3"));
	submenu_prologo.appendChild(crear_sub_bonton("boton-submenu", "suboton0_4", PAG_INDEX["intro_4"]["titulo"], "intro_4"));
	menu.appendChild(submenu_prologo);

	// 🟢Menú de las prácticas
	for ( let i = 1; i <= 9; i++ ) {
		let submenu_actual = crear_menu("submenu", "submenu"+i );
		menu.appendChild(crear_bonton("boton-menu", "boton"+i, "Práctica "+i, "submenu"+i));   
		submenu_actual.appendChild(crear_sub_bonton("boton-submenu", "sboton"+i+"_1", PAG_INDEX["practica_"+i]["titulo"], "practica_"+i));
		submenu_actual.appendChild(crear_sub_bonton("boton-submenu", "sboton"+i+"_2", PAG_INDEX["teo_"+i]["titulo"], "teo_"+i));
		submenu_actual.appendChild(crear_sub_bonton("boton-submenu", "sboton"+i+"_3", PAG_INDEX["eje_"+i]["titulo"], "eje_"+i));
		menu.appendChild(submenu_actual);
	} 
}

// 🔴Manipular menú
function toggleSubmenu(id_sub) {
	
	// 🟢Cerrar todos (cado particular)
    if(id_sub === DIC.RESET) {
		document.querySelectorAll(".submenu").forEach(sub => {
			sub.style.height = "0px";
		});
		return void 0;
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
