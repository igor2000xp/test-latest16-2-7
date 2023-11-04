const isNumeric = (input: string): boolean => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

const isLetter = (input: string): boolean => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(input);
}

const isGoodSymbol = (input: string): boolean => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(input);
}

export const insertDashes = (input0: string | undefined): string => {
  if (!input0) {
    return '';
  }
  let input = input0.toUpperCase().split('');

  for (let i = 0; i < input.length; i++) {
    input[i] = isGoodSymbol(input[i]) ? input[i] : '';
  }
  let result = input[0];
  let letterCount = isLetter(input[0]) ? 1 : 0;
  let toggleLetteToNumber: boolean;
  if (input.length > 1) {
    for (let i = 1; i < input.length; i++) {
      letterCount = isLetter(input[i]) ? letterCount + 1 : 0;
      if (input[i] !== '-') {
        toggleLetteToNumber =
          ((((!isNumeric(input[i - 1])) && !isNumeric(input[i]))
            || (isNumeric(input[i - 1]) && isNumeric(input[i])))
            || input[i - 1] === '-')

            && !(letterCount === 3)
            ? true : false;
        letterCount = !toggleLetteToNumber ? 1 : letterCount;
        result += toggleLetteToNumber ? input[i] : '-' + input[i];
      } else {
        result += input[i - 1] === '-' ? '' : input[i];
      }
    }
  }
  return result;
}

// export const insertDashes = (input: string): string => {
//   if (!input) return '';

//   let result = '';
//   for (let i = 0; i < input.length; i++) {
//     result += isGoodSymbol(input[i]) ? input[i] : '';
//     if (i < input.length - 1) {
//       if (isLetter(input[i]) && isLetter(input[i + 1]) && (i + 1) % 2 === 0) {
//         result += '-';
//       } else if ((isLetter(input[i]) && isNumeric(input[i + 1])) || (isNumeric(input[i]) && isLetter(input[i + 1]))) {
//         result += '-';
//       }
//     }
//   }

//   return result;
// }
