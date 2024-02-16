// 1.
export const deleter = (str) =>{
  if(str.length < 3){
    return ' imposible remove letters.'
  }
  const string = str.slice(1, -1)
  return string
}
// 2. 
export const isPalin = (r) =>{
  // tambien se puede crear una constante directamente: const lowerCase = r.toLowerCaser()
  const word = r.split('').reverse('').join('')
  return word.toLowerCase() === r.toLowerCase()
}
//3. 
export const vocals = (w) => {
  let sum = 0
  for (let i = 0; i < w.length; i++){
   if(w[i] === 'a' || w[i] === 'e' || w[i] === 'i' || w[i] === 'o' || w[i] === 'u'){
    sum++
   }
  } return sum 
} 
// Otra forma
const countVocals = (inputWord) => {
  const lowerWord = inputWord.toLowerCase()
  const vowels =  ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü']
  let counter = 0 
  for (let i = 0; i < lowerWord.length; i++ ){
    if (vowels.includes(lowerWord[i])){
      counter++  
    }
  } return counter
}
//4.
export const isPangram = (inputString) => {
  const lowerString = inputString.toLowerCase()
  const alphabet = ['abcdefghijklmnopqrstuvwxyz']
  for (let i = 0; i < alphabet.length; i++){
    if (!lowerString.includes(alphabet[i])){
      return false
    }
  } return true 
}
//5.
export const allVocals = (v) => {
  return v.includes('a' && 'e' && 'i' && 'o' && 'u') 
}
//6.
export const countDown = (d) => {
  let count = []
  while (d >= 0){
    count.push(d)
    d--
  } return count.join(', ')
  }
//7.
export const calculateAge = (year) =>{
  const now = new Date() //esto lo que hace es que te da el valor de la fecha actual.
  const currentYear = now.getFullYear() //jugar con la propiedad .get... e indicar la funcion que te interesa.
  return  currentYear - year
}
//8.
export const major = (o) => {
  if(o >= 18){
    return 'you can go to jail'
  }return 'you are a teenager'
}
//Otra forma para calcular segun el año de nacimiento si eres mayor de edad
export const isAdult = (dateIso) =>{
  const birthDate = new Date(dateIso)
  const now = new Date()
  const currentYear = now.getFullYear()
  const age = currentYear - birthDate.getFullYear()
  if( age >= 18){
    return 'estas cascao'
  } return 'eres un pipiolo'
}
//9.
export const random = () => {
  const n = Math.random()
  const result = Math.trunc(n * 7)
  return result   
}
for (let i = 0; i < 7; i++) {
  random()
}
//Otra forma
export const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1
}
//10.

//11.
export const game = (play) =>{
  const myOptions = ['rock', 'paper', 'scissor']
  const computerOption = myOptions[Math.floor(Math.random() * myOptions.length)]
  if((play === 'rock'  && computerOption === 'scissor') || 
     (play === 'paper' && computerOption === 'rock')  ||
     (play === 'scissor' && computerOption === 'paper')){
    return `${play} v ${computerOption} you win` 
  } else if (play === computerOption){
    return `${play} v ${computerOption} its a tie`
  }
  return `${play} v ${computerOption} sorry, try again`
}

//12.
export const randomName = (a, b) => {
  const randomUserName = a[Math.floor(Math.random() * a.length)]
  const randomLastName = b[Math.floor(Math.random() * b.length)]
 return `Me llamo ${randomUserName} y mi apellido es ${randomLastName}`
}
//13.
export const calculateTips = (bill, percentage) =>{
  const tip = (bill * percentage) / 100
  const totalToPay = bill + tip
  return {total: bill.toFixed(2), //.toFixed  limita la cantidad de decimales que indiques en el parentesis
    tip: tip.toFixed(2),
    totalToPay: totalToPay.toFixed(2)
  }
}

