import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function GeussNum({ num, correctness }) {
    let bgColor;

    if (correctness === 0) {
        bgColor = "gray";
    } else if (correctness === 1) {
        bgColor = "yellow";
    } else if (correctness === 2) {
        bgColor = "green";
    } else {
        bgColor = "lightblue";
    }

    return (
        <Pressable style={[styles.box, { backgroundColor: bgColor }]}>
            <Text style={styles.text}>
                {num}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 60,  // Slightly larger width
        height: 60, // Slightly larger height
        borderRadius: 10, // Rounded corners
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "darkgray", // Darker border for better contrast
        borderWidth: 3, // Thicker border
        elevation: 4, // Increased shadow depth for Android
        shadowColor: '#333', // Darker shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        margin: 5,
        backgroundColor: 'white', // Default white background for better contrast with border
    },
    text: {
        fontSize: 24, // Larger font size
        fontWeight: 'bold', // Bold text for better visibility
        color: 'black',
    },
});
