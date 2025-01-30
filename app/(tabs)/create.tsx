import {StyleSheet, Image, Platform, Text, View} from 'react-native';

import {Collapsible} from '@/components/Collapsible';
import {ExternalLink} from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {useCallback, useRef} from "react";

export default function TabTwoScreen() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>
                Create screen
            </Text>
        </View>
        // <BottomSheetModal
        //     ref={bottomSheetModalRef}
        //     onChange={handleSheetChanges}
        //     snapPoints={['80%']}
        //     enablePanDownToClose={true}
        // >
        //     <BottomSheetView style={styles.contentContainer}>
        //         <Text>Awesome 🎉</Text>
        //         <Text>Awesome 🎉</Text>
        //         <Text>Awesome 🎉</Text>
        //         <Text>Awesome 🎉</Text>
        //         <Text>Awesome 🎉</Text>
        //         <Text>Awesome 🎉</Text>
        //     </BottomSheetView>
        // </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
