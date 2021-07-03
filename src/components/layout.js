import React from 'react';
import Header from './header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
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