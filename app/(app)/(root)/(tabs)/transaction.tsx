import {
    Image,
    Pressable,
    ScrollView,
    SectionList,
    SectionListData,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import tinyColor from "tinycolor2";
import {Link} from "expo-router";
import {useTheme} from "@react-navigation/native";
import {BottomSheetModal, BottomSheetScrollView} from "@gorhom/bottom-sheet";
import React, {useCallback, useEffect, useMemo, useRef} from "react";
import Animated, {Easing, Extrapolation, interpolate, ReduceMotion, useAnimatedStyle} from "react-native-reanimated";
import Wallets from "@/components/wallet/Wallets";
import {AntDesign} from "@expo/vector-icons";
import {TransactionType} from "@/hooks/useTransaction";
import Transaction from "@/components/transaction/Transaction";
import Format, {TRANSACTION_TYPE} from "@/utils/format";
import Amount from "@/utils/Amount";
import {CategoryType} from "@/app/(app)/(root)/(modals)/transaction-create/transaction-type";

type ChangeSpecificType<T, Key extends keyof T, NewType> = {
    [K in keyof T]: K extends Key ? NewType : T[K];
};

type TransactionHistoryType = ChangeSpecificType<Omit<TransactionType, 'wallet'>, 'type', Omit<CategoryType, 'children'>>


const transactionDataMockup: TransactionHistoryType[] = [
    {
        amount: 10000,
        date: new Date().toISOString(),
        description: 'Tiền điện',
        type: {
            title: 'Điện',
            type: 'outcome',
            id: 1,
        },
    },
    {
        amount: 10000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Điện',
            type: 'outcome',
            id: 1,
        }
    },
    {
        amount: 10000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Điện',
            type: 'outcome',
            id: 1,
        }
    },
    {
        amount: 20000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Nước',
            type: 'outcome',
            id: 2,
        }
    },
    {
        amount: 20000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Nước',
            type: 'outcome',
            id: 2,
        }
    },
    {
        amount: 20000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Nước',
            type: 'outcome',
            id: 2,
        }
    },
    {
        amount: 20000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Nước',
            type: 'outcome',
            id: 2,
        }
    },
    {
        amount: 20000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Nước',
            type: 'outcome',
            id: 2,
        }
    },
    {
        amount: 500000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Ăn',
            type: 'outcome',
            id: 3,
        }
    },
    {
        amount: 500000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Ăn',
            type: 'outcome',
            id: 3,
        }
    },
    {
        amount: 500000,
        date: new Date().toISOString(),
        description: '',
        type: {
            title: 'Ăn',
            type: 'outcome',
            id: 3,
        }
    }
]

const months = ['09/2024', '10/2024', '11/2024', '12/2024', '01/2025', '02/2025', '03/2025', 'Tháng trước', 'Tháng này']

