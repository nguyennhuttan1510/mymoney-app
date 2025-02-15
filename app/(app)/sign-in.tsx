import * as AppleAuthentication from 'expo-apple-authentication';
import {View, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native';
import {useSession} from "@/providers/session";
import {router} from "expo-router";

export default function SignInScreen() {
    const {signIn} = useSession()

    const handleAppleLogin = async () => {
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });
        console.log('credential', credential)
        signIn(credential)
        router.replace('/');
      } catch (e) {
        if (e.code === 'ERR_REQUEST_CANCELED') {
          // handle that the user canceled the sign-in flow
        } else {
          // handle other errors
        }
      }
    }

    const onSignIn = async () => {
      await handleAppleLogin()
    }

    return (
        <View>
            <Text>SignInScreen</Text>
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={styles.button}
                onPress={onSignIn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 44,
    },
});
