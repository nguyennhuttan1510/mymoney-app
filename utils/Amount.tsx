import React from 'react';
import Format, {TRANSACTION_TYPE} from "@/utils/format";
import {Text, TextProps, ViewProps} from "react-native";

interface AmountProps extends TextProps {
    amount: number
    type: TRANSACTION_TYPE
}

const Amount = ({amount, type, ...rest}: AmountProps) => {
    const _amount = Format.getAmount(amount)

    switch (type) {
        case TRANSACTION_TYPE.INCOME:
            return <Text style={{color: 'green'}} {...rest}>{_amount}</Text>;
        case TRANSACTION_TYPE.OUTCOME:
            return <Text style={{color: 'red'}} {...rest}>{_amount}</Text>;
        default:
            return <Text {...rest}>{_amount}</Text>;
    }
};

export default Amount;