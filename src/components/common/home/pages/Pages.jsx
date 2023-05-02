import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import Home from '../Home'


export default function Pages() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}
