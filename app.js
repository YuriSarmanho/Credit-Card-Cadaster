import ImplementSpecialCaracters from './src/spaceAndCaracteres.js'

class App{
    constructor(){
        this.SpecialCaracters = new ImplementSpecialCaracters();
        this.form = document.querySelector("form")
        this.cpf = document.getElementById("cpf")
    }
    init(){
        Object.onkeyup = this.SpecialCaracters.implementCpfCaracters();
        
    }
}
document.addEventListener("DOMContentLoaded", function(){
    const app = new App();
    app.init();
})