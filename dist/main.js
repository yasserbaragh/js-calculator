const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let screen = document.getElementById("screen");
const deleteBtn = document.querySelector(".del");
let previous = 0;
const equal = document.querySelector(".equal");
const reset = document.querySelector(".res");
const dot = document.querySelector(".dot");





class calc {
    constructor(curr, prev) {
        this.curr = curr
        this.prev = prev
    }

    clear() {
        this.curr = ''
    }
    del() {
        let list = Array.from(this.curr);
        list.pop();
        this.curr = list.join("");
    }

    writing(num) {
        this.curr += num
    }

    writingPoint(point) {
        let list = Array.from(this.curr)
        if (list.includes(".")) {
            return
        } else {
            this.curr += point
        }
    }

    operating(oper) {
        this.oper = oper
        this.prev = this.curr;
        this.curr = ""
    }

    operation() {
        let comput
        if (isNaN(this.prev) || (isNaN(this.curr))) {return} else {
        switch(this.oper) {
            case "+" :
                comput = parseFloat(this.prev) + parseFloat(this.curr)
                break;
            case "-" :
                comput = parseFloat(this.prev) - parseFloat(this.curr)
                break;
            case "x" : 
                comput = parseFloat(this.prev) * parseFloat(this.curr)
                break;
            case "/" : 
                comput = parseFloat(this.prev) / parseFloat(this.curr)
        } }
        this.curr = comput;
        this.oper = undefined;
        this.prev = ""
    }

    updateDisplay() {
        screen.textContent = this.curr
    }
}

let calculator = new calc("", "");

buttons.forEach(button => {
    button.onclick = function() {
        calculator.writing(button.innerHTML)
        calculator.updateDisplay();
    }
})

dot.onclick = function () {
    calculator.writingPoint(dot.textContent);
    calculator.updateDisplay();
}

operators.forEach(operator => {
    operator.onclick = function() {
        calculator.operating(operator.innerHTML);
        calculator.updateDisplay();
        
    }
})

equal.addEventListener('click', button => {
    calculator.operation()
    calculator.updateDisplay()
    calculator.clear()
})

reset.onclick = function() {
    calculator.clear()
    calculator.updateDisplay();
}

deleteBtn.onclick = function() {
    calculator.del();
    calculator.updateDisplay();
}


// theme change 
const span = document.getElementById("circle");
const buttonsaa = document.querySelectorAll(".input button");
const btnArray = Array.from(buttonsaa);
const main = document.querySelector("main");

btnArray[0].onclick = function () {
    span.className = "one";
    main.className = ""
}

btnArray[1].onclick = function () {
    span.className = "two";
    main.className = "second"
}

btnArray[2].onclick = function () {
    span.className = "three";
    main.className = "third";
}





