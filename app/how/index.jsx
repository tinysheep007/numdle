import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from "./HowStyle";

export default function How() {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity onPress={()=>router.navigate("/")} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>

            <View style={styles.viewContainer}>
                <Text style={styles.title}>How is This Game Similar to WORDLE?</Text>
                <Text style={styles.content}>
                    This game is similar to WORDLE but with numbers instead of letters.
                </Text>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.title}>What is this Game?</Text>
                <Text style={styles.content}>
                    The system will auto-generate a random 4 unique digit number. You will have to guess that number based on given hints.
                    There are two types of hints: "A" and "B".
                </Text>
                <View style={styles.nestedContent}>
                    <Text style={styles.content}>
                        "A" means the amount of digits that sit in the right spot when compared to the answer.
                    </Text>
                </View>
                <View style={styles.nestedContent}>
                    <Text style={styles.content}>
                        "B" means the amount of digits that did not sit in the right spot, but the answer does contain the digit.
                    </Text>
                </View>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.title}>How to Play It?</Text>
                <Text style={styles.content}>
                    You can guess the number based on given hints either from color or from results listed as A or B.
                    When you submit a 4-digit number, it will be compared to the actual answer, and the background of the 4 displaying compared
                    can give you important and meaningful hints.
                </Text>
                <View style={styles.nestedContent}>
                    <Text style={styles.content}>
                        Green means the digit is sitting in the right spot.
                    </Text>
                </View>
                <View style={styles.nestedContent}>
                    <Text style={styles.content}>
                        Blue means the digit is not sitting in the right spot, but the answer does contain the digit.
                    </Text>
                </View>
                <View style={styles.nestedContent}>
                    <Text style={styles.content}>
                        Red means the digit is not in the answer at all.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
