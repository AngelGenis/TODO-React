import React from 'react';
import { useAuth } from '../context/authProvider';
import AuthenticationMessage from '../components/authenticationMessage'

const requireAuthentication = (Component) => {
 
    const Hoc = () => {
        const { isAuth } = useAuth();
        
        return (
            isAuth ? (
                <Component
                    auth={{ auth: true }}
                    user={{ user: "Angel Genis" }}
                />
            ) : (
                <AuthenticationMessage />
            )
        )
    }
    return Hoc;
}


export default requireAuthentication;