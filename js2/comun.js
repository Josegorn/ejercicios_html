"use strict";
/**
 * Inicializa la sección del pie de página de una página web con los textos proporcionados y el separador.
 * @param {HTMLDivElement} nodo_padre El nodo padre donde se agregará el pie de página.
 * @param {string} texto_nivel - El texto para el nivel.
 * @param {string} texto_titulo - El texto para el título.
 * @param {string} texto_tilulo_pagina - El texto para el título de la página.
 * @param {Separador} [separador] _(Opcional)_ - Contiene el separador. Valor por defecto " - ".
 * @return {void} Esta función no devuelve ningún valor.
 */
export function iniciarPie(nodo_padre, texto_nivel, texto_titulo, texto_tilulo_pagina, { separador = " - " }) {
    const nodo_pie = document.createElement("footer");
    const objetos = [texto_nivel, separador, texto_titulo, separador, texto_tilulo_pagina];
    objetos.forEach(objeto => {
        const nodo_span = crearNodoTexto("span", objeto);
        nodo_pie.appendChild(nodo_span);
    });
    nodo_padre.appendChild(nodo_pie);
}
/**
 * Modifica el contenido de texto de un elemento HTML con el ID dado.
 * @param {string} id - El ID del elemento HTML a modificar.
 * @param {string} texto - El nuevo contenido de texto para establecer en el elemento.
 * @throws Si el elemento con el ID dado no existe.
 * @return {void} Esta función no devuelve ningún valor.
 */
export function modificarTextoPorId(id, texto) {
    const contenedor = document.getElementById(id);
    if (contenedor !== null)
        contenedor.innerHTML = texto;
    else
        throw new Error("No existe el elemento (ID:" + id + ")");
}
/**
 * Crea un elemento HTML del tipo especificado con el contenido de texto dado y un ID opcional.
 *
 * @param {string} nombre_nodo - El tipo del elemento HTML a crear.
 * @param {string} texto - El contenido de texto que se establecerá en el elemento.
 * @param {string} [id] _(Opcional)_ - ID opcional para asignar al elemento creado.
 * @return {HTMLElement} El nuevo elemento HTML creado con el texto e ID especificados.
 */
export function crearNodoTexto(nombre_nodo, texto, id) {
    const nodo_texto = document.createElement(nombre_nodo);
    nodo_texto.innerHTML = texto;
    if (id !== undefined)
        nodo_texto.id = id;
    return nodo_texto;
}
/**
 * Modifica el favicon de la página web con el archivo especificado.
 *
 * @param {string} archivo - La ruta del archivo a utilizar como favicon o el codigo en Base64.
 * @return {void} Esta función no devuelve ningún valor.
 */
export function modificarFavicon(archivo) {
    const link = document.querySelector("head>link[rel='icon']");
    if (link !== null)
        link.setAttribute("href", archivo);
    else
        throw new Error("No existe favicon");
}
/**
 * Función asíncrona que inserta un SVG en un contenedor HTML.
 *
 * @param {string} id_contenedor - El ID del contenedor donde se insertará el SVG.
 * @param {string} url_SVG - La URL del archivo SVG a insertar.
 * @return {Promise<void>} Esta función no devuelve ningún valor.
 */
export async function insertarSVG(id_contenedor, url_SVG) {
    const contenedor = document.getElementById(id_contenedor);
    if (contenedor === null)
        throw new Error("No existe el elemento (ID:" + id_contenedor + ")");
    let promesa = await fetch(url_SVG);
    contenedor.innerHTML = await promesa.text();
}
