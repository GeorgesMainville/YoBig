class CalculatorCMD {
    static execute(msg, chaineOperation) {
        let help = "calc <number> [+,-,/,*] <number>";
        if (chaineOperation == null) {
            return;
        }

        // if (chaineOperation.length == 1) {
            //TODO
        // }

        if (chaineOperation.length != 3) {
            msg.channel.send(help);
            return;
        }

        switch (chaineOperation[1]) {
            case '+':
                if( chaineOperation[0] == 9 && chaineOperation[2] == 10) {
                    msg.channel.send("21");
                    msg.channel.send("you stoopid");
                    return;
                }
                msg.channel.send(parseInt(chaineOperation[0]) + parseInt(chaineOperation[2]));
                break; 
            case '*':
                msg.channel.send(chaineOperation[0] * chaineOperation[2]); //TODO
                break; 
            case '-':
                msg.channel.send(chaineOperation[0] - chaineOperation[2]); //TODO
                break; 
            case '/':
                msg.channel.send(chaineOperation[0] / chaineOperation[2]); //TODO
                break; 
            default:
                msg.channel.send(help);
                break; 
        }
    }

    // print(){} TODO
}

module.exports = CalculatorCMD