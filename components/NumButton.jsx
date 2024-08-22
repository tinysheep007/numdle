import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function NumButton({ num, handleClick }) {
    return (
        <Pressable 
            style={styles.button} 
            onPress={() => handleClick(num)}
        >
            <Text style={styles.text}>{num}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60, // Adjust width
        height: 60, // Adjust height
        borderRadius: 10, // Rounded corners
        backgroundColor: '#007BFF', // Button color
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4, // Spacing between buttons
        elevation: 4, // Shadow for Android
        shadowColor: '#333', // Shadow color for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    text: {
        fontSize: 24, // Font size
        fontWeight: 'bold', // Font weight
        color: 'white', // Text color
    },
});
