import React from 'react';
import {WalletCardContent, WalletCardWrapper} from "@/components/wallet/WalletCard";
import {View} from "react-native";

const ChosenWallet = () => {
    return (
        <View>
            <WalletCardWrapper>
                <WalletCardContent walletType={'Ví thanh toán'} amount={'134,900,000'}/>
            </WalletCardWrapper>

            <WalletCardWrapper>
                <WalletCardContent walletType={'Ví thanh toán'} amount={'134,900,000'}/>
            </WalletCardWrapper>

            <WalletCardWrapper>
                <WalletCardContent walletType={'Ví thanh toán'} amount={'134,900,000'}/>
            </WalletCardWrapper>

            <WalletCardWrapper>
                <WalletCardContent walletType={'Ví thanh toán'} amount={'134,900,000'}/>
            </WalletCardWrapper>
        </View>
    );
};

export default ChosenWallet;