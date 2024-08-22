import { StyleSheet, View, Text, Button, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import NumButton from "../../components/NumButton";
import GeussTotal from "../../components/GeussTotal";
import GeussNum from '@/components/GeussNum';
import styles from "./GameStyle";

export default function Game() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [input, setInput] = useState("");
    const [ans, setAns] = useState("1234");
    const [hints, setHints] = useState({
        A: 0,
        B: 0
    });
    const [win, setWin] = useState(false);
    /**
     * Example: 
     * 0: Not included in the answer at all 
     * 1: Right place in the letter
     * 2: wrong place in the letter
     * [{
     *  "1234":[0,1,2,1]
     * }]
     */
    const [guesses, setGuesses] = useState([]);
    const [cheat, setCheat] = useState(true);

    // function that add number
    const handleClick = (num) => {
        // only add string if less than 4 digit and no repeats
        if (input.length <= 3 && !input.includes(num)) {
            let numString = String(num);
            let tempString = input;
            tempString = tempString + numString;
            setInput(tempString);
        }
    }

    const handleDelete = () => {
        if (input.length > 0) {
            let temp = input.slice(0, -1);
            setInput(temp);
        }
    }

    const handleSubmit = () => {
        // can only submit if you have 4 digit
        if (input.length != 4) {
            return;
        }

        // win game condition
        if (input === ans) {
            setWin(true);
        } else {
            updateHint();
            setInput("");
            setWin(false);
        }
    }

    // update hints
    const updateHint = () => {
        let i;
        let a = 0;
        let b = 0;
        let currentGeuss = [];
        for (i = 0; i < input.length; i++) {
            // find A 
            // fully correct
            if (input[i] === ans[i]) {
                a = a + 1;
                currentGeuss[i] = 2;
            // find B
            // only contained not in the right place
            } else if (ans.includes(input[i])) {
                b = b + 1;
                currentGeuss[i] = 1;
            // not in the ans at all
            }else{
                currentGeuss[i] = 0;
            }
        }
        setHints({
            A: a,
            B: b,
        });

        // now update hints
        setGuesses([
            ...guesses,
            {
                number: input,
                result: currentGeuss
            }
        ])
        console.log(currentGeuss)
        console.log(guesses)

    }

    // play again reset everything
    const handlePlayAgain = () => {
        setWin(false);
        // create new answer
        generateNewAns();
        setHints({
            A: 0,
            B: 0
        });
        setInput("");
        setGuesses([])
        
    }

    // generated new answer
    const generateNewAns = () => {
        let newAns = "";
        // keep generating until we have 4 unique digit
        while(newAns.length != 4){
            // create random number from 1-10
            let newInt = Math.floor(1 + Math.random() * 10);
            // convert to string
            let newStr = String(newInt);
            // if there's no repeat with previous int then add to string
            if(!newAns.includes(newStr)){
                newAns = newAns + newStr;
            }
        }
        setAns(newAns);
    }

    let inputBoxNum = input.split('')
    while(inputBoxNum.length < 4){
        inputBoxNum.push(' ')
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {win ? (
                    <View style={styles.winContainer}>
                        <Text style={styles.winText}>
                            You won! The answer is {ans}
                        </Text>
                        <Button title='Play Again' onPress={handlePlayAgain} />
                    </View>
                ) : (
                    <View style={styles.gameContainer}>
                        <Text style={styles.title}>Numdle</Text>
        
                        {cheat && (
                            <Text style={styles.cheatText}>Answer: {ans}</Text>
                        )}
        
                        <Text style={styles.hintsText}>Hints: {hints.A} A {hints.B} B</Text>
        
                        {guesses.map(({ number, result }) => (
                            <GeussTotal key={number} number={number} result={result} />
                        ))}

                        <View style={styles.inputBoxContainer}>
                            {inputBoxNum.map((char, index) => (
                                <GeussNum key={index} num={char} correctness={-1} />
                            ))}
                        </View>
        
                        <View style={styles.buttonContainer}>
                            {arr.map((a) => (
                                <View style={styles.numButton} key={a}>
                                    <NumButton num={a} handleClick={handleClick} />
                                </View>
                            ))}

                        </View>
        
                        <View style={styles.actionButtonContainer}>
                            <Pressable 
                                style={[styles.actionButton, styles.enterButton]}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttonText}>Enter</Text>
                            </Pressable>
                            <Pressable 
                                style={[styles.actionButton, styles.deleteButton]}
                                onPress={handleDelete}
                            >
                                <Text style={styles.buttonText}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}