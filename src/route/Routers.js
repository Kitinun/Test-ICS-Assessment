import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBarMenu from '../component/NavbarMenu';
import Home from "../page/Home"
import PlaceShop from "../page/PlaceShop"

const Routers = () => {
    return (
        <div>
            <NavBarMenu />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/placeshop/:id" element={<PlaceShop/>} />
            </Routes>
        </div>
    )
}

export default Routers