import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
    const router = useRouter();
    return (
        <ScrollView className="flex-1 px-4 py-6 bg-white">
            <TouchableOpacity 
                onPress={() => router.navigate("/")} 
                className="bg-blue-500 p-3 rounded-lg mb-6 mt-8"
            >
                <Text className="text-white text-lg font-bold text-center">Back to Home</Text>
            </TouchableOpacity>

            <View className="bg-gray-100 p-6 rounded-lg">
                <Text className="text-2xl font-bold mb-4">Why Does This Foolish Game Exist?</Text>
                <Text className="text-base leading-6 text-gray-700">
                    My friend in elementary school first made this game on a notebook. We used to play this game a lot to kill time. 
                    Since we did not have a computer to log our answer's correctness, we had to pass our notebook back and forth for the game to continue.
                    Fun times!
                </Text>
            </View>
        </ScrollView>
    );
}