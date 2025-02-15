import React from "react";
import {useTheme} from "@react-navigation/native";
import {View} from "react-native";
import {WalletType} from "@/components/wallet/type";
import {WalletCardBaseProps} from "@/components/wallet/WalletCardBase";

interface WalletCardWrapperProps {
    header?: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
}

export default function WalletCardWrapper(props: WalletCardWrapperProps) {
    const {children, header, footer} = props
    const {colors} = useTheme()

    return (
        <View className='flex flex-col gap-2 rounded-2xl border overflow-hidden bg-white'
              style={{borderColor: colors.border}}>
            {header}
            {children}
            {footer}
        </View>
    );
};
