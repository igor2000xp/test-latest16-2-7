import { insertDashes, isGoodSymbol, isLetter, isNumeric } from './index';

describe('helpers tests', () => {
  // it('some test', () => {
  //   expect(1).toEqual(1);
  // });

  it('returnn true if isNumeric conscists number, test validator', () => {
    expect(isNumeric('123')).toEqual(true);
  });

  it('returnn false if isNumeric conscists letters, test validator', () => {
    expect(isNumeric('Abc123')).toEqual(false);
  });

  it('returnn true if isLetter conscists only letters, test validator', () => {
    expect(isLetter('Adcy')).toEqual(true);
  });

  it('returnn false if isLetter conscists not only letters, test validator', () => {
    expect(isLetter('ABCY123_')).toEqual(false);
  });

  it('returnn true if isGoodSymbol conscists only letters or numer symbols, test validator', () => {
    expect(isGoodSymbol('Abcy123')).toEqual(true);
  });

  it('return "AB-CD-12" insertDashes("abcd12")', () => {
    expect(insertDashes('abcd12')).toEqual('AB-CD-12');
  });
  it('return "" insertDashes(null)', () => {
    expect(insertDashes(undefined)).toEqual('');
  });
  it('return "AB-CD-12" insertDashes("ab-c-d-12")', () => {
    expect(insertDashes('ab-c-d-12')).toEqual('AB-CD-12');
  });
  it('', () => {
    expect(insertDashes('12abcd')).toEqual('12-AB-CD');
  });
});