export default function TransactionScreen() {
    const {colors} = useTheme()
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    // callbacks
    const handleSheetChange = useCallback((index: any) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback(() => {
        console.log('handleSnapPress')
        bottomSheetRef.current?.present();
    }, []);
    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    useEffect(() => {
        return () => {
            handleClosePress()
        }
    }, []);


    const categoryTypeMapping = (categoryType: CategoryType['type']) => {
        switch (categoryType) {
            case "outcome":
                return TRANSACTION_TYPE.OUTCOME
            case "income":
                return TRANSACTION_TYPE.INCOME
            default:
                return TRANSACTION_TYPE.OUTCOME
        }
    }

    const uniqueCategory = (transactions: TransactionHistoryType[]) => {
        return [...new Map(transactions.map(transaction => [transaction.type.id, transaction.type])).values()]
    }

    const transactionGroupByType = useMemo(() => {
            const categories = uniqueCategory(transactionDataMockup)
            return categories.map(category => {
                const result: Omit<CategoryType, 'children'> & {data: TransactionHistoryType[]} = {...category, data: []}
                const transactions = transactionDataMockup.filter(transaction => transaction.type?.id === category.id)
                result.data = transactions
                return result
            })
        }
        , [])

    return (
        <View style={{flex: 1}}>
            <View className='bg-white' style={{paddingTop: 12}}>
                <View className='mb-4'>
                    {/*<View className='flex flex-row gap-2 mb-4'>*/}
                    {/*  <Image source={require('@/assets/images/partial-react-logo.png')} className='w-10 h-10 rounded-full mb-1'/>*/}
                    {/*  <View>*/}
                    {/*    <Text style={{color: colors.text}} className='text-lg'>Nguyen Nhut Tan</Text>*/}
                    {/*    <Text style={{color: tinyColor(colors.text).darken(40).toString()}}>nguyentan1510</Text>*/}
                    {/*  </View>*/}
                    {/*</View>*/}

                    <View className='flex flex-col items-center'>
                        <Text className='text-md text-gray-400'>Số dư</Text>
                        <Text style={{color: colors.text}} className='text-xl font-bold'>9,780.39 VND</Text>
                        <Pressable className='mt-2' onPress={() => handleSnapPress()}>
                            <View style={styles.wallet}>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className={`w-6 h-6 rounded-full`}/>
                                <Text style={styles.walletTitle}>Ví thanh toán</Text>
                                <AntDesign className='ml-2' name="caretdown" size={12} color="black"/>
                            </View>
                        </Pressable>
                    </View>
                </View>

                <ScrollView className='border-b border-gray-300' horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {months.map(month => (
                        <TouchableOpacity
                            // style={{padding: 20}}
                            className=' bg-white flex flex-row justify-center items-center'>
                            <Text
                                style={{paddingHorizontal: 24, paddingVertical: 6}}
                                className='font-medium text-center text-lg'>{month}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/*<View className='bg-white p-4'>*/}
            {/*    <View className='flex flex-row justify-between items-center py-2'>*/}
            {/*        <Text>Tiền vào</Text>*/}
            {/*        <Text>0</Text>*/}
            {/*    </View>*/}
            {/*    <View className='flex flex-row justify-between items-center'>*/}
            {/*        <Text>Tiền ra</Text>*/}
            {/*        <Text className='text-right border-b border-gray-300 py-2' style={{width: '30%'}}>800000</Text>*/}
            {/*    </View>*/}
            {/*    <View className='flex flex-row justify-between py-2'>*/}
            {/*        <Text>Còn lại</Text>*/}
            {/*        <Text>135413531</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            <SectionList
                contentContainerStyle={{
                    paddingBottom: 80
                }}
                sections={transactionGroupByType}
                keyExtractor={(index) => index.toString()}
                renderSectionFooter={() => (
                    <View style={{height: 20, backgroundColor: colors.background}}>
                    </View>
                )}
                renderSectionHeader={({section}) => {
                    console.log('section', section)
                    return (
                        <View className='border-b border-gray-300 bg-white'>
                            <Transaction
                                type={categoryTypeMapping(section.type)}
                                description={`${section.data.length} giao dịch`}
                                amount={'40'}
                                title={section.title}
                                key={section.key}
                            />
                        </View>
                    )
                }}
                renderItem={({item, index, section}) => {
                    console.log('item', item)
                    return (
                        <View className='bg-white'>
                            <Transaction
                                description={item.description}
                                amount={item.amount}
                                type={categoryTypeMapping(section.type)}
                                title={Format.formatDate(item.date)}
                                key={index}
                                icon={null}
                            />
                        </View>
                    )
                }}
            />

            <BottomSheetModal
                ref={bottomSheetRef}
                onChange={handleSheetChange}
                index={0}
                snapPoints={["80%"]}
                style={{flex: 1}}
                animationConfigs={{
                    duration: 350,
                    reduceMotion: ReduceMotion.Never,
                    easing: Easing.inOut(Easing.quad),
                }}
                backdropComponent={({animatedIndex, style, animatedPosition}) => {
                    console.log('animatedIndex', animatedIndex)
                    console.log('animatedPosition', animatedPosition)
                    console.log('style', style)
                    const animatedStyle = useAnimatedStyle(() => {
                        const opacity = interpolate(animatedIndex.value, [-1, 1], [0, 0.5])
                        return {opacity}
                    })
                    return (
                        <Animated.View style={[animatedStyle, styles.backdropBottomSheetModal]}>
                            <Pressable onPress={handleClosePress}
                                       style={style}></Pressable>
                        </Animated.View>
                    )
                }}
            >
                <BottomSheetScrollView showsVerticalScrollIndicator={false}
                                       contentContainerStyle={styles.contentContainer}>
                    <Wallets/>
                </BottomSheetScrollView>
            </BottomSheetModal>
        </View>
    );
}


const styles = StyleSheet.create({
    wallet: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
        borderRadius: 6,
        // borderWidth: 1,
        // borderStyle: 'solid',
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: '#f3f3f3'
    },
    walletTitle: {
        fontSize: 16,
        fontWeight: 'medium',
    },
    contentContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    backdropBottomSheetModal: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "black",
    }
});
