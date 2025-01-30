import {Stack, Tabs, useRouter} from 'expo-router';
import React, {useRef} from 'react';
import {TabBar} from "@/components/TabBar";
import BottomSheetModel from "@/components/BottomSheetModel";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function TransactionModalLayout() {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen name='index' options={{title: 'create'}}/>
            <Stack.Screen name='choose-wallet' options={{title: 'Ví'}}/>
        </Stack>
    );
}
