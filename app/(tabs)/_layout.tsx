import {Tabs} from 'expo-router';
import React, {useRef} from 'react';
import {TabBar} from "@/components/TabBar";
import BottomSheetModel from "@/components/BottomSheetModel";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

export default function TabLayout() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    return (
        <>
            <Tabs screenOptions={{headerShown: false}}
                  tabBar={(props) => <TabBar {...props}/>}>
                <Tabs.Screen options={{title: 'Home', tabBarLabel: ''}} name='index'/>
                <Tabs.Screen options={{title: 'Transaction', tabBarLabel: ''}} name='transaction'/>
                <Tabs.Screen options={{title: 'Create', tabBarLabel: ''}} listeners={{
                    tabPress: () => {
                        bottomSheetModalRef.current?.present();
                    }
                }} name='create'/>
                <Tabs.Screen options={{title: 'Budget', tabBarLabel: ''}} name='budget'/>
                <Tabs.Screen options={{title: 'Person', tabBarLabel: ''}} name='personal'/>
            </Tabs>

            <BottomSheetModel bottomSheetModalRef={bottomSheetModalRef}/>
        </>
    );
}
