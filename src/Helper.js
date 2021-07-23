// export default class Helper{
// mais especifico no nome
// StringHelper
class PositionHelper {
    isDashPosition(cpf) {
        return cpf.value.length == 3 || cpf.value.length == 7
    }
    isDotPosition(cpf) {
        return cpf.value.length == 11
    }
    isCardNumberSpace(CardNumber) {
        return this.isSpacePosition(CardNumber)
    }
    isBackSlashPosition(DueDate) {
       return DueDate.value.length == 2
    }
    isSpacePosition(CardNumber) {
        return CardNumber.value.length == 4 || CardNumber.value.length == 9 || CardNumber.value.length == 14
    }
}