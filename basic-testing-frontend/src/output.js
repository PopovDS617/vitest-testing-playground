export function generateResultText(calcualtionResult) {
  let resultText = '';

  if (calcualtionResult === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calcualtionResult !== 'no-calc') {
    resultText = 'Result: ' + calcualtionResult;
  }

  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}
