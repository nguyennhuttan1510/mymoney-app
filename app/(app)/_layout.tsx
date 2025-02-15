import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack, useRouter} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider, BottomSheetView} from "@gorhom/bottom-sheet";
import {Button, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, initialWindowMetrics, SafeAreaView} from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter()

    return (
        <Stack>
            <Stack.Screen name="(root)"
                          options={{headerShown: false}}/>
            <Stack.Screen name="sign-in"
                          options={{headerShown: false, presentation: 'modal'}}/>
        </Stack>

    );
}
