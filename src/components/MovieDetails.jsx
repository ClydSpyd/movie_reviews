import React from "react";
import styled from "styled-components";

const MovieDetails = ({ movie:{ title, release_year, image_url} }) => {
    const DetailsContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height:100px;
        width: 100%;

        img{
            width: 200px;
            object-fit: contain;
        }

        h3, p{
            margin:5px 0;
        }
    `
  return (
    <DetailsContainer>
      <div className="text">
        <h3>{title}</h3>
        <p>{release_year}</p>
      </div>
      <img src={image_url} alt="" />
    </DetailsContainer>
  );
};

export default MovieDetails;
