var expect = require('chai').expect;
const CalculatorCMD = require('../Features/calculator');

describe('Calculator tests', function () {
    
    it('Execute_WhenCalledWith3ValidArgs_PrintsResult', function (done) {
       // Arrange
       let expected = 20;
       let calculator = new CalculatorCMD(null,['10','+','10']);

       // Act
       calculator.execute();

       // Assert
       expect(calculator.testValue).to.equal(expected);
       expect(calculator.counter).to.equal(1);
       done();
    });

    it('Execute_WhenCalledWithInvalidArgs_PrintsHelp', function (done) {
        // Arrange
        let calculator = new CalculatorCMD(null,['sdfsdfsdf','aaa','sdfsdfs']);
        let expected = calculator.help;
 
        // Act
        calculator.execute();
 
        // Assert
        expect(calculator.testValue).to.equal(expected);
        expect(calculator.counter).to.equal(1);
        done();
     });
});


