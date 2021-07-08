import Home from "./screens/home";
import Login from "./screens/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bienvenida from "./screens/bienvenida";

import { NotesProvider } from "./context/notesContext";
import AuthProvider from "./context/authProvider";
import requireAuthentication from "./hooks/requireAuthentication";


function App() {
  
  return (
    <Router>
      <AuthProvider>
        <NotesProvider>
          <Switch>
            <Route path="/login" component={requireAuthentication(Login, "login")} />
            <Route path="/bienvenida" component={requireAuthentication(Bienvenida, "bienvenida")} />
            <Route path={["/home", "/"]} component={requireAuthentication(Home, "home")} />
          </Switch>
        </NotesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
