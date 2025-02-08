import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {useTransaction} from "@/hooks/useTransaction";

export interface CategoryType {
    id: number
    type: 'income' | 'outcome'
    title: string
    children?: Array<CategoryType>
}

const mockupCategory: CategoryType[] = [
    {
        id: 1,
        type: 'income',
        title: 'Thu nhập',
        children: [
            {
                id: 11,
                type: 'income',
                title: 'Tiền mặt',
            },
            {
                id: 12,
                type: 'income',
                title: 'Lương',
            },
        ]
    },
    {
        id: 2,
        type: 'outcome',
        title: 'Hóa đơn',
        children: [
            {
                id: 21,
                type: 'outcome',
                title: 'Điện',
            },
            {
                id: 22,
                type: 'outcome',
                title: 'Nước',
            },
        ]
    },
]

export default function Category(props: any) {
    const router = useRouter()
    const {setTransaction} = useTransaction()
    console.log('props', props)


    const handleClickType = (category: CategoryType) => {
        setTransaction((prevState) => ({...prevState, type: category}))
        router.back()
    }

    const categoriesRender = (categories: CategoryType[]) => {
        return categories.map((category, index) => {
            const isParent = category?.children
            return (
                (
                    <View key={index} style={styles.containerSection}>
                        <TouchableOpacity
                            onPress={() => {
                                handleClickType(category)
                            }}
                            className='flex flex-row gap-x-4 items-center w-full'>
                            <View className='flex-none min-w-10'>
                                <Image source={require('@/assets/images/partial-react-logo.png')}
                                       className={`${isParent ? 'w-10 h-10' : 'w-8 h-8'} rounded-full`}/>
                            </View>
                            <Text
                                className={`${isParent ? 'text-xl font-medium' : 'text-lg'} w-full text-gray-500 border-b border-b-gray-200 py-4`}>
                                {category.title}
                            </Text>
                        </TouchableOpacity>
                        {category?.children && categoriesRender(category.children)}
                    </View>
                )
            )
        })
    }

    return <View style={styles.container}>
        <View style={{paddingVertical: 12, ...styles.containerSection}}>
            <View
                className='flex flex-row rounded-lg border border-gray-300 bg-gray-100 overflow-hidden'>
                <TouchableOpacity className='flex-1'>
                    <View
                        className='flex justify-center items-center py-1 bg-white rounded-lg shadow-gray-100 shadow-sm'>
                        <Text className='text-md '>
                            Thu
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-1'>
                    <View className='flex justify-center items-center py-1'>
                        <Text className='text-md'>
                            Chi
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-1'>
                    <View className='flex justify-center items-center py-1'>
                        <Text className='text-md'>
                            Vay
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{paddingVertical: 12, ...styles.containerSection}}>
            <View className='flex flex-row items-center gap-x-2'>
                <AntDesign className='flex-none' name="plus" size={24} color="#22c55e"/>
                <Text className='text-green-500 font-medium'>
                    Tạo nhóm
                </Text>
            </View>
        </View>

        <ScrollView>
            <View style={styles.container}>
                {categoriesRender(mockupCategory)}
                {/*<View style={styles.containerSection}>*/}
                {/*    <View>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => {*/}
                {/*                handleClickType()*/}
                {/*            }}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-10 h-10 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-xl text-gray-500 font-medium border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn uống*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Cà phê*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn ngoài*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<View style={styles.containerSection}>*/}
                {/*    <View>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-10 h-10 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-xl text-gray-500 font-medium border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn uống*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Cà phê*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn ngoài*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<View style={styles.containerSection}>*/}
                {/*    <View>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-10 h-10 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-xl text-gray-500 font-medium border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn uống*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Cà phê*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*        <TouchableOpacity*/}
                {/*            onPress={() => handleClickType()}*/}
                {/*            className='flex flex-row gap-x-4 items-center w-full'>*/}
                {/*            <View className='flex-none min-w-10'>*/}
                {/*                <Image source={require('@/assets/images/partial-react-logo.png')}*/}
                {/*                       className='w-8 h-8 rounded-full'/>*/}
                {/*            </View>*/}
                {/*            <Text className='w-full text-lg text-gray-500 border-b border-b-gray-200 py-4'>*/}
                {/*                Ăn ngoài*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 8,
        flexDirection: 'column'
    },
    containerSection: {
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
})