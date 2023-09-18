
class PilaGenerica<T>{ //se establece tipo de datos genericos
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
    else
        return null
    }
}
/*
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
    else
        return null
    }

}*/
let pila1= new PilaGenerica<number>;
pila1.insertar(20);
pila1.insertar(23);
pila1.insertar(2);
console.log(pila1.extraer())
let pila2= new PilaGenerica<string>;
pila2.insertar("Jaun");
pila2.insertar("Ana");
pila2.insertar("Luis");
console.log(pila1.extraer());
/*
let pila2= new PilaString();
pila2.insertar("Jaun");
pila2.insertar("Ana");
pila2.insertar("Luis");
console.log(pila1.extraer());
*/