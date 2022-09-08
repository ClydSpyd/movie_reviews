export const createReview = ( reviewData ) => {
    return {
        type:'CREATE_REVIEW',
        payload: reviewData
    }
  }

  export const deleteReview = ( reviewId ) => {
    return {
        type:'DELETE_REVIEW',
        payload: reviewId
    }
  }

  export const editReview = ( reviewData ) => {
    return {
        type:'EDIT_REVIEW',
        payload: reviewData
    }
  }