// Validar números.
// FALTA FAZER ESSA CORREÇÃO: Não fazer o cálculo se não for número

export function notANumber(value) {
  return isNaN(value) || value == ''
  alert(notANumber)
}

export function /* A function that calculate the IMC. */
calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
