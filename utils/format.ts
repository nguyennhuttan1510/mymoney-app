import moment from "moment";

require("moment/locale/vi");
moment.locale('vi')

export enum TRANSACTION_TYPE {
    OUTCOME = 'outcome',
    INCOME = 'income',
}

const formatDate = (date: string | Date, format: string = 'DD [thg] MM YYYY, dddd'): string => {
    return moment(date).format(format)
}

const getAmount = (amount: number, type: TRANSACTION_TYPE = TRANSACTION_TYPE.OUTCOME) => {
    if (!amount || amount < 0) throw new Error('Invalid amount')
    const currency = Intl.NumberFormat('vi').format(amount)
    switch (type) {
        case TRANSACTION_TYPE.INCOME:
            return `${currency}`
        default:
            return `-${currency}`
    }
}

const Format = {
    getAmount,
    formatDate
}

export default Format