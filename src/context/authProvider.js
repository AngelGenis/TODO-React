import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const authContextDefaultValues = {
    isAuth: false,
    name: '',
    id: ''
}

const AuthContext = createContext(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [state, setState] = useState(authContextDefaultValues);
    let history = useHistory();
    const { isAuth, name, id } = state;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const readCookie = () => {
        var cookie = Cookies.get("user");
        cookie ? (
            axios.get(`http://localhost:8000/users/${cookie}`)
                .then(res => {
                    const user = res.data;
                    setState({ ...state, isAuth: true, name: user.name, id: user.id })
                })
        ) : (
            setState({ ...state, isAuth: false, name: "", id: "" })
        )
    }

    const login = async (username, password) => {
        users.forEach((user) => {
            if (user.username === username && user.password === password) {
                setState({ isAuth: true, name: user.name, id: user.id });
                Cookies.set("user", user.id);
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
        setState({ isAuth: false, username: '', id: '' });
        Cookies.remove("user");
    };

    const getUsers = () => {
        const headers = {
            'Content-Type': {'Content-Type': 'application/json'},
            headers: {"Access-Control-Allow-Origin": "*"}
        };
        axios.get(`http://localhost:8000/users`, {headers})
            .then(res => {
                const AllUsers = res.data;
                setUsers([...AllUsers]);
            })
    }

    const value = { isAuth, name, login, logout, error, id };

    useEffect(() => {
        readCookie();
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

