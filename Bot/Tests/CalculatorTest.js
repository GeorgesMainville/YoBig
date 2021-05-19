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

   it('Execute_WhenCalledWith3ValidArgsAddition_PrintsResult', function (done) {
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

   it('Execute_WhenCalledWith3ValidArgsMiltiplication_PrintsResult', function (done) {
      // Arrange
      let expected = 100;
      let calculator = new CalculatorCMD(null, ['10', '*', '10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWith3ValidArgsDivision_PrintsResult', function (done) {
      // Arrange
      let expected = 1;
      let calculator = new CalculatorCMD(null, ['10', '/', '10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWith3ValidArgsSubstraction_PrintsResult', function (done) {
      // Arrange
      let expected = 0;
      let calculator = new CalculatorCMD(null, ['10', '-', '10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWith3ValidArgsModulo_PrintsResult', function (done) {
      // Arrange
      let expected = 0;
      let calculator = new CalculatorCMD(null, ['2', '%', '1']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWithValidArgsParenthesis_PrintsResult', function (done) {
      // Arrange
      let expected = 100;
      let calculator = new CalculatorCMD(null, ['(10 * (5 + 5))']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWith3ValidArgsNbVirgule_PrintsResult', function (done) {
      // Arrange
      let expected = 20.4;
      let calculator = new CalculatorCMD(null, ['10.3', '+', '10,1']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(1);
      done();
   });

   it('Execute_WhenCalledWith9+10As3Args_Prints21', function (done) {
      // Arrange
      let expected = 'you stoopid';
      let calculator = new CalculatorCMD(null, ['9', '+', '10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(2);
      done();
   });

   it('Execute_WhenCalledWith9+10AsOneArg_Prints21', function (done) {
      // Arrange
      let expected = 'you stoopid';
      let calculator = new CalculatorCMD(null, ['9+10']);

      // Act
      calculator.execute();

      // Assert
      expect(calculator.testValue).to.equal(expected);
      expect(calculator.counter).to.equal(2);
      done();
   });


});


