import { RootStackParamsList } from '@/router';
import HomeScreen from '@/screens/HomeScreen';
import MovieDetailsScreen from '@/screens/MovieDetailsScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamsList>();
const queryClient = new QueryClient();
export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar animated barStyle={'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
