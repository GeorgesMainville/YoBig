var expect = require('chai').expect;
var itParam = require('mocha-param').itParam;
var CalculatorCMD = require('../Features/calculator');

describe('Calculator tests', function () {

   const invalidArgsArray = [

      [], //null

      // For arguments separated by a spacebar (ex: 9 + 10)
      ['sdfsdfsdf', 'aaa', 'sdfsdfs'], //contains text
      ['9', '+', 'test'], // contains one invalid arg
      ['9', '+'], // contains two valid args

      // For math equation in one single argument (ex: 9+10)
      ['9+'], // operation without second argument
      ['9+a'] // contains a caracter
   ];

   itParam('Execute_WhenCalledWithInvalidArgs_PrintsHelp', invalidArgsArray, (args) => {

      // Arrange
      let calculator = new CalculatorCMD(null, args);
      let expected = calculator.help;

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
   });

   it('Execute_WhenCalledWith3ValidArgs_PrintsResult', function (done) {
      // Arrange
      let expected = 20;
      let calculator = new CalculatorCMD(null, ['10', '+', '10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });
});


