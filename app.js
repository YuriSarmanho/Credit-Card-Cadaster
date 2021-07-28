// import Helper from './src/Helper'

// nome de classe: começa com maiuscula ex.: Helper 
// PascalCase 

// nome de métodos ou funções
// lowerCase + camelCase

// nome de variáveis
// camelCase
// exceção (constantes)

// Calcular radianos
// pi = 3.14....
// PI_VALUE = 3.14.....

// javascript
// let, var, const
// let -> var (escopo fechado)
// const numero = 10

class App {
    constructor() {
        this.cpf = document.getElementById("cpf")
        this.cardNumber = document.getElementById("CardNumber")
        this.dueDate = document.getElementById("DueDate")

        this.specialCaracters = new SpecialCaracters();
    }

    AddCpfCaracters() {
        this.specialCaracters.implementCpfCaracters(cpf);
    }
    AddCardNumberSpace() {
        this.specialCaracters.cardNumberSpace(CardNumber);
    }
    AddDueDateCaracter() {
        this.specialCaracters.dueDate(DueDate)
    }

}
const app = new App();