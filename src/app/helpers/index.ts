const isNumeric = (input: string): boolean => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

const isLetter = (input: string): boolean => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(input);
}

export const insertDashes = (input: string | undefined): string => {
  if (!input) {
    return '';
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
        letterCount = !toggleLetteToNumber ? 0 : letterCount;
        result += toggleLetteToNumber ? input[i] : '-' + input[i];
      } else {
        result += input[i - 1] === '-' ? '' : input[i];
      }
    }
  }
  return result;
}
