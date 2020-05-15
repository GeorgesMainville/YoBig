class CalculatorCMD {
    static execute(msg, chaineOperation) {
        let help = "Please use this format: 5+1-3*5 OR 5 + 1 - 3 * 5";
        if (chaineOperation == null) {
            return;
        }

        if (chaineOperation.length < 3 && chaineOperation.length !== 1) {
            msg.channel.send(help);
        }

        if (chaineOperation.length === 1) {
            msg.channel.send(eval(chaineOperation[0]));
            // TODO: Make 9+10 return 21
        }

        if (chaineOperation.length === 3) {
            if (chaineOperation[0] == 9 && chaineOperation[2] == 10) {
                msg.channel.send('21');
                msg.channel.send('you stoopid');
            } else {
                let result = eval(chaineOperation.join(' '));
                msg.channel.send(result);
            }
        }

        if (chaineOperation.length > 3) {
            let result = eval(chaineOperation.join(' '));
            msg.channel.send(result);
        }
    }

    // print(){} TODO
}

module.exports = CalculatorCMD