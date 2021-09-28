/*Ejercicio 1
Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 4 propiedades: firstName, lastName, email, age, con tus datos
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE DE PILA] y tengo [ACA LA EDAD] años"*/

const user = {
  firstName: "Natalia",
  lastName: "Navarro",
  email: "nataliasoledadnavarro@gmail.com",
  age: 36,
};

console.log(user);

/*Ejercicio 2
Tenemos un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1, ada@gmail.com, Ada Lovelace, 1234567890
// 2, grace@hotmail.com, Grace Hopper, 0987654321
// 3, hedy@gmail.com, Hedy Lamarr, 6789054321
// 4, radia@yahoo.com, Radia Perlman, 1234509876
// 5, sheryl@facebook.com, Sheryl Sandberg, 5432167890


// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// const usuarioEjemplo = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"*/
// }

/*const personaUno = {
    id: 1,
    email: "ada@gmail.com",
    nombre: "Ada Lovelace", 
    telefono: 1234567890
}

const personaDos = {
    id: 2,
    email: "grace@hotmail.com",
    nombre: "Grace Hopper", 
    telefono: 0987654321
}

const personaTres = {
    id: 3,
    email: "radia@yahoo.com",
    nombre: "Hedy Lamarr", 
    telefono: 6789054321
}

const personaCuatro = {
    id: 4,
    email: "radia@yahoo.com",
    nombre: "Radia Perlman", 
    telefono: 1234509876
}

const personaCinco = {
    id: 5,
    email: "sheryl@facebook.com",
    nombre: "Sheryl Sandberg", 
    telefono: 5432167890
}

console.log(personaUno)
console.log(personaDos)
console.log(personaTres)
console.log(personaCuatro)
console.log(personaCinco)*/

/*Ejercicio 3
Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona:*/
// 1. El nombre de Ada:
/*console.log(personaUno.nombre)
// 2. El ID de Grace
console.log(personaDos.id)
// 3. El email de Hedy
console.log(personaTres.email)
// 4. El ID y nombre de Radia
console.log(personaCuatro.id)
console.log(personaCuatro.nombre)
// 5. El telefono de Sheryl
console.log(personaCinco.telefono)*/

/*Ejercicio 4
Tenemos un objeto con información de un disco:*/
/*const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};
Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)*/

/*Ejercicio 5
Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

Agregar al objeto creado en el ejercicio 1 dos propiedades:

sabeProgramar: true
tecnologiasConocidas: [el array que creaste recien]*/

const tecnologiasConocidas = ["HTML", "CSS", "JS", "Git", "BULMA"];

user.sabeProgramar = true;
user.tecnologiasConocidas = tecnologiasConocidas;

console.log(user);

/*Ejercicio 6
Crear una funcion llamada mostrarTecnologias que reciba como parametros las propiedades recien creadas
Dentro de la funcion, crear la siguiente lógica:
Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
Ejecutar la funcion*/

/*const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) =>{
if(sabeProgramar){
    console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
}

}

mostrarTecnologias(user.sabeProgramar, user.tecnologiasConocidas)*/
//OTRA FORMA DE SOLUCION, PASANDO EL OBJETO COMO PARAMETRO//

/*const mostrarTecnologias = (objeto) =>{
    if(objeto.sabeProgramar){
        console.log(`Hola, mi nombre es ${objeto.firstName} y programo en ${objeto.tecnologiasConocidas}`)
}
}
mostrarTecnologias(user)*/

/*Ejercicio 7
Agregar el string "Proximamente DOM" al array dentro del objeto "user".
Ejecutar la funcion*/

/*user.tecnologiasConocidas.push("Proximamente DOM")
console.log(user)*/

/*Ejercicio 8
Por un cambio en los requerimientos del proyecto, necesitamos que el nombre del objeto user ahora sea un objeto con el siguiente formato:

const user = {
  name: {
    first: 'Grace',
    last: 'Hopper'
  },
  // y las demas propiedades
}
Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName.
El nombre hay que guardarlo con el formato expresado en el punto anterior.
No podemos escribir nuevamente los valores, sino utilizar los que ya estan guardados en el objeto user.*/


const newUser = user
newUser.name = { 
  first: newUser.firstName,
  last: newUser.lastName
}

delete newUser.firstName
delete newUser.lastName


console.log(newUser)
/*Ejercicio 9
Tenemos un array de objetos con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Crea una funcion con el nombre mostrarGanadoras, que reciba el array como parametro.
Dentro de la funcion, recorrer el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6*/

const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
]

const nombrarGanadoras = (ganadoras) =>{

  let informacionGanadora = ""

  for (let i = 0; i < ganadoras.length; i++) {

    informacionGanadora = informacionGanadora + `${ganadoras[i].nombre} ganó la temporada ${ganadoras[i].temporada} `
   
  }

  return informacionGanadora

}

console.log(nombrarGanadoras(ganadoras))

///// RETORNO DE LA FUNCION
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6



/*Ejercicio 10
Tenemos un array de objetos, con las canciones de un disco de Nirvana
Cada objeto representa una canción, y tiene las propidades id, nombre, duracion (en segundos)
Queremos calcular:
La duración total del disco (suma de la duración de cada canción)
La duración promedio por canción (un promedio entre todas las duraciones)
Para ello crear las funciones calcularDuracionTotal y calcularPromedioPorCancion*/
const nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

const calcularDuracionTotal = (nevermind) =>{

  let suma = 0

  for (let i = 0; i < nevermind.length; i++) {
    suma = suma + nevermind[i].duracion 
    
  }

  return suma
}

const calcularPromedioPorCancion = (nevermind) => {
 
  return calcularDuracionTotal(nevermind) / nevermind.length
}

///// RESULTADO
console.log(calcularDuracionTotal(nevermind)); // 1217
console.log(calcularPromedioPorCancion(nevermind)); // 243.4


/*Ejercicio 11
Tenemos un array de objetos, que representa un listado de bandas
Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
Crear una funcion que muestre en consola cada banda del array, con la siguiente lógica:
Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"*/

const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const estadoDeLaBanda = (bandas) =>{
 
  let resultado = ""

  for (let i = 0; i < bandas.length; i++) {
    if(bandas[i].activa === true){
      resultado = resultado + `${bandas[i].nombre} está activa desde el año ${bandas[i].fundacion} `
    }
    else {
      resultado = resultado + `${bandas[i].nombre} no está activa `
    }  
  }
return resultado
}

console.log(estadoDeLaBanda(bandas))

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990

