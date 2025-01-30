import {Stack} from "expo-router";

export default function ModalLayout() {
    return <Stack>
        <Stack.Screen name="transaction-create" options={{headerShown: false}}/>
    </Stack>
}