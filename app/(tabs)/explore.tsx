import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ViewBoxesWithColor = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
        {/* First View with Background Color */}
        <View className="bg-blue-500 w-40 h-20 rounded-md flex items-center justify-center">
          <Text className="text-white text-lg font-bold">
            Styled Box
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity className="mt-4 px-4 py-2 bg-red-500 rounded-lg">
          <Text className="text-white">Press Me</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColor;
