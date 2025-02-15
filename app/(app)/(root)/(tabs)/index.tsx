import 'react-native-reanimated';
import {Image, StyleSheet, Platform, SafeAreaView, View, Text, ScrollView, Pressable} from 'react-native';
import tinyColor from 'tinycolor2';
import {useNavigation, useTheme} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {WalletCardBase} from "@/components/wallet/WalletCardBase";
import {WalletType} from "@/components/wallet/type";

const mockupWallets: Array<WalletType> = [
    {
        id: 1,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 2,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 3,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 4,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
]

export default function HomeScreen() {
    const {colors} = useTheme()
    const titleGray = tinyColor(colors.text).brighten(50).toString()

    const onPressWallet = () => {
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View className='p-2 h-fit'>
                <View className='flex flex-row gap-x-4 p-4 mb-4'>
                    <View className='flex-1 border py-2 px-4 rounded-lg' style={{borderColor: colors.border}}>
                        <Text style={{color: titleGray}} className='text-md'>Tổng tài sản</Text>
                        <Text style={{color: colors.text}} className='text-2xl'><Text
                            style={{color: titleGray}}>VND</Text> 341,880,000</Text>
                    </View>
                    <View className='border p-4 rounded-lg' style={{borderColor: colors.border}}>
                        <AntDesign name="piechart" size={30} color="black"/>
                    </View>
                </View>
            </View>

            <View className='p-4 rounded-tl-3xl rounded-tr-3xl flex-1'
                  style={{backgroundColor: colors.background}}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View className='flex flex-col gap-y-4 pb-[80px]'>
                        {Array.isArray(mockupWallets) ? mockupWallets.map(wallet => (
                            <WalletCardBase key={wallet.id} onPress={onPressWallet} walletType={wallet.walletType}
                                            amount={wallet.amount}/>
                        )) : null}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
