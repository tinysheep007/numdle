import { View, Text, Pressable, StatusBar, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center px-4 bg-gray-200">
      
      <View className="bg-pink-500 p-5 rounded-lg mb-5 items-center w-half">
        <Text className="text-4xl font-bold text-white">Numdle</Text>
      </View>

      <Link href="/game" className="mt-5">
        <View className="bg-blue-500 py-3 px-6 rounded-lg items-center justify-center">
          <Text className="text-white text-lg font-bold">Play!</Text>
        </View>
      </Link>

      <Link href="/how" className="mt-5">
        <View className="bg-blue-500 py-3 px-6 rounded-lg items-center justify-center">
          <Text className="text-white text-lg font-bold">How to Play?</Text>
        </View>
      </Link>

      <Link href="/about" className="mt-5">
        <View className="bg-blue-500 py-3 px-6 rounded-lg items-center justify-center">
          <Text className="text-white text-lg font-bold">About?</Text>
        </View>
      </Link>
      
    </SafeAreaView>
  );
}
