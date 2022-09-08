import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MovieDetails from './MovieDetails'

const LogItem = ({ review: { reviewText, movieData }}) => {

    const ItemContainer = styled(Link)`
        width:400px;
        height: 220px;
        border: 1px solid #cacaca;
        border-radius: 2px;
        text-decoration: none;
        box-sizing: border-box;
        padding:10px;
        color: #2b2b2b;
        margin-bottom: 15px;
        
        .reviewText{
            font-size: 0.9em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        h6{
            color: #9E00F5;
            margin-top: -5px;
        }

    `
  return (
    <ItemContainer to={`/review?id=${movieData.id}`}>
        <MovieDetails movie={movieData} />
        <p className='reviewText'>{reviewText}</p>
        <h6>Read more</h6>
    </ItemContainer>
  )
}

export default LogItem