import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

const Home = () => {
  return (
    <View className="bg-red-50 flex flex-col gap-2 items-center">
      <Text>Home Page</Text>
      <Link href="/users/1">Go to user 1</Link>
      <Button
        title="go to user 2"
        onPress={() =>
          router.push({
            pathname: '/users/[id]',
            params: { id: 2 },
          })
        }
      />
    </View>
  );
};

export default Home;
