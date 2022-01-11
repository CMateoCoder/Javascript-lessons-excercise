const esPrimo = (numeroAEvaluar, primos) => {
    
  let result = false;
  for (let divisor of primos) {

      const residuo = numeroAEvaluar % divisor
      const cociente = numeroAEvaluar / divisor

      if (residuo === 0) {
          break;
      }

      if (cociente <= divisor) {
          result = true;
          break;
      }

  }

  return result;
  
}

const main = () => {
  const numeros = Array.from({length: 20}, (x,y) => y + 3)
  let primos = [2]

  for (let aEvaluar of numeros) {
    
     if (esPrimo(aEvaluar, primos)) primos = [...primos, aEvaluar];

  }
  
  console.log(primos)
  
}

main()