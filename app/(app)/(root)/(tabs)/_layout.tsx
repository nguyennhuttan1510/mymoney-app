import {Tabs} from 'expo-router';
import React from 'react';
import {TabBar} from "@/components/TabBar";

export default function TabLayout() {
    return (
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
    );
}
