import { createContext, useState, useContext, useEffect, useCallback } from 'react'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
const authContextDefaultValues = {
    isAuth: false,
    name: '',
    id: ''
}

const AuthContext = createContext(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [state, setState] = useState(authContextDefaultValues);
    let history = useHistory();
    const { isAuth, name, id } = state;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    console.log("3");
    const readCookie = useCallback(() => {
        console.log("2");
        var cookie = Cookies.get("user");
        cookie && (
             axios.get(`http://localhost:8000/users/${cookie}`)
                .then(res => {
                    const user = res.data;
                    setState({isAuth: true, name: user.name, id: user.id })
                })
        )
    }, [isAuth])
    useEffect(() => {
        console.log("1");
        readCookie();
        getUsers();
    }, []);

    const login = async (username, password) => {
       
        let band = false;
        users.forEach((user) => {
            if (user.username === username && user.password === password) {
                band = true;
                setState({ isAuth: true, name: user.name, id: user.id });
                console.log("Este es el id" + user.id);
                Cookies.set("user", user.id);
                const inter = setInterval(() => {
                    setTimeout(() => {
                        history.push("/home");
                    }, 3000);

                    history.push("/bienvenida");
                    clearInterval(inter)
                }, 100);
            }
        });

        !band && (setError("Nombre de usuario o contraseña incorrecta"));
    }

    const logout = () => {
        setState({ isAuth: false, username: '', id: '' });
        Cookies.remove("user");
    };

    const getUsers = useCallback(() => {
        const headers = {
            'Content-Type': { 'Content-Type': 'application/json' },
            headers: { "Access-Control-Allow-Origin": "*" }
        };
        axios.get(`http://localhost:8000/users`, { headers })
            .then(res => {
                const AllUsers = res.data;
                setUsers([...AllUsers]);
            })
    },[users])

    const value = { isAuth, name, login, logout, error, id, readCookie };

    

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;