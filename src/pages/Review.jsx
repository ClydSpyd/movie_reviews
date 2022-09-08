import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { parse } from "query-string";
import { useSelector } from "react-redux";
import MovieDetails from "../components/MovieDetails";
import CreateReview from "../components/CreateReview";

const ReviewContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 50px;
`;

const Review = () => {
  const location = useLocation();
  const { id } = parse(location.search);
  const myReviews = useSelector((state) => state.reviews);
  const [currentReview] = useState(myReviews.find((i) => i.movieData.id === id));

  return (
    <ReviewContainer>
      {!id ? (
        <CreateReview />

      ) : currentReview ? (
        <>
          <MovieDetails movie={currentReview.movieData} />
          <p>{currentReview.reviewText}</p>
        </>
      
      ) : (
        <h5>Review not found</h5>
        
      )}
    </ReviewContainer>
  );
};

export default Review;

// const deleteReview = () =>
// dispatch({ type: "DELETE_REVIEW", payload: "hello_world" });
