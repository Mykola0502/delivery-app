import {
  useState,
  // useEffect
} from 'react';
import { Loader } from 'components/Loader';
import { ShopList } from 'components/ShopList';
import { Food } from 'components/Food';

const shopList = [
  {
    id: 1,
    name: "McDonald's",
    food: [
      {
        id: '1',
        name: 'Hot Dog',
        price: 35,
        imgURL:
          'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png',
      },
      {
        id: '2',
        name: 'Hot Dog Big',
        price: 45,
        imgURL:
          'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/06/08/0/FNM_070120-Grilled-Hot-Dogs_s4x3.jpg.rend.hgtvcom.406.406.suffix/1591625198177.jpeg',
      },
      {
        id: '3',
        name: 'Hot Dog Small',
        price: 30,
        imgURL:
          'https://img.freepik.com/free-vector/fast-food-sticker-design-with-hot-dog-isolated_1308-67129.jpg?w=2000',
      },
    ],
  },
  {
    id: 2,
    name: 'Fast Food',
    food: [
      {
        id: '1',
        name: 'Hamburger',
        price: 30,
        imgURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
      },
      {
        id: '2',
        name: 'Hamburger Big',
        price: 40,
        imgURL:
          'https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies.png',
      },
      {
        id: '3',
        name: 'Hamburger mall',
        price: 25,
        imgURL:
          'https://www.mcdonalds.com.sg/sites/default/files/2023-02/1200x1200_MOP_BBPilot_Hamburger.png',
      },
    ],
  },
];

const foodList = [
  {
    id: '1',
    name: 'Hot Dog',
    price: 35,
    imgURL:
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png',
  },
  {
    id: '2',
    name: 'Hot Dog Big',
    price: 45,
    imgURL:
      'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/06/08/0/FNM_070120-Grilled-Hot-Dogs_s4x3.jpg.rend.hgtvcom.406.406.suffix/1591625198177.jpeg',
  },
  {
    id: '3',
    name: 'Hot Dog Small',
    price: 30,
    imgURL:
      'https://img.freepik.com/free-vector/fast-food-sticker-design-with-hot-dog-isolated_1308-67129.jpg?w=2000',
  },
  {
    id: '4',
    name: 'Hot Dog ',
    price: 30,
    imgURL: '',
  },
  {
    id: '5',
    name: 'Hot Dog ',
    price: 30,
    imgURL: '',
  },
  {
    id: '6',
    name: 'Hot Dog ',
    price: 30,
    imgURL: '',
  },
];

const Shop = () => {
  //   const [movies, setMovies] = useState([]);
  const [
    loading,
    // setLoading
  ] = useState(false);

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
      <ShopList shops={shopList} />
      <Food food={foodList} />
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
