import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import TodoList from '../components/todolist';

const ContainerTodo = styled.div`
    height: calc(100vh - 110px);
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media screen and (min-width: 767px){
        width: 50%;
    }
        
    p{
        width: 90%;
        padding: 20px 0;
        margin-bottom: 20px;
        font-size: 1.6rem;
        font-weight: bold;
    }
`

const TODO = () => {
    return (
        <ContainerTodo>
            <p>TODO LIST</p>
            <TodoList></TodoList>
        </ContainerTodo>
    )
}

const Home = () => {
  
    return (
        <Layout>
            <TODO />

        </Layout>
    )
}

export default Home;