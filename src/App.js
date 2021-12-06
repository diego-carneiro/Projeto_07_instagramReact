import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Main_page from "./components/structural/Main_page";
import Login_page from "./views/Login";
import Signup_page from "./views/Signup";
import Header from "./components/structural/Header";
import Story_box from "./components/feed_components/Stories";
import Page_body from "./components/structural/Page_body";

export default function App() {


    return (
        <>
            <Page_body></Page_body>
        </>
    );
}