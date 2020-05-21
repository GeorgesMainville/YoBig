var expect = require('chai').expect;
var itParam = require('mocha-param').itParam;
var AudioPlayerCMD = require('../Features/audio-player');

describe.only('Calculator tests', function () {
    
    const helpArgs = [
        [], //null
        [''],
        ['help']
    ];
   
    itParam('Execute_WhenCalledWithHelpOrWithNotArgs_PrintsHelp', helpArgs, (args) => {
        // Arrange
  
        let audioPlayer = new AudioPlayerCMD(null, args);
        let expected = audioPlayer.help;

        // Act
        audioPlayer.execute();

        // Assert
        expect(audioPlayer.testValue).to.equal(expected);
        expect(audioPlayer.counter).to.equal(1);
    });
});