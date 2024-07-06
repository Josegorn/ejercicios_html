"use strict";
export const PAG_INDEX = {

	// 0
	atributos:	{	nivel: 			"Digitalización 4ºESO",
					descripcion: 	"Introducción al lenguaje HTML",
					portada: 		"/contenido/portada.html",
					ruta: 			"/contenido/"},
	// 1
	menu_0:	{titulo: "Introdución", pag: { 
		portada:	{titulo: "Inicio",							archivo: "portada.html"},
		intro_1:	{titulo: "El lenguaje de la web",			archivo: "introduccion.html"},
		intro_2:	{titulo: "Beneficios de la programación",	archivo: "beneficios.html"},
		intro_3:	{titulo: "Conocimientos previos",			archivo: "conocimientos.html"},
		intro_4: 	{titulo: "Materiales necesarios",			archivo: "materiales.html"}
	}},
	// 2
	menu_1:	{titulo: "Práctica 1", pag: { 
		practica_1:	{titulo: "Títulos y parrafos",	archivo: "practica_1.html"},
		teo_1:		{titulo: "Teoría",				archivo: "teoria_1.html"},
		eje_1:		{titulo: "Ejercicios",			archivo: "ejercicio_1.html"}
	}},
	// 3
	menu_2:	{titulo: "Práctica 2", pag: { 	
		practica_2:	{titulo: "Formato de texto",	archivo: "practica_2.html"},
		teo_2:		{titulo: "Teoría",				archivo: "teoria_2.html"},
		eje_2:		{titulo: "Ejercicios",			archivo: "ejercicio_2.html"}
	}},
	// 4
	menu_3:	{titulo: "Práctica 3", pag: { 
		practica_3:	{titulo: "Manejo de listas",	archivo: "practica_3.html"},
		teo_3:		{titulo: "Teoría",				archivo: "teoria_3.html"},	
		eje_3:		{titulo: "Ejercicios",			archivo: "ejercicio_3.html"}
	}},
	// 5
	menu_4:	{titulo: "Práctica 4", pag: { 
		practica_4:	{titulo: "Hipervínculos",		archivo: "practica_4.html"},	
		teo_4:		{titulo: "Teoría",				archivo: "teoria_4.html"},
		eje_4:		{titulo: "Ejercicios",			archivo: "ejercicio_4.html"}
	}},
	// 6
	menu_5:	{titulo: "Práctica 5", pag: { 
		practica_5:	{titulo: "Imágenes",			archivo: "practica_5.html"},
		teo_5:		{titulo: "Teoría",				archivo: "teoria_5.html"},
		eje_5:		{titulo: "Ejercicios",			archivo: "ejercicio_5.html"}
	}},
	// 7
	menu_6:	{titulo: "Práctica 6", pag: { 
		practica_6:	{titulo: "Formato avanzado",	archivo: "practica_6.html"},	
		teo_6:		{titulo: "Teoría",				archivo: "teoria_6.html"},
		eje_6:		{titulo: "Ejercicios",			archivo: "ejercicio_6.html"}
	}},
	// 8
	menu_7:	{titulo: "Práctica 7", pag: { 
		practica_7:	{titulo: "Colores",				archivo: "practica_7.html"},
		teo_7:		{titulo: "Teoría",				archivo: "teoria_7.html"},
		eje_7:		{titulo: "Ejercicios",			archivo: "ejercicio_7.html"}
	}},
	// 9
	menu_8:	{titulo: "Práctica 8", pag: { 
		practica_8:	{titulo: "Tablas",				archivo: "practica_8.html"},
		teo_8:		{titulo: "Teoría",				archivo: "teoria_8.html"},	
		eje_8:		{titulo: "Ejercicios",			archivo: "ejercicio_8.html"}
	}},
	// 10
	menu_9:	{titulo: "Práctica 9", pag: { 
		practica_9:	{titulo: "Formularios",			archivo: "practica_9.html"},
		teo_9:		{titulo: "Teoría",				archivo: "teoria_9.html"},
		eje_9:		{titulo: "Ejercicios",			archivo: "ejercicio_9.html"}
	}}
};
export const numUD = Object.defineProperty(PAG_INDEX, "numUD", {
	get() {
		return Object.keys(this).filter(key => typeof(this[key]) === typeof({}) ).length - 1;
	},
	enumerable: false,
});
export const tituloDocumento = Object.defineProperty(PAG_INDEX, "tituloDocumento", {
	get() {
		return this.atributos.descripcion;
	},
	enumerable: false,
});
export const nivel = Object.defineProperty(PAG_INDEX, "nivel", {
	get() {
		return this.atributos.nivel;
	},
	enumerable: false,
});
export const rutaPortada = Object.defineProperty(PAG_INDEX, "rutaPortada", {
	get() {
		return this.atributos.portada;
	},
	enumerable: false,
});
export const ruta = Object.defineProperty(PAG_INDEX, "ruta", {
	get() {
		return this.atributos.ruta;
	},
	enumerable: false,
});
export const primeraUD = Object.defineProperty(PAG_INDEX, "primeraUD", {
	get() {
		let id = Object.keys(this)[1];
		return this[id];
	},
	enumerable: false,
});
export const ultimaUD = Object.defineProperty(PAG_INDEX, "ultimaUD", {
	get() {
		let id = Object.keys(this)[this.numUD];
		return this[id];
	},
	enumerable: false,
});
PAG_INDEX.UD = function(indexUD = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	return this[id];
};	

PAG_INDEX.idUD = function(indexUD = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	return id;
};	

PAG_INDEX.numPag = function(indexUD = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	return Object.keys(this[id].pag).length;
};	
PAG_INDEX.tituloPag = function(indexUD = Number() | 0, indexPag = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	if(indexPag < 0 || indexPag >= this.numPag(indexUD)) return undefined;
	let idPag = Object.keys(this[id].pag)[indexPag];
	return this[id].pag[idPag].titulo;
};
PAG_INDEX.archivoPag = function(indexUD = Number() | 0, indexPag = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	if(indexPag < 0 || indexPag >= this.numPag(indexUD)) return undefined;
	let idPag = Object.keys(this[id].pag)[indexPag];
	return this[id].pag[idPag].archivo;
};
PAG_INDEX.idPag = function(indexUD = Number() | 0, indexPag = Number() | 0 ) {
	if(indexUD < 0 || indexUD >= this.numUD) return undefined;
	let id = Object.keys(this)[indexUD + 1];
	if(indexPag < 0 || indexPag >= this.numPag(indexUD)) return undefined;
	let idPag = Object.keys(this[id].pag)[indexPag];
	return this[id].pag[idPag].archivo;
};
