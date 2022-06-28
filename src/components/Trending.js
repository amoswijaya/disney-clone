/* eslint-disable array-callback-return */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies?.map((movie, key) => {
          if (key < 5 && key !== 0) {
            return (
              <Wrap key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt=''
                />
                <div>
                  <h4>{movie.original_name || movie.original_title}</h4>
                  <p>{movie.overview}</p>
                </div>
              </Wrap>
            );
          }
        })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  /* padding-top: 56.25%; */
  height: 210px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  div {
    padding: 6px;
    opacity: 2;
  }
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.09);
    border-color: rgba(249, 249, 249, 0.8);
  }
  img:hover {
    opacity: 0.3;
  }
`;

export default Trending;
