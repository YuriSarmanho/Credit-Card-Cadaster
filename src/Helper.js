// export default class Helper{
// mais especifico no nome
// StringHelper
class Helper {
    isDashPosition(cpf) {
        return cpf.value.length == 3 || cpf.value.length == 7
    }
    isDotPosition(cpf) {
        if (cpf.value.length == 11) {
            return true
        }
        return false
    }
    isCardNumberSpace(CardNumber) {
        if (this.isSpacePosition(CardNumber)) {
            return true
        }
        return false
    }
    isBackSlashPosition(DueDate) {
        if (DueDate.value.length == 2) {
            return true
        }
        return false
    }
    isSpacePosition(CardNumber) {
        if (CardNumber.value.length == 4 || CardNumber.value.length == 9 || CardNumber.value.length == 14) {
            return true
        }
        return false
    }
}