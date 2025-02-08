import React, {useEffect} from 'react';
import {PlatformPressable, Text} from "@react-navigation/elements";
import {GestureResponderEvent, Pressable, StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";
import Animated, {
    interpolate,
    ReduceMotion,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";

interface TabBarItem {
    onPress: (event: GestureResponderEvent) => void
    onLongPress: (event: GestureResponderEvent) => void
    routeName: string
    isFocused: boolean
    label: string | undefined
    color?: string
    icon: (props?: any) => React.ReactNode
    options: any
}

export default function TabBarItem(props: TabBarItem) {
    const {label, isFocused, onPress, onLongPress, routeName, color, icon, options} = props
    const {colors} = useTheme()

    const scaleIcon = useSharedValue<number>(0)

    useEffect(() => {
        scaleIcon.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1.2 : 1) : isFocused, {
            mass: 1,
            damping: 10,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
            reduceMotion: ReduceMotion.Never,
        })
    }, [scaleIcon, isFocused])

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = scaleIcon.value
        return {
            transform: [{
                scale: scaleValue
            }],
        };
    })
    return (
        <Pressable
            key={routeName}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tabBarItem}
        >
            <Animated.View style={[animatedIconStyle]}>
                {icon ? icon({
                    color: isFocused ? 'white' : colors.text,
                }) : null}
            </Animated.View>
            <Text style={{color: isFocused ? 'white' : colors.text}}>
                {label}
            </Text>
        </Pressable>
    );
};

const style = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        position: 'relative',
        top: 4
    },
    icon: {
        color: 'black'
    }
})


