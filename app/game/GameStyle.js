import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink', // Match the background color with the gameContainer
        padding: 0, // Remove any padding to avoid a white frame
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink', // Match the background color with the gameContainer
        padding: 0, // Remove any padding to avoid a white frame
    },
    winContainer: {
        alignItems: 'center',
        backgroundColor:"white"
    },
    winText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    gameContainer: {
        backgroundColor: 'pink', // Keep the pink background
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    inputText: {
        fontSize: 24,
        marginBottom: 16,
    },
    inputBoxContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    cheatText: {
        fontSize: 18,
        marginVertical: 8,
    },
    hintsText: {
        fontSize: 18,
        marginVertical: 8,
    },
    gameStateText: {
        fontSize: 18,
        marginVertical: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the buttons horizontally
        width: '90%', // Adjust the width to fit the buttons within the container
    },
    numButton: {
        width: '30%', // Ensure 3 buttons per row
        margin: 5, // Adjust space between buttons
    },
    actionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center the action buttons horizontally
        width: '90%', // Adjust the width to fit both buttons in a row
        marginTop: 16, // Space above the action buttons
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 10, // Space between action buttons
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    enterButton: {
        backgroundColor: 'blue', // Background color for Enter button
    },
    deleteButton: {
        backgroundColor: 'red', // Background color for Delete button
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
