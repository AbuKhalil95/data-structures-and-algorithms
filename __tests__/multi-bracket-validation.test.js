const bracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('bracket Validation tests class-013', ()=> {
  it('Can successfully match happily', ()=> {
    let string = '(({[[][]]}()){})';
    expect(bracketValidation(string)).toBeTruthy;
  });

  it('Can match bad balance', ()=> {
    let string = '(({[]]}()){})';
    expect(bracketValidation(string)).toBeFalsy;
  });

  it('Can detect extra closing parenthesis', ()=> {
    let string = '(({[[][]]}()){})';
    expect(bracketValidation(string)).toBeFalsy;
  });

  it('Can see empty parenthesis and return true', ()=> {
    let string = 'this has no parenthesis';
    expect(bracketValidation(string)).toBeTruthy;
  });

  it('Can detect early closing bracket', ()=> {
    let string = ']this has one parenthesis';
    expect(bracketValidation(string)).toBeFalsy;
  });
});
