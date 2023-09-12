

//funciones

function sumar2():void{
    console.log(7+7);
}



sumar2();



/*function sumar(a:number,b:number):void{
    console.log(a+b);
}*/


function sumar(a:number,b:number):number{
    return a+b;
}


const resultado = sumar(4,6);

console.log(resultado);



function multiplicar(n1:number,otronum:number,base:number=3):number{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(3,5));






interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);

}

const nuevaMascota:Mascota={
    nombre:"Miau",
    edad:2,
    mostrarEdad() 
        {
            console.log("La edad es: ",this.edad);
        },
}
calcular(nuevaMascota,3);
