import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Single } from "./pages/single";
import { Landing } from "./pages/landing";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { useState } from "react";
import { AddProperty } from "./component/adding_removing_props";


export const AppContext = React.createContext(null);



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";


    const [currentUser, setCurrentUser] = useState({
        email: "dmeasor1@cisco.com",
        full_name: "Dov Measor",
        id: 2,
        phone: "(410) 4690235",
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMjA2NTYzNSwianRpIjoiNjU3YTJjNDQtMjE5Yy00NmI0LThkMTItZDk3NDRhNzFkODFiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MiwibmJmIjoxNzEyMDY1NjM1LCJjc3JmIjoiYWY3NDg2MmEtMjRkMC00ZTk1LWJlYjUtYjAwNjFhZjQ3N2NlIiwiZXhwIjoxNzEyMDY2NTM1fQ.PiFqu7nYF7sVFxUTpUsOazRhkK3frQWwBa0jsB32gmc"
    })

    const [myListings, setMyListings] = useState([])

    const [myProperties, setMyProperties] = useState([])

    const [role, setRole] = useState("")

    const [token, setToken] = useState("")

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div className="container">
            {/* Export global variables below */}
            <AppContext.Provider value={
                {
                    currentUser, setCurrentUser, token, setToken,
                    myListings, setMyListings, myProperties, setMyProperties,
                    role, setRole
                }
            }>
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route element={<Login />} path="/login" />
                            <Route element={<Home />} path="/" />
                            <Route element={<Landing />} path="/landing" />
                            <Route element={<AddProperty />} path="/addproperty" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </AppContext.Provider>
        </div>
    );
};

export default injectContext(Layout);
