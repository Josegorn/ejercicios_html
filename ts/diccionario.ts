"use strict";
import * as DZ from "/json/diccionario.json";

Object.entries(DZ).forEach(([key, value]) => {(globalThis as any)[key] = value as string});

