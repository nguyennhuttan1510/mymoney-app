import React from 'react';
import {GestureResponderEvent, Pressable, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import tinyColor from "tinycolor2";
import {ViewProps} from "react-native/Libraries/Components/View/ViewPropTypes";

interface WalletCardBaseProps extends ViewProps {
    onPress?: (event: GestureResponderEvent) => void
    header?: React.ReactNode
    footer?: React.ReactNode
}

export interface WalletCardContentProps {
    amount: number | string
    nickname?: string
    walletType: string
}

type WalletCardProps = WalletCardBaseProps & WalletCardContentProps

export const WalletCardWrapper = (props: WalletCardBaseProps) => {
    const {onPress, children, header, footer, ...rest} = props
    const {colors} = useTheme()

    return (
        <Pressable onPress={onPress}>
            <View className='flex flex-col gap-2 rounded-2xl border overflow-hidden'
                  style={{borderColor: colors.border}} {...rest}>
                {header}
                {children}
                {footer}
            </View>
        </Pressable>
    );
};


export const WalletCardContent = (props: WalletCardContentProps) => {
    const {walletType = 'Không xác định', amount = 0} = props
    const {colors} = useTheme()
    const titleGray = tinyColor(colors.text).brighten(50).toString()
    return (
        <View className='p-4'>
            <View className='border-b pb-4' style={{borderColor: colors.border}}>
                <Text className='font-bold'>{walletType}</Text>
            </View>
            <View className='flex justify-end items-end pt-4'>
                <Text style={{color: colors.text}} className='text-lg'><Text
                    style={{color: titleGray}}>VND</Text> {amount}</Text>
            </View>
        </View>
    )
}


const WalletCard = (props: WalletCardProps) => {
    const {walletType, nickname = 'Nickname', amount, ...rest} = props
    return (
        <WalletCardWrapper {...rest}>
            <View className='p-4 bg-gray-300'>
                <Text>{nickname}</Text>
            </View>
            <WalletCardContent walletType={walletType} amount={amount}/>
        </WalletCardWrapper>
    )
}

export default WalletCard;