import {StyleSheet, Image, Platform, Text} from 'react-native';
import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import React, {useCallback, useRef} from "react";

interface BottomSheetModel {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>
}

export default function BottomSheetModel(props: BottomSheetModel) {
    const {bottomSheetModalRef} = props


    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            snapPoints={['80%']}
            enablePanDownToClose={true}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
                <Text>Awesome 🎉</Text>
                <Text>Awesome 🎉</Text>
                <Text>Awesome 🎉</Text>
                <Text>Awesome 🎉</Text>
                <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
