"use strict";
import  datos_diccionario from "/js/diccionario.json";
import type Entrada from  "/ts/diccionario.d.ts";


export class DZ WeakMap<WeakKey,Entrada>(datos_diccionario){
    constructor(){
        super(datos_diccionario);
    }
    public get(clave : string) : Entrada {
        return super.get(clave);
    }
    public set(clave : string, valor : Entrada) : void {
        return super.set(clave,valor);
    }
    public has(clave : string) : boolean {
        return super.has(clave);
    }
    public delete(clave : string) : boolean {
        return super.delete(clave);
    }
    public clear() : void {
        return super.clear();
    }
    public size() : number {
        return super.size;
    }
    public keys() : IterableIterator<string> {
        return super.keys();
    }
    public values() : IterableIterator<Entrada> {
        return super.values();
    }
    public entries() : IterableIterator<[string,Entrada]> {
        return super.entries();
    }
    public forEach(callbackfn : (value : Entrada, key : string, map : WeakMap<WeakKey,Entrada>) => void, thisArg? : any) : void {
        return super.forEach(callbackfn,thisArg);
    }
    
}