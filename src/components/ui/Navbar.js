import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <NavLink className="text-white" to="/">
                        <h2>P&JCSystem</h2>
                </NavLink>
            </div>
        </nav>
    )
}