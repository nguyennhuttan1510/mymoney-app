import { Tabs } from 'expo-router';
import React from 'react';
import {Platform, View} from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useTheme} from "@react-navigation/native";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const {colors} = useTheme()
      return (
          <Tabs screenOptions={{tabBarStyle: {
                  height: 50,                // Height of the tab bar
                  paddingBottom: 8,          // Padding at the bottom of the tab bar
                  backgroundColor: 'white', // Background color of the tab bar
              },}}>
              <Tabs.Screen
                  options={{
                      headerShown: false,
                      title: 'Home',
                      tabBarIcon: ({color, focused}) => <MaterialIcons size={24} name='home' color={color} />}}
                  name='index'
              />
              <Tabs.Screen
                  options={{
                      headerShown: false,
                      title: 'Transaction',
                      tabBarIcon: ({color, focused}) => <MaterialCommunityIcons name="swap-horizontal" size={24} color={color} />}}
                  name='transaction'
              />
              <Tabs.Screen
                  options={{
                      headerShown: false,
                      tabBarLabel: '',
                      tabBarIcon: ({color, focused}) => (
                          <View style={{display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: colors.background, borderRadius: 100, height: 64, width:64, marginBottom: 8}}>
                              <Ionicons name="add-circle-sharp" size={50} color={'#fdc500'} />
                          </View>
                      )}}
                  name='transaction-create'
              />
              <Tabs.Screen
                  options={{
                      headerShown: false,
                      title: 'Budget',
                      tabBarIcon: ({color, focused}) => <MaterialIcons name="attach-money" size={24} color={color} />}}
                  name='budget'
              />
              <Tabs.Screen
                  options={{
                      headerShown: false,
                      title: 'Person',
                      tabBarIcon: ({color, focused}) => <Ionicons name="person-circle-outline" size={24} color={color} />}}
                  name='personal'
              />
          </Tabs>
      );
}
