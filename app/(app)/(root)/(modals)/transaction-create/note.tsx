import {NativeSyntheticEvent, StyleSheet, TextInput, TextInputSubmitEditingEventData, View} from "react-native";
import {useTransaction} from "@/hooks/useTransaction";
import {router} from "expo-router";

export default function Note() {
    const {setTransaction} = useTransaction()

    const handleSubmitNote = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        setTransaction(prevState => ({...prevState, description: e.nativeEvent.text}))
        router.back();
    }

    return (
        <View style={styles.container}>
            <TextInput
                inputMode='text'
                keyboardType='default'
                autoFocus={true}
                placeholder='Nhập ghi chú'
                className='text-lg'
                onSubmitEditing={handleSubmitNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})