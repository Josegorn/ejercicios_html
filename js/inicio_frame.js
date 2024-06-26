// 🔴 Inicialización
import * as DZ from "/js/diccionario.js";
import { PAG_INDEX } from "/contenido/def/esquema.js";
import { FAVICON } from "/img/iconos.js";


// 🔴Tamaño del boton secundario
const ALTURA_SBOTON = 43;
const ID_PORTADA = "portada";
const TITULO = PAG_INDEX.menu_0.pag.portada.descripcion;
const NIVEL = PAG_INDEX.atributos.nivel;
const RUTA_PORTADA = PAG_INDEX.menu_0.pag.portada.ruta;

// 🔴 Inicialización
document.addEventListener("DOMContentLoaded", function() {
	// Título (Head)
	insertar_texto("head>title", TITULO);
	// Favicon
	insertar_favicon("favicon", FAVICON);
	// Botón HOME
	insertar_home("caja_titulo_logo", RUTA_PORTADA);
	// Texto
	insertar_texto("#caja_titulo_nivel", NIVEL);
	insertar_texto("#caja_titulo_nombre", PAG_INDEX.atributos.descripcion);
	// Menú
	iniciar_menus();
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
	const crear_boton = function ({clase, id, texto, tipo , submenu = null, enlace = null}) {
		const tipos = [DZ.TIPO_BOTON, DZ.TIPO_SUBBOTON]; 
		if(!tipos.includes(tipo)){
			throw new SyntaxError("Error: Submenú no definido");
		}
		let nodo_boton = document.createElement("button");
		nodo_boton.className = clase;
		nodo_boton.id = id;
		nodo_boton.innerHTML = texto;
		nodo_boton.type = "button";
		if(tipo === DZ.TIPO_BOTON){
			nodo_boton.addEventListener("click", function(){
					toggleSubmenu(submenu);
			})
		}
		if(tipo === DZ.TIPO_SUBBOTON){
			nodo_boton.addEventListener("click", function(){
					loadContent(id, enlace);
			})
		}	
		return nodo_boton;
	}
	// 🔷Crear botón submenu
	const crear_menu = function({clase, id}) {
		let nodo_submenu = document.createElement("div");
		nodo_submenu.className = clase;
		nodo_submenu.id = id;
		nodo_submenu.style.height = "0px";
		return nodo_submenu;
	}	
	// 🟢Menú
	for(let i = 0; i < Object.values(PAG_INDEX).length; i++){
		let n= i - 1;
		let nuevo_submenu = crear_menu({clase:"submenu", id:"submenu"+n});
		menu.appendChild(crear_boton( {clase: "boton-menu", id: "boton"+n, texto: Object.values(PAG_INDEX)[i].titulo, tipo: DZ.TIPO_BOTON, submenu: nuevo_submenu }));								 
		
		for(let j = 0; j < Object.values(Object.values(PAG_INDEX)[1].pag).length ; j++){
			nuevo_submenu.appendChild(crear_boton({clase: "boton-submenu", id: "suboton"+n+"_"+j, texto: Object.values(Object.values(PAG_INDEX)[1].pag)[j].titulo, tipo: DZ.TIPO_SUBBOTON, ruta: Object.values(Object.values(PAG_INDEX)[1].pag)[j].ruta}));
		}
		menu.appendChild(nuevo_submenu);
	}
}
// 🔴Manipular menú
function toggleSubmenu(id_sub) {
	
	// 🟢Cerrar todos (cado particular)
    if(id_sub === DZ.RESET) {
		document.querySelectorAll(".submenu").forEach(sub => {
			sub.style.height = "0px";
		})
		return 0;
	}
	// 🟢Abrir un menú, cerrar los demás
	
	// 🔷Submenú 
	let nodo = document.getElementById(id_sub);
	
	// 🔷Números de botones
	const n = nodo.childElementCount();
	
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
