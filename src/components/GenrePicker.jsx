import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components';


const GenrePickerContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 10px auto;
`

const GenrePicker = ({movies, callback}) => {
    const [ genres, setGenres ] = useState([]);
    const [ selectedValue, setSelectedValue ] = useState("null");

    useEffect(()=>{
        const genreArray = movies.reduce((prev, current)=>{
            const currentUniqeGenres = [...new Set(current.genres)];
            return [...new Set([...prev, ...currentUniqeGenres])]
        }, [])
        setGenres(genreArray);
    },[movies])

  return (
    <GenrePickerContainer>
        <Select
            placeholder={"Filter by genre..."} 
            value={selectedValue}
            isSearchable={false}
            onChange={genre => {callback(genre.value); setSelectedValue(genre)}} 
            options={genres.map(i =>{return {value:i === 'All genres' ? null : i, label:i}})} 
        />
    </GenrePickerContainer>
  )
}

export default GenrePicker