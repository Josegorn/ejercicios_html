"use strict";
import  datos_diccionario from "/js/diccionario.json";
import type  TipoEntrada from  "/ts/diccionario.d.ts";


export const DZ : WeakMap<WeakKey,TipoEntrada>(datos_diccionario);