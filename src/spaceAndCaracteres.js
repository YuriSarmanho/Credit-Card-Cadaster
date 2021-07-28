class SpecialCaracters {
    constructor() {
        this.Helper = new PositionHelper();
    }
    implementCpfCaracters(cpf) {
        if (this.Helper.isDashPosition(cpf)) {
            return cpf.value += "."
        } else if (this.Helper.isDotPosition(cpf)) {
            return cpf.value += "-"
        }
    }
    cardNumberSpace() {
        if (this.Helper.isCardNumberSpace(CardNumber)) {
            return CardNumber.value += " "
        }
    }
    dueDate() {
        if (this.Helper.isBackSlashPosition(DueDate)) {
            return DueDate.value += "/"
        }
    }
}


