import 'react-native-reanimated';
import {Image, StyleSheet, Platform, SafeAreaView, View, Text, ScrollView, Pressable} from 'react-native';
import tinyColor from 'tinycolor2';
import {useNavigation, useTheme} from "@react-navigation/native";
import {Link} from "expo-router";
import Transaction from "@/components/Transaction";
import {TRANSACTION_TYPE} from "@/utils/format";
import {AntDesign} from "@expo/vector-icons";
import WalletCard, {WalletCardContent} from "@/components/wallet/WalletCard";
import React from "react";

export default function HomeScreen() {
    const {colors} = useTheme()
    const titleGray = tinyColor(colors.text).brighten(50).toString()
    const navigation = useNavigation();

    const onPressWallet = () => {
        navigation.navigate('transaction')
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
                        <WalletCard onPress={onPressWallet} walletType='Ví thanh toán' amount={'100,780,000'}/>
                        <WalletCard onPress={onPressWallet} walletType='Ví thanh toán' amount={'100,780,000'}/>
                        <WalletCard onPress={onPressWallet} walletType='Ví thanh toán' amount={'100,780,000'}/>
                        <WalletCard onPress={onPressWallet} walletType='Ví thanh toán' amount={'100,780,000'}/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
