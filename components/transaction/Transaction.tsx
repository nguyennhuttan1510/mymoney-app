import React from 'react';
import {Image, Text, View} from "react-native";
import tinyColor from "tinycolor2";
import {useTheme} from "@react-navigation/native";
import Format, {TRANSACTION_TYPE} from "@/utils/format";
import {CategoryType} from "@/app/(modals)/transaction-create/transaction-type";
import Amount from "@/utils/Amount";

interface TransactionProps {
    description: string | React.ReactNode
    amount: React.ReactNode | string
    title: string
    type: TRANSACTION_TYPE
    icon?: React.ReactNode | null
}

export default function Transaction(props: TransactionProps) {
    console.log('props transaction', props)
    const {amount, description, title, icon, type} = props
    const {colors} = useTheme()
    console.log('props icon transaction', icon)
    const iconDefault = <Image source={require('@/assets/images/partial-react-logo.png')}
                               className={`w-10 h-10 rounded-full`}/>


    return (
        <View className='flex flex-row gap-4 p-4'>
            <View className='w-10'>
                {typeof icon == 'undefined' ? iconDefault : icon}
            </View>
            <View>
                <Text style={{color: colors.text}} className='text-md font-bold'>{title}</Text>
                <Text style={{color: 'gray'}}
                      className='text-sm'>{description}</Text>
            </View>

            <View className='flex-1'>
                {typeof amount === 'number' ?
                    <Amount className='text-right text-md font-bold' amount={amount} type={type}/> : amount}
            </View>
        </View>
    );
};
