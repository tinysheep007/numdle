import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./AboutStyle";
import { useRouter } from 'expo-router';

export default function About() {
    const router = useRouter();
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={()=>router.navigate("/")} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Why Does This Foolish Game Exist?</Text>
                <Text style={styles.p}>
                    My friend in elementary school first made this game on a notebook. We used to play this game a lot to kill time. 
                    Since we did not have a computer to log our answer's correctness, we had to pass our notebook back and forth for the game to continue.
                    Fun times!
                </Text>
            </View>
        </ScrollView>
    );
}
