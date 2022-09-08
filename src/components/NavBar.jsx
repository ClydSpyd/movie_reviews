import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
const NavBar = () => {

    const location = useLocation();
    const isreview = location.pathname === '/review';

    const StyledNav = styled.nav`
        position: relative;
        width:100%;
        height:60px;
        background-color: grey;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 15px;

        .navLink{
            text-decoration: none;
            color: white;
            cursor: pointer;
            position: absolute;
            left:20px;
        }
    `
    const NavBtn = styled(Link)`
        position: absolute;
        text-decoration: none;
        background-color:${({isDelete}) => isDelete ? '#d00000' : '#9E00F5'};
        color: #ffffff;
        right:20px;
        padding: 8px 15px 10px 15px;
        font-size:1em;
        font-weight: 700;
        cursor: pointer;
    `
    

  return (
    <StyledNav>
        {
            isreview ?
                <>
                    <Link to={"/"} className='navLink'> {"<"} Back</Link>
                    <h3>REVIEW</h3>
                </>
            :
                <>
                    <h3>FILM LOG</h3>
                    <NavBtn to={"/review?create"}>New +</NavBtn>
                </>
        }
    </StyledNav>
  )
}

export default NavBar