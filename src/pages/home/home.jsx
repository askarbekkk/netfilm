import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesNowPlaying } from "../../store/moviesNowPlaying";
import { fetchMoviesUpcoming } from "../../store/moviesUpcoming";
import { fetchMoviesPopular } from "../../store/moviesPopular";
import { fetchMoviesTopRated } from "../../store/moviesTopRated";

import HomeHeader from "../../components/homeHeader/homeHeader";
import ItemCarousel from "../../components/itemCarousel/itemCarousel";

import "./home.scss";

function HomePage() {
  const moviesUpcoming = useSelector((state) => state.moviesUpcoming.data);
  const moviesPopular = useSelector((state) => state.moviesPopular.data);
  const moviesNowPlaying = useSelector((state) => state.moviesNowPlaying.data);
  const moviesTopRated = useSelector((state) => state.moviesTopRated.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesUpcoming());
    dispatch(fetchMoviesPopular());
    dispatch(fetchMoviesTopRated());
  }, []);

  const movies = (
    <>
      <ItemCarousel items={moviesUpcoming} carouselName='Upcoming' />
      <ItemCarousel items={moviesPopular} carouselName='Popular' />
      <ItemCarousel items={moviesNowPlaying} carouselName='Now Playing' />
      <ItemCarousel items={moviesTopRated} carouselName='Top Rated' />
    </>
  );
  return (
    <>
      <Loader />
      <div className='home-page'>
        <HomeHeader />
        <div className='container-wrap'>{movies}</div>
      </div>
    </>
  );
}

export default HomePage;
