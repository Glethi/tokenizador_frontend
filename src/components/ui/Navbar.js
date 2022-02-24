import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link className="text-dark" to="/">
                        P&JCSystem
                </Link>
            </div>
        </nav>
    )
}