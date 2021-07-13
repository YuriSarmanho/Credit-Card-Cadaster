export default class ImplementSpecialCaracters{
    constructor(){
        this.cpf = document.getElementById("cpf")
    }
    cardNumeberSpace(){
    }
    implementCpfCaracters(){
        if(this.cpf.value.length == 3 || this.cpf.value.length == 7){
            return cpf.value += "."
        }else if(cpf.value.length == 11){
            return cpf.value += "-"
        }
    }
    dueDate(){

    }
    
}