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
    if (type === TRANSACTION_TYPE.INCOME) {
        return `${amount} đ`
    } else {
        return `-${amount} đ`
    }
}

const Format = {
    getAmount,
    formatDate
}

export default Format