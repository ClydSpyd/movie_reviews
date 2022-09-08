import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import GenrePicker from "../components/GenrePicker";
import LogItem from "../components/LogItem";

const FilmLog = () => {
  const [filterValue, setFilterValue] = useState(null);
  const myReviews = useSelector((state) => state.reviews);
  const movies = useSelector((state) => state.movies);

  const ReviewsContainer = styled.div`
    width:100vw;
    box-sizing: border-box;
    padding:40px;
    display:flex;
    flex-direction: column;
    align-items: center;

    h5{
        margin-top: 0;
    }
  ` 

  return (
    <>
      <GenrePicker movies={movies} callback={setFilterValue} />
      <ReviewsContainer>
        {filterValue && <h5>{filterValue} reviews</h5>}
        {!myReviews.length ? 
            <>
                <h5>No reviews found</h5> 
                <Link to={"/review?create"}><button>Create one now</button></Link>
            </>
        :   
            myReviews.map(item => 
                (!filterValue || item.movieData.genres.includes(filterValue)) &&
                    <LogItem review={item} />
            )
        }
      </ReviewsContainer>
    </>
  );
};

export default FilmLog;
