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
 export class Entrada {

    private v : string | number | boolean | symbol ;
    
    constructor() : string | number | boolean | symbol {
        if (this.v === undefined) return this.v;
        return undefined;  
    }
    constructor(valor : string | number | boolean ) {
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

