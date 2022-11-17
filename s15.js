// ejercicio 01
// let name = prompt('ingrese el nombre del trabajador')
// let sueldo = +prompt('ingrese el sueldo del trabajador')
// let hijos = +prompt('ingrese la cantidad de hijos')
// let bono =  sueldo*7/100
// document.write(`El obrero tiene un bono de ${bono} <br>`)

// document.write(`El obrero${name} recibira en total S/. ${sueldo + bono} `)



// Ejercicio 02
// let number = +prompt('Ingresa un numero')
// if(number>=500){
//     document.write(`El 18% del numero ingresado es: ${number*18/100}`)
// }else {
//     document.write(`Tiene que ser un numero mayor a 500`)
// }

// Ejercicio 03
// let n = +prompt('Ingrese el numero que desea calcular su factorial')
// let r = 1;
// for (let i = n; i>0; i--) {
//     r*=i
//     console.log(r);
// }
// // document.write()
// document.write(`El factorial es ${r}`)



// Ejercicio del ppt 01

// let a = +prompt('Ingrese el importe de la compra')
// if(a>=150){
//     document.write(`Se le aplico el descuento del 12% de su compra, debe pagar ${a - a*12/100}`)
// } else (
//     document.write(`El monto que debe pagar es ${a}`)
// )

// Ejercicio del ppt 02

// let name = prompt('Ingrese el nombre del alumno')
// let notaParcial = +prompt('Ingrese la nota de su examen parcial')
// let notaFinal = +prompt('Ingrese la nota de su examen final')
// let notaPracticas = +prompt('Ingrese el promedio de practicas')
// let promedioFinal = (notaFinal*2 + notaParcial + notaPracticas)/4
//  if(promedioFinal>10 && promedioFinal<=20) {
//     document.write(`El alumno ${name} aprobó con ${promedioFinal}`)
//  } else if (promedioFinal>20){
//     document.write(`Ingrese las notas en el rango de 0 a 20`)
//  }else(
//     document.write(`El alumno ${name} esta desaprobado, tiene ${promedioFinal}`)
//  )