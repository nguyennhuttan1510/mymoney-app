import {WalletType} from "@/components/wallet/type";
import {StyleSheet, View} from "react-native";
import {WalletCardBase} from "@/components/wallet/WalletCardBase";
import React, {useEffect} from "react";

interface WalletsProps {
    wallets?: WalletType[]
    onSelectWallet?: (wallet: WalletType) => void
    children?: React.ReactNode
}

const mockupWallets: Array<WalletType> = [
    {
        id: 1,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 2,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 3,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 4,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
    {
        id: 5,
        walletType: 'Ví thanh toán',
        amount: '134,900,000'
    },
]

export default function Wallets(props: WalletsProps) {
    const {wallets, children, onSelectWallet} = props
    let _wallets: Array<WalletType> | undefined = wallets
    useEffect(() => {
        if (!wallets && !children) {
            _wallets = mockupWallets
        }
        // Fetch wallet data from API and populate the wallets state
        // Here is a mockup to fetch data
        // fetch('https://api.example.com/wallets')
        //    .then(response => response.json())
        //    .then(data => {
        //        setWallets(data)
        //    })
        //    .catch(error => console.error('Error:', error))
    }, [])

    _wallets = mockupWallets

    return (
        <View style={styles.containerWallet}>
            {_wallets && Array.isArray(_wallets) ? _wallets.map((wallet, index) => (
                <WalletCardBase key={index} amount={wallet.amount} walletType={wallet.walletType} onPress={() => {
                    onSelectWallet && onSelectWallet(wallet)
                }}/>
            )) : null}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerWallet: {
        flex: 1,
        rowGap: 16,
    }
})