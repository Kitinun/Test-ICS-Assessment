import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBarMenu from '../component/NavbarMenu';
import Home from "../page/Home"
import Detail from "../page/detail"

const Routers = () => {
    return (
        <div>
            <NavBarMenu />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/detail" element={<Detail/>} />
            </Routes>
        </div>
    )
}

export default Routers