import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 justify-center items-center bg-red-100'>
        <View className="bg-blue-500 flex-[0.2]"/>
        <View style={{backgroundColor: 'red', flex: 0.4}} />
        <Text className='text-yellow text-3xl'>Hello World!</Text>
        <Text className='text-yellow text-3xl'>Hello World!</Text>
        <Text>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;