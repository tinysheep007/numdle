import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function How() {
    const router = useRouter();
    return (
        <ScrollView className="flex-1 px-4 py-6 bg-white">
            <TouchableOpacity 
                onPress={() => router.navigate("/")} 
                className="bg-blue-500 p-3 rounded-lg mb-6 mt-8"
            >
                <Text className="text-white text-lg font-bold text-center">Back to Home</Text>
            </TouchableOpacity>

            <View className="bg-gray-100 p-6 rounded-lg mb-6">
                <Text className="text-2xl font-bold mb-4">How is This Game Similar to <Text className="font-bold">WORDLE</Text>?</Text>
                <Text className="text-base leading-6 text-gray-700">
                    This game is similar to <Text className="font-bold">WORDLE</Text> but with numbers instead of letters.
                </Text>
            </View>

            <View className="bg-gray-100 p-6 rounded-lg mb-6">
                <Text className="text-2xl font-bold mb-4">What is this Game?</Text>
                <Text className="text-base leading-6 text-gray-700 mb-2">
                    The system will auto-generate a random 4 unique digit number. You will have to guess that number based on given hints.
                    There are two types of hints:
                </Text>
                <View className="pl-4">
                    <View className="bg-gray-200 p-2 rounded-lg mb-2">
                        <Text className="text-base leading-6 text-gray-700">
                            {"\u2022"} <Text className="font-bold">A</Text> means the amount of digits that sit in the right spot when compared to the answer.
                        </Text>
                    </View>
                    <View className="bg-gray-200 p-2 rounded-lg">
                        <Text className="text-base leading-6 text-gray-700">
                            {"\u2022"} <Text className="font-bold">B</Text> means the amount of digits that did not sit in the right spot, but the answer does contain the digit.
                        </Text>
                    </View>
                </View>
            </View>

            <View className="bg-gray-100 p-6 rounded-lg">
                <Text className="text-2xl font-bold mb-4">How to Play It?</Text>
                <Text className="text-base leading-6 text-gray-700 mb-2">
                    You can guess the number based on given hints either from color or from results listed as A or B.
                    When you submit a 4-digit number, it will be compared to the actual answer, and the background of the 4 digits can give you important and meaningful hints.
                </Text>
                <View className="pl-4">
                    <Text className="text-base leading-6 text-gray-700 mb-2">
                        <Text className="text-green-600 font-bold">Green</Text> means the digit is sitting in the right spot.
                    </Text>
                </View>
                <View className="pl-4">
                    <Text className="text-base leading-6 text-gray-700 mb-2">
                        <Text className="text-blue-600 font-bold">Blue</Text> means the digit is not sitting in the right spot, but the answer does contain the digit.
                    </Text>
                </View>
                <View className="pl-4">
                    <Text className="text-base leading-6 text-gray-700">
                        <Text className="text-red-600 font-bold">Red</Text> means the digit is not in the answer at all.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
