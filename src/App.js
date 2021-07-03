import Home from "./screens/home";
import Login from "./screens/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bienvenida from "./screens/bienvenida";

import { NotesProvider } from "./context/notesContext";
import { AuthProvider } from "./context/authProvider";


function App() {
  return (
    <Router>
      <AuthProvider>
        <NotesProvider>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/bienvenida">
              <Bienvenida></Bienvenida>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </NotesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
