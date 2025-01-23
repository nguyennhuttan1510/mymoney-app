import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import 'react-native-reanimated';
import "../global.css";

import {useColorScheme} from '@/hooks/useColorScheme';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider, BottomSheetView} from "@gorhom/bottom-sheet";
import {Button, StyleSheet, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <GestureHandlerRootView style={{flex: 1}}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    <BottomSheetModalProvider>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                            <Stack.Screen name="+not-found"/>
                        </Stack>
                        <StatusBar style="auto"/>
                    </BottomSheetModalProvider>
                </ThemeProvider>
            </GestureHandlerRootView>
        </SafeAreaView>

    );
}
