export class TipoObjeto { 
    
    private o : symbol; 
    
    constructor() : symbol {
        return this.o;
    }
    constructor(mnemonico : string) : boolean {
        this.o = Symbol().for(mnemonico) ? true : false ;

    }
    public get cadena() {
        return Symbol.keyFor(this.o);
    }
};
export type Entrada<const T = string | number | boolean | symbol > = {

    private #_v : T  ;
    
    set (mnemonico : string) {
        this.#_o = Symbol.for(mnemonico);
        return this.#_o;
    
    public get () {
        return this.
};
export type Entrada<const T = string | number | boolean | symbol > = {
  
    private #_v : T  ;
       



}     

    

    
    

    



    
      
    public {
         <string> = () => {
            return this.#_v;
        }
    };
    
}






export type TipoEntrada = {
    [key in TipoBoton]: {
        [key in string]: Entrada<string>
        
    }         
    
}

export default { TipoBoton, TipoEntrada };



