import { fetchCastByFilmId } from '@/api/Movie';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

type CastListProps = {
  filmId: number;
};

const CastList = ({ filmId }: CastListProps) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['people', { filmId }],
    queryFn: () => fetchCastByFilmId(+filmId),
  });
  return (
    <View>
      {isFetching && <Text>Loading ...</Text>}
      {error && <Text>{error.message}</Text>}
      {data && (
        <View>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      )}
    </View>
  );
};

export default CastList;
