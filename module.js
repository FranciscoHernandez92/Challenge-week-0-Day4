// 1.
export const deleter = (str) =>{
  const string = str.slice(1, -1)
  return string
}
// 2. 
export const palin = (r) =>{
  const word = r.split('').reverse('').join('')
  return word === r
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
//4.

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

//8.
export const major = (o) => {
  if(o >= 18){
    return 'you can go to jail'
  }return 'you are a teenager'
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
//10.

//11.
const game1 = (g, c) => {
  const r = 'rock'
  const p = 'paper'
  const s = 'scissors'
  let q = random(r, p, s)
  if((g === r ) && (c === s) || (g === p) && (c === r) || (g === s) && (c === p)){
    return `${g} v ${c} you win` 
  } return `${g} v ${c} sorry, try again`
  function random(...options) {
    const index = Math.floor(Math.random() * options.length)
    return options[index]
  }
}

export const game = (play) =>{
  const myOptions = ['piedra', 'papel', 'tijera']
  const computerOption = myOptions[Math.floor(Math.random() * myOptions.length)]
  if((play === 'piedra'  && computerOption === 'tijera') || 
     (play === 'papel' && computerOption === 'piedra')  ||
     (play === 'tijera' && computerOption === 'papel')){
    return `${play} v ${computerOption} you win` 
  } else if (play === computerOption){
    return `${play} v ${computerOption} its a tie`
  }
  return `${play} v ${computerOption} sorry, try again`
}

