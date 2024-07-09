"use strict";
import * as DZ from "/js/diccionario.json";

Object.entries(DZ).forEach(([key, value]) => {(globalThis as any)[key] = value as string});

