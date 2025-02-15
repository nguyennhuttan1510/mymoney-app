import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Redirect, Stack, useRouter} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider, BottomSheetView} from "@gorhom/bottom-sheet";
import {SafeAreaView} from "react-native-safe-area-context";
import {useSession} from "@/providers/session";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter()
    const {session} = useSession()


    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sign-in"/>;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style={'auto'}/>
            <GestureHandlerRootView style={{flex: 1}}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    <BottomSheetModalProvider>
                        <Stack>
                            <Stack.Screen name="(tabs)"
                                          options={{headerShown: false}}/>
                            <Stack.Screen name="(modals)"
                                          options={{
                                              presentation: 'modal',
                                              headerShown: false,
                                              gestureEnabled: false,
                                          }}/>
                            <Stack.Screen name="+not-found"/>
                        </Stack>
                    </BottomSheetModalProvider>
                </ThemeProvider>
            </GestureHandlerRootView>
        </SafeAreaView>

    );
}
