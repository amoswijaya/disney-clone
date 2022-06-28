/* eslint-disable react-hooks/exhaustive-deps */

import styled from 'styled-components';
import axios from '../app/api';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Series from './Series';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { setMovies } from '../features/movie/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Home = () => {
  const dispatch = useDispatch();
  // const [trending, setTrending] = useState([null]);
  // let trending = null;
  const fetchTrendingMovie = async () => {
    const [trending, topRated, series, popular] = await Promise.all([
      axios.get(`trending/all/week`),
      axios.get(`discover/movie?with_genres=16`),
      axios.get(`tv/popular?page=1`),
      axios.get(`movie/popular?page=1`),
    ]);
    dispatch(
      setMovies({
        recommend: trending.data.results,
        newDisney: topRated.data.results,
        series: series.data.results,
        trending: popular.data.results,
      })
    );
  };
  useEffect(() => {
    fetchTrendingMovie();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Series />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
