import { View, Text, Pressable } from 'react-native';
import React from 'react';
type ButtonProps = {
  onPress?: () => void;
  title: string;
};
const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} className="bg-green-400">
      <Text className="text-red-500">{title}</Text>
    </Pressable>
  );
};

export default Button;
