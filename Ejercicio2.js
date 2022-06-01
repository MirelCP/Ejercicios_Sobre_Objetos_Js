// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj = {
    nombre : "Mirel",
    apellidos : "Pisica",
    edad : "34",
    altura : "173 cm",
    eresDesarrollador : true
}
// Una variable que obtenga tu edad a partir del objeto anterior
const edad = obj.edad;

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigo1 = {
    nombre : "Juan",
    apellidos : "Marinero",
    edad : "31",
    altura : "179 cm",
    eresDesarrollador : true
}
const amigo2 = {
    nombre : "Alberto",
    apellidos : "Parrilla",
    edad : "33",
    altura : "180 cm",
    eresDesarrollador : true
}
const lista = [obj, amigo1, amigo2];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a,b) => a.edad-b.edad);

