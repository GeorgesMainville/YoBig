class CalculatorCMD {

    constructor(msg, chaineOperation) {
        this.msg = msg;
        this.chaineOperation = chaineOperation;
        this.help = "Please use this format: `5+1-3*5` OR `5 + 1 - 3 * 5`";
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

    calculer(calcul) {
        try {
            let regex = new RegExp("^[0-9\\.\\+\\-\\*\\/\\%\\(\\) ]*$");
            
            if(calcul == '' || !regex.test(calcul)) {
                return this.help;
            }

            return eval(calcul); 

        } catch (e) {
            return this.help;
        }
    }

    execute() {
        if (this.chaineOperation == null || this.chaineOperation.length == 0) {
            this.print(this.help);
            return;
        }

        let calcul = this.chaineOperation.join('').replace(",", ".").trim();

        if (calcul === '9+10') {
            this.print('21');
            this.print('you stoopid');
        }
        else {
            let result = this.calculer(calcul); 
            this.print(result);
        }
    }
}

module.exports = CalculatorCMD;