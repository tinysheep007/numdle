import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import NumButton from "../../components/NumButton";
import GeussTotal from "../../components/GeussTotal";
import GeussNum from '@/components/GeussNum';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Game() {
    const router = useRouter();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [input, setInput] = useState("");
    const [ans, setAns] = useState("1234");
    const [hints, setHints] = useState({ A: 0, B: 0 });
    const [win, setWin] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const [inputReady, setInputReady] = useState(true); // State to track if input should be shown

    const handleClick = (num) => {
        if (input.length <= 3 && !input.includes(num)) {
            setInput(input + String(num));
        }
    };

    const handleDelete = () => {
        if (input.length > 0) {
            setInput(input.slice(0, -1));
        }
    };

    const handleSubmit = () => {
        if (input.length != 4) {
            alert("Please submit a 4 digit number!")
            return;
        }
        // if there is repeat gives alert
        for(const element of guesses){
            if (element.number == input) {
                alert("You can't submit the same number twice!")
                return;
            }
        }
        setInputReady(false); // Disable input until flips are done
        if (input === ans) {
            setInput("");
            updateHint();
            setTimeout(()=>{
                setWin(true);
            }, 1200)
        } else {
            updateHint();
            setInput("");
            setWin(false);
        }
    };

    const updateHint = () => {
        let a = 0, b = 0;
        let currentGeuss = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === ans[i]) {
                a += 1;
                currentGeuss[i] = 2;
            } else if (ans.includes(input[i])) {
                b += 1;
                currentGeuss[i] = 1;
            } else {
                currentGeuss[i] = 0;
            }
        }
        setHints({ A: a, B: b });
        setGuesses([...guesses, { number: input, result: currentGeuss }]);
    };

    const handleAllFlipsComplete = () => {
        setInputReady(true); // Re-enable input after all flips are done
    };

    const handlePlayAgain = () => {
        setWin(false);
        generateNewAns();
        setHints({ A: 0, B: 0 });
        setInput("");
        setGuesses([]);
        setInputReady(true);
    };

    const generateNewAns = () => {
        let newAns = "";
        while (newAns.length != 4) {
            let newInt = Math.floor(1 + Math.random() * 10);
            let newStr = String(newInt);
            if (!newAns.includes(newStr)) {
                newAns = newAns + newStr;
            }
        }
        setAns(newAns);
    };

    let inputBoxNum = input.split('');
    while (inputBoxNum.length < 4) {
        inputBoxNum.push(' ');
    }

    return (
        <ScrollView className="flex-1 h-full bg-gray-100">
            <View className="flex-1 justify-center items-center p-4 bg-gray-100 min-h-full">
                {win ? (
                    <View className="flex-1 justify-center items-center mt-10">
                        <View className="p-4 items-center justify-center bg-green-500 rounded-lg">
                            <Text className="text-white text-lg font-bold">You won! The answer is {ans}</Text>
                            <Text className="text-white text-lg font-bold">It took you {guesses.length + 1} try!</Text>
                            <TouchableOpacity 
                                onPress={handlePlayAgain} 
                                className="bg-blue-500 p-3 rounded-lg mt-5 mb-5"
                            >
                                <Text className="text-white text-lg font-bold text-center">Play Again</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                ) : (
                    <View className="w-full items-center justify-center flex-1 min-h-screen">
                        {/* Row for the title and buttons */}
                        <View className="flex-row items-center justify-between w-full px-4 mb-4">
                            {/* Left Exclamation Button */}
                            <TouchableOpacity
                                className="w-12 h-12 bg-red-500 rounded-full justify-center items-center"
                                onPress={() => alert(`The correct answer is: ${ans}`)}
                            >
                                <Ionicons name="alert-circle" size={24} color="white" />
                            </TouchableOpacity>

                            {/* Title */}
                            <TouchableOpacity className="bg-pink-500 p-5 rounded-lg mb-5 items-center w-half" onPress={() => router.navigate("/")}>
                                <Text className="text-4xl font-bold text-white">Numdle</Text>
                            </TouchableOpacity>

                            {/* Right Question Button */}
                            <TouchableOpacity
                                className="w-12 h-12 bg-blue-500 rounded-full justify-center items-center"
                                onPress={() => alert('This is just like Wordle. If you want to challenge yourself, only using _ A _ B hints is great too! \n\n A means the amount of digits that sit in the right spot when compared to the answer. \n\n B means the amount of digits that did not sit in the right spot, but the answer does contain the digit.')}
                            >
                                <Ionicons name="help-circle" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
    
                        <Text className="text-lg mb-4">Hints: {hints.A} A {hints.B} B</Text>

                        {guesses.map(({ number, result }, index) => (
                            <GeussTotal 
                                key={index} 
                                number={number} 
                                result={result} 
                                onAllFlipsComplete={handleAllFlipsComplete} 
                            />
                        ))}
    
                        {inputReady && (
                            <View className="flex-row justify-between mb-4">
                                {inputBoxNum.map((char, index) => (
                                    <GeussNum key={index} num={char} correctness={-1} />
                                ))}
                            </View>
                        )}
    
                        
                            <View className="flex-row flex-wrap justify-center mb-4">
                                {arr.map((a) => (
                                    <View className="w-1/3 p-1" key={a}>
                                        <View className="flex justify-center items-center">
                                            <NumButton num={a} handleClick={handleClick} />
                                        </View>
                                    </View>
                                ))}
                            </View>
                        
    
                        
                            <View className="flex-row justify-between w-full">
                                <TouchableOpacity
                                    className="bg-blue-500 p-3 rounded-lg flex-1 mr-2"
                                    onPress={handleSubmit}
                                >
                                    <Text className="text-white text-center font-bold">Enter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="bg-red-500 p-3 rounded-lg flex-1 ml-2"
                                    onPress={handleDelete}
                                >
                                    <Text className="text-white text-center font-bold">Delete</Text>
                                </TouchableOpacity>
                            </View>
                        
                    </View>
                )}
            </View>
        </ScrollView>
    );
}
