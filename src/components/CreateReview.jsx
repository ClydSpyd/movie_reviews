import React, { useState } from "react";
import "react-autocomplete-input/dist/bundle.css";
import Autocomplete from "react-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateReviewContainer = styled.div`
  h3{
    margin: 30px 0 5px 0;
  }

  textarea{
    width: 100%;
    resize:none;
    height:600px;
    box-sizing: border-box;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`
const EditBtn = styled.div`
    background-color:  ${({disabled}) => disabled ? '#cacaca' : ' #9E00F5'};;
    pointer-events: ${({disabled}) => disabled ? 'none' : 'all'};
    opacity: ${({disabled}) => disabled ? '0.7' : '1'};
    color: #ffffff;
    right:20px;
    padding: 5px 10px;
    font-size:1em;
    text-align:center;
    cursor: pointer;
`

const CreateReview = () => {
  const [ reviewData, setReviewData ] = useState({reviewText:"", movieData:null})
  const [ searchInput, setSearchInput ] = useState("")
  const movies = useSelector(state => state.movies);
  const reviews = useSelector(state => state.reviews);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = movies.filter(i => !reviews.some(j => j.movieData.id===i.id));

  const handleSelect = (val) => {
    setReviewData({...reviewData, movieData:movies.find(i=>i.title===val)});
    setSearchInput(val);
  }

  const addReview = () =>{ 
    dispatch({
      type: "CREATE_REVIEW",
      payload: reviewData,
    });
    navigate("/");
  }

  return (
    <CreateReviewContainer>
      <h3>Film:</h3>
      <Autocomplete
        value={searchInput}
        wrapperStyle={{width:"100%"}}
        inputProps={{style: {width: "100%", padding: "8px 5px"}, placeholder:"Search by film title"}}
        menuStyle={{border: "1px solid #cacaca"}}
        getItemValue={(item) => item.title}
        items={items.filter(i => i.title.toLowerCase().includes(searchInput.toLowerCase()))}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.title}
          </div>
        )}
        onChange={(e) => setSearchInput(e.target.value)}
        onSelect={(val) => handleSelect(val)}
      />
      <h3>Review text:</h3>
      <textarea onChange={e=>setReviewData({...reviewData, reviewText: e.target.value})} />
      <EditBtn disabled={reviewData.reviewText===""||!reviewData.movieData} onClick={addReview}>Let's GO!</EditBtn>
    </CreateReviewContainer>
  );
};

export default CreateReview;
