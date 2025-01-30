import {View, Platform, StyleSheet, LayoutChangeEvent, Pressable} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React, {useEffect, useState} from "react";
import Animated, {ReduceMotion, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import TabBarItem from "@/components/TabBarItem";
import {useRouter} from "expo-router";

export function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
    const {colors} = useTheme();
    const {buildHref} = useLinkBuilder();
    const router = useRouter()
    const icon = {
        'index': (props: any) => <MaterialIcons size={24} name='home' color={'#222'} {...props} />,
        'transaction': (props: any) => <MaterialCommunityIcons name="swap-horizontal" size={24}
                                                               color={'#222'} {...props} />,
        'create': (props: any) => <Ionicons name="add-circle-sharp" size={24} color={'#222'} {...props} />,
        'budget': (props: any) => <MaterialIcons name="attach-money" size={24} color={'#222'} {...props} />,
        'personal': (props: any) => <Ionicons name="person-circle-outline" size={24} color={'#222'} {...props} />,
    } as const

    const [dimension, setDimension] = useState({width: 100, height: 20});

    const tabPositionX = useSharedValue<number>(0)
    const widthButton = dimension.width / state.routes.length

    const tabBarItemAnimation = () => {
        tabPositionX.value = withSpring(state.index * widthButton, {
            mass: 1,
            damping: 10,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
            reduceMotion: ReduceMotion.Never,
        });
    }

    useEffect(() => {
        tabBarItemAnimation()
    }, [state.index]);

    const animatedStyle = useAnimatedStyle(() => (
        {
            transform: [
                {translateX: tabPositionX.value},
            ],
        }
    ))

    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimension({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        })
    }

    return (
        <View onLayout={onTabBarLayout} style={style.tabBar}>
            <Animated.View style={[{
                position: 'absolute',
                backgroundColor: colors.text,
                borderRadius: 35,
                width: widthButton,
                height: dimension.height,
            }, animatedStyle]}/>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    tabBarItemAnimation()
                    if (route.name === 'create') {
                        router.push('/modals/transaction-create')
                        return
                    }
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarItem
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        label={label}
                        routeName={route.name}
                        isFocused={isFocused}
                        icon={icon[route.name as keyof typeof icon]}
                        options={options}
                    />
                );
            })}
        </View>
    );
}

const style = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 24,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 48,
        paddingVertical: 8,
        borderRadius: 32,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 10,
            width: 0,
        },
        shadowRadius: 10,
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        position: 'relative',
        top: 4
    },
})