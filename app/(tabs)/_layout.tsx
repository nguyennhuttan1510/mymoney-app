import {Tabs, useRouter} from 'expo-router';
import React, {useRef} from 'react';
import {TabBar} from "@/components/TabBar";
import BottomSheetModel from "@/components/BottomSheetModel";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const router = useRouter();
    return (
        <>
            <Tabs screenOptions={{headerShown: false}}
                  tabBar={(props) => <TabBar {...props}/>}
            >
                <Tabs.Screen options={{title: 'Home', tabBarLabel: ''}} name='index'/>
                <Tabs.Screen options={{title: 'Transaction', tabBarLabel: ''}} name='transaction'/>
                <Tabs.Screen options={{
                    title: 'Create', tabBarLabel: ''
                }} name='create'/>
                <Tabs.Screen options={{title: 'Budget', tabBarLabel: ''}} name='budget'/>
                <Tabs.Screen options={{title: 'Person', tabBarLabel: ''}} name='personal'/>
            </Tabs>

            <BottomSheetModel bottomSheetModalRef={bottomSheetModalRef}/>
        </>
    );
}
