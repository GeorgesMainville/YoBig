class AudioPlayerCMD {
    constructor(msg, args) {
        this.msg = msg;
        this.args = args; // for now, we will only use the first argument (filename), we may support more eventually
        this.help =
            "To use the tyl command, here's the synthax: yobig tyl name \r\n" +
            +"List of available names: \r\n" +
            +"-------------------------- \r\n" +
            "ped";
        this.counter = 0;
    }

    execute() {
        if (this.args == null || this.args.length == 0 || this.args[0] === 'help' || this.args[0] === '') {
            this.print(this.help);
            return;
        }

        if (this.msg.member.voiceChannel == null) {
            this.print('Please join a channel to run a audio file.');
            return;
        }

        let voiceChannel = this.msg.member.voiceChannel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('/Audio/audio');
            console.log(dispatcher);
            dispatcher.on("end", end => {
                setTimeout(function(){
                    voiceChannel.leave()
                }, 1)
            });
        }).catch(err => console.info(err));
    }

    print(value) {
        if (this.msg == null) {
            this.counter++;
            this.testValue = value;
            return;
        }

        this.msg.channel.send(value); // TODO: Go in the voice chat and play the audio file.
    }
}

module.exports = AudioPlayerCMD;