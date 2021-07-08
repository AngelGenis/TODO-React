import React from 'react';
import Header from './header';
import styled from 'styled-components';

// npx json-server --watch data/db.json --port 8000

const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 767px){
        width: 70%;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
    }
    
`

const Layout = ({children})=>{
    return(
        <LayoutContainer>
           <Header />
           {children}
        </LayoutContainer>
    )
}

export default Layout;