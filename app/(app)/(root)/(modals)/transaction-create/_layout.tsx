import {Stack, Tabs, useRouter} from 'expo-router';
import React, {useRef} from 'react';
import {useNavigation} from "@react-navigation/native";
import {TransactionProvider, useTransaction} from "@/hooks/useTransaction";

export default function TransactionModalLayout() {
    const router = useRouter();
    const navigation = useNavigation()
    return (
        <TransactionProvider>
            <Stack>
                <Stack.Screen name='index' options={{
                    title: 'Thêm giao dịch',
                }}/>
                <Stack.Screen name='wallet-selection' options={{title: 'Ví', headerBackTitle: 'Thêm giao dịch'}}/>
                <Stack.Screen name='transaction-type' options={{title: 'Nhóm', headerBackTitle: 'Thêm giao dịch'}}/>
                <Stack.Screen name='note' options={{title: 'Ghi chú', headerBackTitle: 'Thêm giao dịch'}}/>
            </Stack>
        </TransactionProvider>
    );
}
