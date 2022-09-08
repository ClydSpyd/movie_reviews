import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { parse } from "query-string";
import { useSelector } from "react-redux";
import CreateReview from "../components/CreateReview";
import ExistingReview from "../components/ExistingReview";

const ReviewContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 50px;
  position: relative;

  textarea{
    width: 100%;
    resize:none;
    margin-top: 20px;
    height:600px;
    box-sizing: border-box;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

const Review = () => {
  const location = useLocation();
  const myReviews = useSelector((state) => state.reviews);
  const { id } = parse(location.search);
  const [currentReview] = useState(myReviews.find((i) => i.movieData.id === id));


  return (
    <ReviewContainer>
      {!id ? (
        <CreateReview />

      ) : currentReview ? (
          <ExistingReview reviewProp={currentReview} />
          
      ) : (
          <h5>Review not found</h5>
        
      )}
    </ReviewContainer>
  );
};

export default Review;

// const deleteReview = () =>
// dispatch({ type: "DELETE_REVIEW", payload: "hello_world" });
