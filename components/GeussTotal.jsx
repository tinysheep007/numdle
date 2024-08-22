import { StyleSheet, View } from 'react-native';
import GeussNum from './GeussNum';

export default function GeussTotal({ number, result }) {
    let prop = number.split('');

    return (
        <View style={styles.container}>
            {prop.map((digit, index) => (
                <GeussNum key={index} num={digit} correctness={result[index]} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderRadius: 5,
        // borderColor: "black",
        // borderWidth: 2,
    },
});
