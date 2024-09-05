import { View, Text } from 'react-native';
import React from 'react';
import { fetchMovies } from '@/api/Movie';
import MovieList from '@/components/MovieList';
import { useQuery } from '@tanstack/react-query';
const Home = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies('en-US', 1),
  });
  return (
    <View className="flex-1 ">
      {/* <Text>Home Page </Text> */}
      {isFetching && <Text>Loading ...</Text>}
      {error && <Text>{error.message}</Text>}
      {data && <MovieList movies={data} />}
    </View>
  );
};

export default Home;
