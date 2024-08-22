import { StyleSheet, View, Text, Pressable, StatusBar, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import styles from "./HomeStyle";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Numdle</Text>
      </View>

      <Link href="/game" style={styles.link}>
        <View style={styles.playButton}>
          <Text style={styles.buttonText}>Play!</Text>
        </View>
      </Link>

      <Link href="/how" style={styles.link}>
        <View style={styles.playButton}>
          <Text style={styles.buttonText}>How to Play?</Text>
        </View>
      </Link>

      <Link href="/about" style={styles.link}>
        <View style={styles.playButton}>
          <Text style={styles.buttonText}>About?</Text>
        </View>
      </Link>
      
    </SafeAreaView>
  );
}

