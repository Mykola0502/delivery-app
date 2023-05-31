import {
  useState,
  // useEffect
} from 'react';
import { Loader } from 'components/Loader';
import { ShopList } from 'components/ShopList';
import { Food } from 'components/Food';

const Shop = () => {
  //   const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const getMoviesTrending = async () => {
  //       try {
  //         setLoading(true);
  //         const movies = await fetchTrending();
  //         setMovies(movies.results);
  //       } catch (error) {
  //         console.log(error.message);
  //         console.log(error);

  //         setError(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     getMoviesTrending();
  //   }, []);

  return (
    <>
      {loading && <Loader />}
      <ShopList />
      <Food />
      {/* {movies && <MovieList movies={movies} />} */}
      {/* {error && (
        <h2>
          {error}
          <p>No films found, try again😢</p>
        </h2>
      )} */}
    </>
  );
};

export default Shop;
