import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import Home from '../Home'
import Details from '../details/Details'


export default function Pages() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart/:id" element={<Details />} />
            </Routes>
            <Footer />
        </>
    )
}
