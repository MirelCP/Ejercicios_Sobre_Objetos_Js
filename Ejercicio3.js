// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// La fecha de hoy

let fechaHoy = new Date();

// La fecha de tu nacimiento

let fechaNacimiento = new Date(1988, 03, 26);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let compararFerchas = fechaHoy > fechaNacimiento;

// Una variable que contenga el día de tu nacimiento

let diaNacimiento = fechaNacimiento.getDate();

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mesNacimiento = fechaNacimiento.getMonth()+1;

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let anioNacimiento = fechaNacimiento.getFullYear();

