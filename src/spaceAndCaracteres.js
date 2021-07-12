export default class ImplementSpecialCaracters{
    constructor(){
        this.cpf = document.getElementById("cpf")
    }
    cardNumeberSpace(){
    }
    implementCpfCaracters(){
       console.log(this.cpf.value.length)
        if(this.cpf.value.length == 3 || this.cpf.value.length == 7){
            console.log("entrou")
            return cpf.value += "."
        }else if(cpf.value.lenght == 11){
            return cpf.value += "-"
        }
    }
    dueDate(){

    }
    
}