import React from 'react';
import {WalletCardContent, WalletCardContentProps, WalletCardWrapper} from "@/components/wallet/WalletCard";
import {StyleSheet, View} from "react-native";

interface WalletsProps {
    wallets?: Array<WalletCardContentProps>
}

const mockupWallets = [
    {
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
]

const Wallets = (props: WalletsProps) => {
    const {wallets = mockupWallets} = props
    return (
        <View style={styles.container}>
            {Array.isArray(wallets) ? wallets.map(wallet => (
                <WalletCardWrapper>
                    <WalletCardContent walletType={wallet.walletType} amount={wallet.amount}/>
                </WalletCardWrapper>
            )) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 16,
    }
})

export default Wallets;