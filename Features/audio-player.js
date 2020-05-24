const fs = require('fs')

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
        this.defaultExt = '.m4a';
        this.defaultDir = './Audio/';
    }

    async execute() {

        if (this.args == null || this.args.length === 0 || this.args[0] === 'help' || this.args[0] === '') {
            this.print(this.help);
            return;
        }

        if (this.args.length > 1) {
            this.print(this.help);
            return;
        }

        if (this.args[0] === 'list') {
            this.printList(this.defaultDir);
        }
        else {
            let filePath = this.defaultDir + this.args[0] +  this.defaultExt;
            await this.playAudio(filePath);
        }
    }

    print(value) {
        if (this.msg == null) {
            this.counter++;
            this.testValue = value;
            return;
        }

        this.msg.channel.send(value);
    }

    printList(dir) {
        let files = this.getFiles(dir);
        let msg = ':musical_note: \u2009 Audio files  :musical_note: \n' +
                  '----------------------- \n';
        files.forEach(element => {
            msg += element.substr(0, element.lastIndexOf('.')) + '\n';
        });
        this.print(msg);
    }

    async playAudio(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                this.print("The file: " + this.args[0] + " does not exist. Type yobig tyl list to see available files.");
                return;
            }
        } catch (err) {
            console.error(err)
            return;
        }

        let voiceChannel = this.msg.member.voice.channel;

        if (voiceChannel == null) {
            this.print('Please join a channel to run a audio file.');
            return;
        }

        const connection = await voiceChannel.join();

        const dispatcher = connection.play(filePath, {
            volume: 0.7,
        });

        dispatcher.on('finish', () => {
            dispatcher.destroy();
            voiceChannel.leave();
        });
    }

    // TODO det file function
    //getFile(dir, fileName) {
        //let files = getFiles(dir);
        //let files.find(fileName);
    //}

    getFiles(dir){    
        if (!fs.existsSync(dir)){
            return;
        }
    
        return fs.readdirSync(dir);
    };

}

module.exports = AudioPlayerCMD;