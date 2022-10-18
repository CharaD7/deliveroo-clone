import { View, Text, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icons from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Do some stuff on layout anytime this screen mounts
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <Text className="text-red-500">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4" >
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png' }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className='flex-1 w-72 ' >
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
              <Icons.ChevronDownIcon size={15} color='#00CCBB' />
            </Text>
          </View>

          <Icons.UserIcon size={35} color='#00CCBB'/>
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 ml-4 bg-gray-200 space-x-2 p-3' style={{ width: 332 }}>
            <Icons.MagnifyingGlassIcon color='gray' size={20} />
            <TextInput
              placeholder="Restuarants and cuisines"
              keyboardType='default'
              className='-mt-1'
            />
          </View>

          <Icons.AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
