import { AxiosResponse } from 'axios';
import { api } from './axios';

export const fetchMovies = async (
  language: string,
  page: number
): Promise<Movie[] | undefined> => {
  const response: AxiosResponse = await api.get(
    `movie/popular?language=${language}&page=${page}`
  );

  const { data, status, statusText } = response;
  if (data && status === 200) {
    console.log(data);
    return data.results;
  }
  return undefined;
};
