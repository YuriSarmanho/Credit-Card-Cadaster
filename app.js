//Colocar todas essa funções em um arquivo responsável e refatorar o código
class App{
    constructor(){
        this.cpf = document.getElementById("cpf")
        this.cardNumber = document.getElementById("CardNumber")
        this.dueDate = document.getElementById("DueDate")
        this.specialCaracters = new SpecialCaracters();
    }
    implementCpfCaracters(){
        if(cpf.value.length == 3 || cpf.value.length == 7){
            return cpf.value += "."
        }else if(cpf.value.length == 11){
            return cpf.value += "-"
        }    
    }
    cardNumberSpace(){
        if(CardNumber.value.length == 4 ||CardNumber.value.length == 9 ||CardNumber.value.length == 14){
            return CardNumber.value += " "
        }
    }
    DueDate(){
        if(DueDate.value.length == 2){
            return DueDate.value += "/"
        }
    }
}
const app = new App();