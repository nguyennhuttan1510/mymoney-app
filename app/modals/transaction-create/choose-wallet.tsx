import React from 'react';
import {View} from "react-native";
import Wallets from "@/components/wallet/components/Wallets";

const ChooseWallet = () => {
    return (
        <View style={{flex: 1, padding: 16}}>
            <Wallets/>
        </View>
    );
};

export default ChooseWallet;