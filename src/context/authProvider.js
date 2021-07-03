import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const authContextDefaultValues = {
    isAuth: false,
    name: ""
}

const AuthContext = createContext(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [state, setState] = useState(authContextDefaultValues);
    let history = useHistory();
    const { isAuth, name } = state;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    console.log(users);
    const readCookie = () => {
        var cookie = Cookies.get("user");
       cookie ? setState({ ...state, isAuth: true, name: cookie }) : setState({ ...state, isAuth: false, name: "" });
    }

    const login = async (username, password) => {
        users.forEach((user) => {
            if (user.username === username && user.password === password) {
                setState({ isAuth: true, name: user.name });
                Cookies.set("user", user.name);
                const inter = setInterval(() => {
                    setTimeout(() => {
                        history.push("/");
                    }, 3000);

                    history.push("/bienvenida");
                    clearInterval(inter)
                }, 100);
               
            } else {
                setError("Nombre de usuario o contraseña incorrecta");    
            }
        });
    }

    const logout = () => {
        setState({ isAuth: false, username: "" });
        Cookies.remove("user");
    };

    const getUsers = () => {
        axios.get(`https://60df2d57abbdd9001722d2b9.mockapi.io/api/users`)
            .then(res => {
                const AllUsers = res.data;
                setUsers([...AllUsers]);
            })
    }

    const value = { isAuth, name, login, logout, error};

    useEffect(() => {
        readCookie();
    }, []);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

