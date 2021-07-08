import React from 'react';
import { useAuth } from '../context/authProvider';
import { Redirect } from 'react-router-dom'

const requireAuthentication = (Component, ComponentName)=> {

    const Hoc = (props) => {
        const { isAuth, name } = useAuth();
        console.log(isAuth);
        if (isAuth) {
            return (
                <>
                    {ComponentName === "login" && <Redirect to="/"/>}
                    <Component
                        auth={{ auth: true }}
                        user={{ user: name }}
                    />
                </>)
        } else {
            return (
                <>
                   <Redirect to="/login" />
                    <Component
                        auth={{ auth: true }}
                        user={{ user: name }}
                    />
                </>)

        }
    }
    return Hoc;
}


export default requireAuthentication;