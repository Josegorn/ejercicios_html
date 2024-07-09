"use strict";
import * as DZ from "/js/diccionario.json";

document.append(document.importNode(DZ as unknown as Element, true));
