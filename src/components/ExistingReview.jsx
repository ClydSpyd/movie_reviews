import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import MovieDetails from "../components/MovieDetails";

const EditBtn = styled.div`
    background-color: #9E00F5;
    background-color:${({isDelete}) => isDelete ? '#d00000' : '#9E00F5'};
    color: #ffffff;
    display: inline-block;
    margin-right:5px;
    width: ${({fullWidth})=> fullWidth ? '98%' : '100px'};
    right:20px;
    padding: 5px 10px;
    font-size:1em;
    text-align:center;
    cursor: pointer;
`

const ConfirmationOverlay = styled.div`
    height:100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.49);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal{
        height: 160px;
        width: 350px;
        background-color: #ffffff;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4{
            margin-top: 0;
            margin-bottom: 20px;
        }

        .buttons{
            display: flex;
        }
    }
`

const ExistingReview = ({ reviewProp }) => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, toggleEdit] = useState(false);
  const [deleteConf, toggleDeleteConf] = useState(false);
  const [reviewData, setReviewData] = useState(reviewProp);

    const handleSaveEdit = () => {
      dispatch({
        type: 'EDIT_REVIEW',
        payload: reviewData,
      });
      toggleEdit(false);
    }

    const handleDelete = () => {
      dispatch({
        type: 'DELETE_REVIEW',
        payload: reviewData.movieData.id,
      });
      navigate('/');
    }

  return (
    <>
      <MovieDetails movie={reviewData.movieData} />
      {
        !edit ?
          <>
            <p>{reviewData.reviewText}</p>
            <EditBtn onClick={()=>toggleEdit(true)}>Edit</EditBtn>
            <EditBtn isDelete onClick={()=>toggleDeleteConf(true)}>Delete</EditBtn>
            {
                deleteConf &&
                    <ConfirmationOverlay>
                        <div className="modal">
                            <h4>Delete {reviewData.movieData.title}?</h4>
                            <div className="buttons">
                                <EditBtn onClick={()=>toggleDeleteConf(false)}>Cancel</EditBtn>
                                <EditBtn isDelete onClick={()=>handleDelete(true)}>Confirm</EditBtn>
                            </div>
                        </div>
                    </ConfirmationOverlay>
            }
          </>
        :
        <>
            <textarea value={reviewData.reviewText} onChange={e=>setReviewData({...reviewData, reviewText:e.target.value})} />
            <EditBtn fullWidth onClick={handleSaveEdit}>SAVE</EditBtn>
          </>
      }
    </>
  )
}

export default ExistingReview