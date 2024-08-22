import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0', // Light gray background
    },
    content: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    p: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    backButton: {
        marginTop: 15,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignSelf: 'flex-start', // Align the back button to the start (left)
      },
      backButtonText: {
        color: 'white',
        fontSize: 16,
      },
});
