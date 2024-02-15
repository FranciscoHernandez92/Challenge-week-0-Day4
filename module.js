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
