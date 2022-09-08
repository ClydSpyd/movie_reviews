import axios from "axios"
const API_URL = 'https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json'

export const fetchAllMovies = () => async dispatch => {
    const { data, status } = await axios.get(API_URL);
    const resData = status === 200 ? data : { error: "fetch error"}
    dispatch({
        type: "ADD_MOVIES",
        payload: resData
    })
}