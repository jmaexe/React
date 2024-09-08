import { RootStackParamsList } from '@/router';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'MovieDetails'
>;

const MovieDetailsScreen = ({ route }: MovieDetailsScreenProps) => {
  const { id } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 25 }}>MovieDetailsScreen {id} </Text>
    </View>
  );
};

export default MovieDetailsScreen;
