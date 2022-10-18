import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Do some stuff on layout anytime this screen mounts
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png' }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            resizeMode={'cover'}
          />
          <View>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>
        </View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
