//sem o type = "module", e colocando diretamete a função estava  funcionando
//mas nao esta funcionando quando é class 
//import ImplementSpecialCaracters from './src/spaceAndCaracteres.js'
function cpfApp(){
    cpf = document.getElementById("cpf")
    if(cpf.value.length == 3 || cpf.value.length == 7){
        return cpf.value += "."
    }else if(cpf.value.length == 11){
        return cpf.value += "-"
    }
}
// class App{
//     constructor(){
//         this.SpecialCaracters = new ImplementSpecialCaracters();
//     }
//     init(){
//         this.SpecialCaracters.implementCpfCaracters();
//     }
// }
// document.addEventListener("DOMContentLoaded", function(){
//     const app = new App();
//     app.init();
// })