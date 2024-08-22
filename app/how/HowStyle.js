import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center content vertically
    padding: 16,
    backgroundColor: '#f9f9f9',
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
  viewContainer: {
    marginBottom: 24,
    alignItems: 'center', // Center content horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center', // Center the title text
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#555',
    textAlign: 'center', // Center the content text
  },
  nestedContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#555',
    textAlign: 'center',
    marginLeft: 20,
  },
});
