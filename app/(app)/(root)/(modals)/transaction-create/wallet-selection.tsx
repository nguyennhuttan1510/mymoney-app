import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {useTransaction} from "@/hooks/useTransaction";
import {useRouter} from "expo-router";
import {WalletCardBase} from "@/components/wallet/WalletCardBase";
import {WalletType} from "@/components/wallet/type";
import Wallets from "@/components/wallet/Wallets";

const WalletSelection = () => {
    const {state, transaction, setTransaction} = useTransaction()
    const router = useRouter()

    const onSelectWallet = (wallet: WalletType) => {
        setTransaction((prevState) => ({...prevState, wallet}))
        router.back()
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerScroll} showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                <Wallets wallets={state.wallets} onSelectWallet={onSelectWallet}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    containerScroll: {
        flex: 1,
        marginBottom: 16,
    }
})

export default WalletSelection;