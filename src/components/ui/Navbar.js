import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="text-white" to="/">
                <h2>P&JCSystem</h2>
            </NavLink>
        </div>
    )
}