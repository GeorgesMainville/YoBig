class CalculatorCMD {

    constructor(msg, chaineOperation) {
        this.msg = msg;
        this.chaineOperation = chaineOperation;
        this.help = "Please use this format: 5+1-3*5 OR 5 + 1 - 3 * 5";
        this.counter = 0;
    }

    print(value) {
        if (this.msg == null) {
            this.counter++;
            this.testValue = value;
            return;
        }

        this.msg.channel.send(value);
    }

    execute() {

        if (this.chaineOperation == null) {
            return;
        }

        if (this.chaineOperation.length < 3 && this.chaineOperation.length !== 1) {
            this.print(help);
        }

        if (this.chaineOperation.length === 1) {
            this.print(eval(chaineOperation[0]));
            // TODO: Make 9+10 return 21
        }

        if (this.chaineOperation.length === 3) {
            if (this.chaineOperation[0] == 9 && this.chaineOperation[2] == 10) {
                this.print('21');
                this.print('you stoopid');
            } else {
                let result = eval(this.chaineOperation.join(' '));
                this.print(result);
            }
        }
    }
}

module.exports = CalculatorCMD;