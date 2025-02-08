import React, {useContext, useState} from "react";
import {WalletType} from "@/components/wallet/type";
import {CategoryType} from "@/app/(modals)/transaction-create/transaction-type";
import items from "ajv/lib/vocabularies/applicator/items";

export interface TransactionType {
    amount: string
    type: CategoryType
    description: string
    date: string
    wallet: WalletType
}

interface StateType {
    wallets: WalletType[] | undefined
}

interface TransactionContextType {
    state: StateType
    transaction: TransactionType
    setState: React.Dispatch<React.SetStateAction<StateType>>
    setTransaction: React.Dispatch<React.SetStateAction<TransactionType>>
}

const mockupWallets: Array<WalletType> = [
    {
        id: 1,
        walletType: 'Ví thanh toán',
        amount: '134,900,000',
        default: true
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
]

export const TransactionContext = React.createContext<TransactionContextType | null>(null)

const transactionDefault: Partial<TransactionType> = {
    amount: '0',
    date: new Date().toISOString(),
    wallet: mockupWallets.find(wallet => wallet?.default),
}

const stateDefault: StateType = {
    wallets: undefined
}

export function TransactionProvider({children}: { children: React.ReactNode }) {
    const [transaction, setTransaction] = useState<TransactionType>(transactionDefault as TransactionType)
    const [state, setState] = useState<StateType>(stateDefault)
    return (
        <TransactionContext.Provider value={{state, transaction, setTransaction, setState}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    if (!context) {
        throw new Error("useTransaction phải được dùng bên trong TransactionProvider");
    }
    return context as TransactionContextType;
}