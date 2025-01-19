export enum TRANSACTION_TYPE {
    EXPENSE,
    INCOME
}

const getAmount = (amount: number, type: TRANSACTION_TYPE = TRANSACTION_TYPE.EXPENSE) => {
    if(!amount || amount < 0) throw new Error('Invalid amount')
    if (type === TRANSACTION_TYPE.INCOME) {
        return `${amount} đ`
    } else {
        return `-${amount} đ`
    }
}

const Format = {
    getAmount
}

export default Format