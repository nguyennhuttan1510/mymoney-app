import React from 'react';
import {Image, Text, View} from "react-native";
import tinyColor from "tinycolor2";
import {useTheme} from "@react-navigation/native";
import Format, {TRANSACTION_TYPE} from "@/utils/format";

interface TransactionItem {
    id: string;
    type: TRANSACTION_TYPE;
    amount: number;
    date: string;
    description?: string;
    category: string;
}

interface TransactionItemProps extends Omit<TransactionItem, 'date' | 'id'> {
    children?: React.ReactNode
}

interface TransactionGroupTitleProps extends Partial<Pick<TransactionItem, 'date'>> {
    children?: React.ReactNode
}


const Transaction = ({children}:{children: React.ReactNode} ) => {
    return (
        <View className='flex flex-col gap-2'>{children}</View>
    );
};

Transaction.GroupTitle = (props: TransactionGroupTitleProps) => {
    const {date, children} = props
    const {colors} = useTheme();
    return(
        <Text style={{color: colors.text}}>{date || children}</Text>
    )
}


Transaction.Item = (props: TransactionItemProps): React.ReactElement => {
    const {category, amount, type, description} = props
    const {colors} = useTheme();
    return (
        <View className='flex flex-row gap-2 rounded-2xl border p-2' style={{borderColor: colors.border}}>
            <Image source={require('@/assets/images/partial-react-logo.png')} className='w-8 h-8 rounded-full'/>
            <View>
                <Text style={{color: colors.text}} className='text-md font-bold'>{category}</Text>
                <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-sm'>{description}</Text>
            </View>
            <Text style={{color: colors.text}} className='flex-1 text-right'>{Format.getAmount(amount, type)}</Text>
        </View>
    )
}

export default Transaction;