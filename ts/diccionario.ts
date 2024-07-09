"use strict";
import { crearNodoTexto } from "./comun";
import * as DZ from "/js/diccionario.json";

JSON.parse(DZ).forEach(([key, value]) => {
    (globalThis as any)[key] = value;
});
Object.entries(DZ).forEach(([key, value]) => {
globalThis.[key] =  value;