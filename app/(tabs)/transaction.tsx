import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import tinyColor from "tinycolor2";
import {Link, useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import BottomSheet, {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView,
    BottomSheetView
} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo, useRef} from "react";
import {Easing, ReduceMotion} from "react-native-reanimated";
import {WalletCardWrapper, WalletCardContent} from "@/components/wallet/WalletCard";
import Wallets from "@/components/wallet/components/Wallets";

export default function TransactionScreen() {
    const {colors} = useTheme()
    const router = useRouter()
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChange = useCallback((index: any) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback(() => {
        bottomSheetRef.current?.snapToIndex(0, {
            duration: 500,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.Never,
        });
    }, []);
    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close({
            duration: 500,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.Never,
        });
    }, []);


    return (

        <SafeAreaView style={{flex: 1}}>
            <View className='p-2'>
                <View className='p-4 mb-4' style={{backgroundColor: colors.background}}>
                    {/*<View className='flex flex-row gap-2 mb-4'>*/}
                    {/*  <Image source={require('@/assets/images/partial-react-logo.png')} className='w-10 h-10 rounded-full mb-1'/>*/}
                    {/*  <View>*/}
                    {/*    <Text style={{color: colors.text}} className='text-lg'>Nguyen Nhut Tan</Text>*/}
                    {/*    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}>nguyentan1510</Text>*/}
                    {/*  </View>*/}
                    {/*</View>*/}

                    <View className='mb-4 flex flex-col items-center'>
                        <Pressable onPress={() => handleSnapPress()}>
                            <Text style={styles.titleWallet}>Ví thanh toán</Text>
                        </Pressable>
                        <Text style={{color: colors.text}} className='text-lg'>Số dư ví</Text>
                        <Text style={{color: colors.text}} className='text-2xl'>9,780.39 VND</Text>
                    </View>


                </View>
            </View>

            <View className='p-4'
                  style={{backgroundColor: colors.background, flex: 1}}>
                <View className='flex flex-row justify-between mb-4'>
                    <Text style={{color: colors.text}} className='font-bold'>Transaction</Text>
                    <Link href={'/'} style={{color: colors.text}} className='font-bold'>View All</Link>
                </View>

                <ScrollView style={{paddingHorizontal: 8}} showsVerticalScrollIndicator={false}>
                    <View className='flex flex-col gap-y-2 pb-[90px]'>
                        {/*<Transaction />*/}

                        <View className='flex flex-col gap-2'>
                            <Text style={{color: colors.text}}>6/9</Text>
                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>

                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>
                        </View>

                        <View className='flex flex-col gap-2'>
                            <Text style={{color: colors.text}}>6/9</Text>
                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>

                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>
                        </View>

                        <View className='flex flex-col gap-2'>
                            <Text style={{color: colors.text}}>6/9</Text>
                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>

                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>
                        </View>

                        <View className='flex flex-col gap-2'>
                            <Text style={{color: colors.text}}>6/9</Text>
                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>

                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>
                        </View>

                        <View className='flex flex-col gap-2'>
                            <Text style={{color: colors.text}}>5/9</Text>
                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>

                            <View className='flex flex-row gap-2 rounded-2xl border p-2'
                                  style={{borderColor: colors.border}}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className='w-8 h-8 rounded-full'/>
                                <View>
                                    <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}
                                          className='text-sm'>Dinner</Text>
                                </View>
                                <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>


            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChange}
                snapPoints={['80%']}
                index={-1}
                enablePanDownToClose={true}
            >
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    <Wallets/>
                </BottomSheetScrollView>
            </BottomSheet>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    titleWallet: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 120,
    },
    containerWallet: {
        flex: 1,
        rowGap: 16,
        // paddingBottom: 90
    }
});
