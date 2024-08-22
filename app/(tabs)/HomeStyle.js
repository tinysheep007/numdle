// HomeStyle.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', // Ensure the header spans the width of the container
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  playButton: {
    backgroundColor: 'blue', // Button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
  },
});
