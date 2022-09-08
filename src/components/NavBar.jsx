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
        justify-content: ${isreview ? 'space-between' : 'center'};
        align-items: center;
        box-sizing: border-box;
        padding: 0 15px;

        .navLink{
            text-decoration: none;
            color: white;
            cursor: pointer;
        }
    `
    const NewBtn = styled(Link)`
        position: absolute;
        text-decoration: none;
        background-color: #ffffff;
        color: #2b2b2b;
        right:20px;
        padding: 10px 15px 12px 15px;
        font-size:1.2em;
        font-weight: 700;
        cursor: pointer;
    `
    

  return (
    <StyledNav>
        {
            isreview ?
                <>
                    <Link to={"/"} className='navLink'>Back</Link>
                    <div className='navLink'>Delete</div>
                </>
            :
                <>
                    <h3>FILM LOG</h3>
                    <NewBtn to={"/review?create"}>New +</NewBtn>
                </>
        }
    </StyledNav>
  )
}

export default NavBar