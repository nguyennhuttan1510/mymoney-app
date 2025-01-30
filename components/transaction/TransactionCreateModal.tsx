import React, {useState} from 'react';
import {Alert, Text, TextInput, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const TransactionCreateModal = () => {
    const [value, setValue] = React.useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        Alert.alert("Thông báo", `Bạn đã nhập: ${value}`);
        setValue(""); // Xóa nội dung sau khi nhập
    };


    return (
        <View className='flex flex-col gap-y-4'>
            <View className='flex flex-row items-center gap-x-4'>
                <View className='w-1/6'>
                    <AntDesign name="wallet" size={24} color="black"/>
                </View>
                <View
                    className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                    <Text className='text-xl text-black'>Ví tiêu dùng chính</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                </View>
            </View>

            <View className='flex flex-row items-center gap-x-4'>
                <View className='w-1/6'>
                    <Text
                        className='w-min border border-gray-100 px-2 py-3 rounded-lg'>VND</Text>
                </View>
                <View className='flex-1 flex border-b border-b-gray-200 py-3'>
                    <Text className='text-sm text-gray-500'>Số tiền</Text>
                    <TextInput
                        className='text-xl font-bold'
                        // onChangeText={handleChange}
                        keyboardType="numeric" // Chỉ hiển thị bàn phím số
                        placeholder="0"
                        returnKeyType="done" // Nút "Nhập" trên bàn phím
                        onSubmitEditing={handleSubmit} // Xử lý khi nhấn nút "Nhập"
                        maxLength={10} // Giới hạn số ký tự nếu cần
                    />
                </View>
            </View>

            <View className='flex flex-row items-center gap-x-4'>
                <View className='w-1/6'>
                    <AntDesign name="wallet" size={24} color="black"/>
                </View>
                <View
                    className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                    <Text className='text-xl text-gray-500'>Chọn nhóm</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                </View>
            </View>

            <View className='flex flex-row items-center gap-x-4'>
                <View className='w-1/6'>
                    <AntDesign name="wallet" size={24} color="black"/>
                </View>
                <View
                    className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                    <Text className='text-xl text-gray-500'>Ghi chú</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#e5e7eb"/>
                </View>
            </View>

            <View className='flex flex-row items-center gap-x-4'>
                <View className='w-1/6'>
                    <AntDesign name="wallet" size={24} color="black"/>
                </View>
                <View
                    className='flex-1 flex flex-row items-center justify-between border-b border-b-gray-200 py-3'>
                    {/*<Text onPress={() => setShow(true)}>{date.toLocaleDateString()}</Text>*/}
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShow(false);
                            if (selectedDate) setDate(selectedDate);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default TransactionCreateModal;