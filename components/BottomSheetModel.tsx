import {StyleSheet, Image, Platform, Text, View, TextInput, Alert} from 'react-native';
import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import React, {useCallback, useRef, useState} from "react";
import {Easing, ReduceMotion} from "react-native-reanimated";
import {AntDesign} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useTheme} from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TransactionCreateModal from "@/components/transaction/TransactionCreateModal";
import ChosenWallet from "@/components/wallet/ChosenWallet";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

interface BottomSheetModel {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>
}

export default function BottomSheetModel(props: BottomSheetModel) {
    const {bottomSheetModalRef} = props
    const {colors} = useTheme()
    const [value, setValue] = React.useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        Alert.alert("Thông báo", `Bạn đã nhập: ${value}`);
        setValue(""); // Xóa nội dung sau khi nhập
    };

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            snapPoints={['80%']}
            enablePanDownToClose={true}
            animationConfigs={{
                duration: 500,
                easing: Easing.inOut(Easing.quad),
                reduceMotion: ReduceMotion.Never,
            }}
        >
            <BottomSheetView style={styles.contentContainer}>
                {/*<Tab.Navigator>*/}
                {/*    <Tab.Screen name="TransactionCreateModal" component={TransactionCreateModal}/>*/}
                {/*    <Tab.Screen name="ChosenWallet" component={ChosenWallet}/>*/}
                {/*</Tab.Navigator>*/}
                <Text>hahaha</Text>

            </BottomSheetView>
        </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        flex: 1,
        padding: 16,
    },
});
