import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Main_page from "./components/structural/Main_page";
import Login_page from "./views/Login";
import Signup_page from "./views/Signup";

export default function App() {

    const [token, setToken] = useState(null);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login_page setToken={setToken}/>
                </Route>
                <Route path="/cadastro" exact>
                    <Signup_page />
                </Route>
                <Route path="/feed" exact>
                    <Main_page />
                </Route>

            </Switch>
        </BrowserRouter>
        
    );
}