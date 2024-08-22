import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';

export default function GeussNum({ num, correctness, delay, onFlipComplete }) {
  const flip = useSharedValue(0);

  useEffect(() => {
    // Trigger the flip animation with a delay
    flip.value = withDelay(delay, withTiming(180, { duration: 500 }, () => {
      // Notify parent that the flip is complete
      if (onFlipComplete) {
        runOnJS(onFlipComplete)();
      }
    }));
  }, [num, correctness, delay]);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(flip.value, [0, 180], [0, 180])}deg`,
        },
      ],
      opacity: interpolate(flip.value, [0, 90, 180], [1, 0, 0]),
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(flip.value, [0, 180], [-180, 0])}deg`,
        },
      ],
      opacity: interpolate(flip.value, [0, 90, 180], [0, 0, 1]),
    };
  });

  let bgColor;

  if (correctness === 0) {
    bgColor = "bg-gray-500";
  } else if (correctness === 1) {
    bgColor = "bg-yellow-500";
  } else if (correctness === 2) {
    bgColor = "bg-green-500";
  } else {
    bgColor = "bg-blue-200";
  }

  return (
    <View className="w-16 h-16 relative m-1">
      {/* Front Side */}
      <Animated.View
        style={frontAnimatedStyle}
        className="absolute w-full h-full rounded-lg justify-center items-center bg-white border border-gray-600 shadow-md"
      >
        <Text className="text-2xl font-bold text-black">{num}</Text>
      </Animated.View>

      {/* Back Side */}
      <Animated.View
        style={backAnimatedStyle}
        className={`absolute w-full h-full rounded-lg justify-center items-center ${bgColor} border border-gray-600 shadow-md`}
      >
        <Text className="text-2xl font-bold text-white">{num}</Text>
      </Animated.View>
    </View>
  );
}
