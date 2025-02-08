import React from 'react';
import {Pressable, PressableProps, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import tinyColor from "tinycolor2";
import WalletCardWrapper from "@/components/wallet/components/WalletCardWrapper";

export interface WalletCardBaseProps extends PressableProps {
    amount: number | string
    nickname?: string
    walletType: string
}

export const WalletCardBase = (props: WalletCardBaseProps) => {
    const {walletType = 'Không xác định', amount = 0, nickname = 'Nickname', ...rest} = props
    const {colors} = useTheme()
    const titleGray = tinyColor(colors.text).brighten(50).toString()
    return (
        <Pressable {...rest}>
            <WalletCardWrapper
                header={
                    <View className='p-4 bg-gray-300'>
                        <Text>{nickname}</Text>
                    </View>
                }
            >
                <View className='p-4'>
                    <View className='border-b pb-4' style={{borderColor: colors.border}}>
                        <Text className='font-bold'>{walletType}</Text>
                    </View>
                    <View className='flex justify-end items-end pt-4'>
                        <Text style={{color: colors.text}} className='text-lg'><Text
                            style={{color: titleGray}}>VND</Text> {amount}</Text>
                    </View>
                </View>
            </WalletCardWrapper>
        </Pressable>
    )
}