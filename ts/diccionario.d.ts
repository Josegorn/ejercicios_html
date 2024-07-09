export class TipoObjeto { 
    
    private o : symbol; 
    
    constructor() : symbol {
        if(this.o === undefined) return this.o;
        return undefined;
    }
    constructor(mnemonico : string) : boolean {
        this.o =  Symbol().for(mnemonico) ? true : false ;
    }
    public get cadena() {
        return Symbol().keyFor(this.o);
    }
}
export class Entrada<const T = string | number | boolean | symbol > {

    private v : T ;
    
    constructor() : T {
        if (this.v === undefined) return this.v;
        return undefined;  
    }
    constructor(valor : T) {
        this.v = valor;
    }
    constructor(valor : symbol) : void {
        this.v =  Symbol().for(valor) ? true : false ; 
    }  
    public get simbolo() {
        return Symbol().keyFor(this.v);
    }
    public get tipo() {
        return typeof(this.v);
    } 
}
