

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 50,
    cancion: "Masiosare",
    detalles: {
        autor:"cepillin",
        year: 2002
    }
}


/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El año es: ${reproductor.detalles.year}`);*/

const{volumen,segundo,cancion,detalles}= reproductor;
const{autor}= detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`los segundos son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
//console.log(`El año es: $year}`);

const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
console.log(`Personaje 1 ${dbz[0]} `);
console.log(`Personaje 2 ${dbz[1]} `);
console.log(`Personaje 3 ${dbz[2]} `);
console.log(`Personaje 4 ${dbz[3]} `);
const[a,,,d]=dbz;

console.log(`Personaje 1 ${a} `);
console.log(`Personaje n ${d} `);
