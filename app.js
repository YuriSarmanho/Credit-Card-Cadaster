
class App{
    constructor(){
        this.cpf = document.getElementById("cpf")
        this.cardNumber = document.getElementById("CardNumber")
        this.dueDate = document.getElementById("DueDate")

        this.specialCaracters = new SpecialCaracters();
    }

    AddCpfCaracters(){
        this.specialCaracters.implementCpfCaracters(cpf);
    }
    AddCardNumberSpace(){
        this.specialCaracters.cardNumberSpace(CardNumber);
    }
    AddDueDateCaracter(){
        this.specialCaracters.DueDate(this.DueDate)
    }

}
const app = new App();