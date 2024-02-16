//1. 
import { deleter } from "./module.js"
console.log(deleter('palmera'))
console.log(deleter('un'));
//2.
import { isPalin } from "./module.js"
console.log(isPalin('paco'));
console.log(isPalin('oso'));
console.log(isPalin('Oso'));
//3.
import { vocals } from "./module.js";
console.log(vocals('santana'));
console.log(vocals('cartel'));
//4
import { isPangram } from "./module.js";
console.log(isPangram('La vuelta al mundo en ochenta dias'))
console.log(isPangram('Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.'));
//5. 
import { allVocals } from "./module.js";
console.log(allVocals('paco'));
console.log(allVocals('murcielago'));
//6.
import { countDown } from "./module.js";
console.log(countDown(15));
console.log(countDown(7));
//7.
import { calculateAge } from "./module.js";
console.log(calculateAge(1992));
//8.
import { major } from "./module.js";
console.log(major(12));
console.log(major(24));
//Otra manera para calcular segun el año de nacimiento si eres mayor de edad
import { isAdult } from "./module.js";
console.log(isAdult('1998-12-31'));
console.log(isAdult('2010-12-31'));
//9.
import { random } from "./module.js";
console.log(random());
import { rollDie } from "./module.js";
console.log(rollDie());
//10.

//11.
import { game } from "./module.js";
console.log(game('paper'));
console.log(game('rock'));
console.log(game('scissor'));
//12
import { randomName } from "./module.js";
console.log(randomName(['fran', 'danielle', 'antonio', 'diego', 'marcos'], ['sanchez', 'hernandez', 'lopez', 'perez', 'ramirez']));
console.log(randomName(['fran', 'danielle', 'antonio', 'diego', 'marcos'],['sanchez', 'hernandez', 'lopez', 'perez', 'ramirez']));
//13
import { calculateTips } from "./module.js";
console.log(calculateTips(2000, 10));
console.log(calculateTips(180,7));
//14
