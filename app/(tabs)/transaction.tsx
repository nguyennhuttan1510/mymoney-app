import {StyleSheet, Image, Platform, View, Text, ScrollView, SafeAreaView} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import tinyColor from "tinycolor2";
import {Link} from "expo-router";
import {useTheme} from "@react-navigation/native";

export default function TransactionScreen() {
  const {colors} = useTheme()

  return (
      <SafeAreaView style={{flex: 1}}>
        <View className='p-2 h-fit'>
          <View className='p-4 mb-4' style={{backgroundColor: colors.background}}>
            <View className='flex flex-row gap-2 mb-4'>
              <Image source={require('@/assets/images/partial-react-logo.png')} className='w-10 h-10 rounded-full mb-1'/>
              <View>
                <Text style={{color: colors.text}} className='text-lg'>Nguyen Nhut Tan</Text>
                <Text style={{color: tinyColor(colors.text).darken(40).toString()}}>nguyentan1510</Text>
              </View>
            </View>

            <View className='mb-4 flex flex-row justify-between items-baseline'>
              <Text style={{color: tinyColor(colors.text).darken(40).toString()}} className='text-lg'>Total</Text>
              <Text style={{color: colors.text}} className='text-2xl'>$9,780.39</Text>
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

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
