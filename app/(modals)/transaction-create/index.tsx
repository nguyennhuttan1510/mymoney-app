import React, {useState} from 'react';
import {Alert, LayoutChangeEvent, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import {useRouter} from "expo-router";
import {useTransaction} from "@/hooks/useTransaction";

interface DimensionType {
    height: number;
}

export default function TransactionCreate() {
    const [value, setValue] = React.useState('');
    const [date, setDate] = useState(new Date());
    const router = useRouter()
    const {transaction, setTransaction} = useTransaction()

    console.log('transaction', transaction)

    const isDisabledCreateTransaction = !transaction.amount || !transaction.wallet || !transaction.type

    const handleSubmitTransaction = () => {
        Alert.alert("Thông báo", `Bạn đã nhập tạo giao dịch ${transaction.amount} - ${transaction.wallet?.walletType} - ${transaction.type.title} - ${transaction.description}`);
    };

    const onChangeAmount = (amount: string) => {
        setTransaction(prevState => ({...prevState, amount: amount}))
    }

    const handleSubmitEditing = () => {
        Alert.alert("Thông báo", `Bạn đã nhập: ${value}`);
        setValue(""); // Xóa nội dung sau khi nhập
    };

    return (
        <View style={{flex: 1}}>
            <View className='flex flex-col gap-y-4 p-4'>
                <View className='flex flex-row items-center gap-x-4'>
                    <View className='w-1/6'>
                        <AntDesign name="wallet" size={24} color="black"/>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            router.push('/(modals)/transaction-create/wallet-selection')
                        }}
                        className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                        <Text
                            className='text-xl text-black'>{transaction.wallet?.walletType || 'Ví tiêu dùng chính'}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                    </TouchableOpacity>
                </View>

                <View className='flex flex-row items-center gap-x-4'>
                    <View className='w-1/6'>
                        <Text className='text-center bg-gray-300 border border-gray-100 px-2 py-3 rounded-lg'>VND</Text>
                    </View>
                    <View className='flex-1 flex border-b border-b-gray-200 py-3'>
                        <Text className='text-sm text-gray-500'>Số tiền</Text>
                        <TextInput
                            className='text-xl font-bold text-lg'
                            onChangeText={onChangeAmount}
                            value={transaction.amount}
                            keyboardType="numeric" // Chỉ hiển thị bàn phím số
                            placeholder='Nhập số tiền'
                            returnKeyType="done" // Nút "Nhập" trên bàn phím
                            onSubmitEditing={handleSubmitEditing} // Xử lý khi nhấn nút "Nhập"
                            maxLength={10} // Giới hạn số ký tự nếu cần
                        />
                    </View>
                </View>

                <View className='flex flex-row items-center gap-x-4'>
                    <View className='w-1/6'>
                        <View className='w-12 h-12 rounded-full bg-gray-300'>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            router.push('/(modals)/transaction-create/transaction-type')
                        }}
                        className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                        <Text className='text-xl text-gray-500'>{transaction.type?.title || 'Chọn nhóm'}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                    </TouchableOpacity>
                </View>

                <View className='flex flex-row items-center gap-x-4'>
                    <View className='w-1/6'>
                        <AntDesign name="form" size={24} color="black"/>
                    </View>
                    <TouchableOpacity onPress={() => {
                        router.push('/(modals)/transaction-create/note')
                    }} className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                        <Text className='text-xl text-gray-500'>{transaction?.description || 'Ghi chú'}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                    </TouchableOpacity>
                </View>

                <View className='flex flex-row items-center gap-x-4'>
                    <View className='w-1/6'>
                        <AntDesign name="calendar" size={24} color="black"/>
                    </View>
                    <View
                        className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                        {/*<Text onPress={() => setShow(true)}>{date.toLocaleDateString()}</Text>*/}
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                if (selectedDate) setDate(selectedDate);
                            }}
                        />
                    </View>
                </View>
            </View>

            <View className='absolute bottom-10 px-4 flex w-full flex-col gap-y-3'>
                <TouchableOpacity
                    disabled={isDisabledCreateTransaction}
                    onPress={handleSubmitTransaction}
                    style={{backgroundColor: isDisabledCreateTransaction ? '#DEDFE4' : 'black'}}
                    className='flex-row items-center justify-center gap-x-4 rounded-lg px-4 py-2'>
                    <Text className='text-white font-bold text-xl '>Tạo giao dịch</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        router.back()
                    }}
                    className='flex-row items-center justify-center gap-x-4 bg-red-600 rounded-lg px-4 py-2'>
                    <Text className='text-white font-bold text-xl '>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
