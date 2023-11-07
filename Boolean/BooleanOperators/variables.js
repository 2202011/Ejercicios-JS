// 1. Declara variables y verifica los tipos de datos
let firstName = 'Seani'
console.log(typeof firstName)
let lastName = 'Arcos_Gomez'
console.log(typeof lastName)
let country = 'México'
console.log(typeof country)
let city = 'Playa Del Carmen'
console.log(typeof city)
let age = 20
console.log(typeof age)
let isMarried = false
console.log(typeof isMarried)
let year = 2023
console.log(typeof year)

// 2. Verificar si typeof '10' es igual a 10
console.log(typeof '10' === 10)

// 3. Verificar si parseInt (9.8) es igual a 10
console.log(parseInt('9.8')=== 10)

// 4. Verificar cualquier valor booleano true o false

//verdaderos
const check = 5 < 10 
console.log(check)
let saludo = 'hola' === 'hola'
console.log(saludo)
const ten = 10 === 10
console.log(ten)

//Falsos
const gravity_Pi = 9.8 === 3.1416
console.log(gravity_Pi)
const number = 5 > 10
console.log(number)
const falso = 10 > 20
console.log(falso)

// 5. Comparaciones 
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Utilice el objeto Date 

const fechaActual = new Date()
const añoActual = fechaActual.getFullYear()
console.log('Año actual:', añoActual)
const mesActual = fechaActual.getMonth()
console.log('Mes actual (número):', mesActual + 1)
const diaActual = fechaActual.getDate()
console.log('Fecha actual:', diaActual)
const diaSemanaActual = fechaActual.getDay()
console.log('Día de la semana actual (número):', diaSemanaActual)
const horaActual = fechaActual.getHours()
console.log('Hora actual:', horaActual)
const minutosActuales = fechaActual.getMinutes()
console.log('Minutos actuales:', minutosActuales)
const segundosDesde1970 = Math.floor(fechaActual.getTime() / 1000)
const nombresMeses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const nombreMesActual = nombresMeses[mesActual]
const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const nombreDiaSemanaActual = nombresDias[diaSemanaActual]
console.log('Segundos desde 1 de enero de 1970:', segundosDesde1970)

// Solicitar al usuario que ingrese la base y la altura de un triángulo
var base = parseFloat(prompt("Ingrese la base del triángulo: "))
var altura = parseFloat(prompt("Ingrese la altura del triángulo: "))

// Área del triángulo
var area = 0.5 * base * altura

// Resultado
console.log("El área del triángulo es: " + area)



// Perimetro
var ladoA = parseFloat(prompt("Ingrese el lado A del triángulo: "))
var ladoB = parseFloat(prompt("Ingrese el lado B del triángulo: "))
var ladoC = parseFloat(prompt("Ingrese el lado C del triángulo: "))

// Calcular el perímetro del triángulo
var perimetro = ladoA + ladoB + ladoC

// Mostrar el resultado
console.log("El perímetro del triángulo es: " + perimetro)
