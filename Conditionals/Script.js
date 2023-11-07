// 1. Edades
let edad = prompt("Ingrese su edad:")

if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir.")
} else {
    let añosFaltantes = 18 - edad
    console.log("Te faltan " + añosFaltantes + " años para conducir.")
}


// 2. Comparar valores de myAge y yourAge usando if... else
let myAge = 20
let yourAge = prompt("Ingrese su edad")

if (myAge == yourAge ) {
    console.log("Tenemos la misma edad")                
} 
else if (myAge > yourAge) {
    let añosQueTeFaltan = 20 - yourAge
    console.log("Soy " + añosQueTeFaltan + " años mayor que tu")
} 
else if (myAge < yourAge)  {
    let añosQueMeFaltan = yourAge - 20
    console.log("Eres " + añosQueMeFaltan + " años mayor que yo")
}



// 3. Comparacion enttre a y b

let a = prompt("Ingrese el primer número:")
let b = prompt("Ingrese el segundo número:")

if (a > b) {
    console.log("a es mayor que b")
} else if (a < b) {
    console.log("a es menor que b")
}




// 4. Estaciones del año
let mesUserInput = prompt("Ingrese el mes:")
let mes = mesUserInput.toLowerCase()
 {

  
    switch (mes) {
      case 'septiembre':
      case 'octubre':
      case 'noviembre':  
    console.log("La temporada es Otoño")
   break

      case 'diciembre':
      case 'enero':
      case 'febrero':
        console.log("La temporada es Invierno")
        break

      case 'marzo':
      case 'abril':
      case 'mayo':
        console.log("La temporada es Primavera")
        break

      case 'junio':
      case 'julio':
      case 'agosto':
        console.log("La temporada es Verano")
        break
      
      
     
  default:
    console.log("mes no valido")
     
    }
  }
  


// 5. Calificaciones
let puntaje = prompt("Ingrese el puntaje del estudiante:")

if (puntaje >= 80 && puntaje <= 100) {
    console.log("Calificación: A")
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("Calificación: B")
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("Calificación: C")
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("Calificación: D")
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("Calificación: F")
}
