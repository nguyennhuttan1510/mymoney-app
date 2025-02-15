import {useContext, createContext, type PropsWithChildren} from 'react';
import {useStorageState} from '../hooks/useStorageState';
import {AppleAuthenticationCredential} from "expo-apple-authentication";
import * as AppleAuthentication from "expo-apple-authentication";

interface ValueContextType {
  signIn: (credential:AppleAuthenticationCredential) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<ValueContextType>({
    signIn: (credential) => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}


export function SessionProvider({children}: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');

    const signIn:ValueContextType['signIn'] = (credential) => {
      setSession(credential.user)
    }

    const signOut: ValueContextType['signOut'] = () => {
        setSession(null);
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                session,
                isLoading,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
