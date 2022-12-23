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

// vue js calculator
const app = Vue.createApp({
    data() {
        return {
            result: "",
            prev: "",
            operation: ""
        }
    },
    methods: {
        clear() {
            this.result= ""
        },
        write(num) {
            this.result += num
        },
        delet() {
            let array = Array.from(this.result)
            array.pop()
            this.result = array.join("")
        },
        operating(oper) {
            if(this.result === "") return
            if(this.prev !== "") {
                this.operate()
            }
            this.operation = oper
            this.prev = this.result
            this.result = ""
        },
        operate() {
            let curr;
            switch(this.operation) {
                case "+":
                    curr = parseFloat(this.prev) + parseFloat(this.result)
                    break
                case "-":
                    curr = parseFloat(this.prev) - parseFloat(this.result)
                    break
                case "x":
                    curr = parseFloat(this.prev) * parseFloat(this.result)
                    break
                case "/":
                    curr = parseFloat(this.prev) / parseFloat(this.result)
                    break
            }
            this.operation = ""
            this.result = curr
            this.prev = ""
        }
    },
})

const vm = app.mount("#app")













