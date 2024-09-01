import { useInfiniteQuery } from '@tanstack/react-query';

const App = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = (await response.json()) as any[];
      return data.slice(pageParam - 1, pageParam + 4);
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
      console.log(lastPageParam);
      if (lastPageParam + 5 < 100) {
        return lastPageParam + 5;
      }
      return undefined;
    },
  });
  return (
    <>
      {error && <p>{JSON.stringify(error)}</p>}
      {isLoading && <p>loading ... </p>}
      {data &&
        data.pages.map((page) =>
          page.map((p, i) => (
            <div className={i == 0 ? 'bg-red-300' : ''}>
              {p.id} {p.title}
            </div>
          ))
        )}
      <button onClick={() => fetchPreviousPage()} disabled={!hasPreviousPage}>
        previous page
      </button>
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        next page
      </button>
    </>
  );
};

export default App;
