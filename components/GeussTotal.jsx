import React, { useState } from 'react';
import { View } from 'react-native';
import GeussNum from './GeussNum';

export default function GeussTotal({ number, result, onAllFlipsComplete }) {
  const prop = number.split('');
  const [completedFlips, setCompletedFlips] = useState(0);

  const handleFlipComplete = () => {
    setCompletedFlips((prev) => {
      const newCount = prev + 1;
      if (newCount === prop.length && onAllFlipsComplete) {
        onAllFlipsComplete();  // Notify parent that all flips are complete
      }
      return newCount;
    });
  };

  return (
    <View className="flex-row justify-center items-center">
      {prop.map((digit, index) => (
        <GeussNum
          key={index}
          num={digit}
          correctness={result[index]}
          delay={index * 200}  // Delay each flip by 200ms
          onFlipComplete={handleFlipComplete}  // Callback after each flip
        />
      ))}
    </View>
  );
}
