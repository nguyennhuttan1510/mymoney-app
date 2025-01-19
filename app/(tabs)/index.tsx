import {Image, StyleSheet, Platform, SafeAreaView, View, Text, ScrollView} from 'react-native';
import tinyColor from 'tinycolor2';
import {useTheme} from "@react-navigation/native";
import {Link} from "expo-router";
import Transaction from "@/app/(tabs)/components/Transaction";
import {TRANSACTION_TYPE} from "@/utils/format";
import {AntDesign} from "@expo/vector-icons";

export default function HomeScreen() {
  const {colors} = useTheme()
  const titleGray = tinyColor(colors.text).brighten(50).toString()
  return (
      <SafeAreaView style={{flex: 1}}>
          <View className='p-2 h-fit'>
              <View className='flex flex-row gap-x-4 p-4 mb-4'>
                  <View className='flex-1 border py-2 px-4 rounded-lg' style={{borderColor: colors.border}}>
                      <Text style={{color: titleGray}} className='text-md'>Tổng tài sản</Text>
                      <Text style={{color: colors.text}} className='text-2xl'><Text style={{color: titleGray}}>VND</Text> 9,780.39</Text>
                  </View>
                  <View className='border p-4 rounded-lg' style={{borderColor: colors.border}}>
                    <AntDesign name="piechart" size={30} color="black" />
                  </View>
              </View>
          </View>

          <View className='p-4 rounded-tl-3xl rounded-tr-3xl flex-1' style={{backgroundColor: colors.background}}>
              <View className='flex flex-row justify-between mb-4'>
                  <Text style={{color: colors.text}} className='font-bold'>Transaction</Text>
                  <Link href={'/'} style={{color: colors.text}} className='font-bold'>View All</Link>
              </View>

              <ScrollView>
                  <View className='flex flex-col gap-y-2'>
                      {/*<Transaction />*/}

                    <Transaction>
                      <Transaction.GroupTitle>Yesterday</Transaction.GroupTitle>
                      <Transaction.Item type={TRANSACTION_TYPE.EXPENSE} amount={10000} category={'Ăn uống'} description={'Ăn phở'} />
                    </Transaction>

                      <View className='flex flex-col gap-2'>
                          <Text style={{color: colors.text}}>6/9</Text>
                          <View className='flex flex-row gap-2 rounded-2xl border p-2' style={{borderColor: colors.border}}>
                              <Image source={require('@/assets/images/partial-react-logo.png')} className='w-8 h-8 rounded-full'/>
                              <View>
                                  <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                  <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-sm'>Dinner</Text>
                              </View>
                              <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                          </View>

                          <View className='flex flex-row gap-2 rounded-2xl border p-2' style={{borderColor: colors.border}}>
                              <Image source={require('@/assets/images/partial-react-logo.png')} className='w-8 h-8 rounded-full'/>
                              <View>
                                  <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                  <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-sm'>Dinner</Text>
                              </View>
                              <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                          </View>
                      </View>

                      <View className='flex flex-col gap-2'>
                          <Text style={{color: colors.text}}>5/9</Text>
                          <View className='flex flex-row gap-2 rounded-2xl border p-2' style={{borderColor: colors.border}}>
                              <Image source={require('@/assets/images/partial-react-logo.png')} className='w-8 h-8 rounded-full'/>
                              <View>
                                  <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                  <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-sm'>Dinner</Text>
                              </View>
                              <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                          </View>

                          <View className='flex flex-row gap-2 rounded-2xl border p-2' style={{borderColor: colors.border}}>
                              <Image source={require('@/assets/images/partial-react-logo.png')} className='w-8 h-8 rounded-full'/>
                              <View>
                                  <Text style={{color: colors.text}} className='text-md font-bold'>Food</Text>
                                  <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-sm'>Dinner</Text>
                              </View>
                              <Text style={{color: colors.text}} className='flex-1 text-right'>-$39</Text>
                          </View>
                      </View>
                  </View>
              </ScrollView>

          </View>
      </SafeAreaView>
  );
}
