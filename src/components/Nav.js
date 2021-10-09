import React from 'react'

const Nav = ({filter, data}) => {
    const handleChange = (category) => {
        filter(data.filter((data) => data.category === category))
    }
    return (
        <>
            <nav className="nav">
                <ul className="nav-lists">
                    <li className="nav-link" onClick={() => filter(data)}>All</li>
                    <li className="nav-link" onClick={() => handleChange("breakfast")}>Breakfast</li>
                    <li className="nav-link" onClick={() => handleChange("lunch")}>Lunch</li>
                    <li className="nav-link" onClick={() => handleChange("shakes")}>Shakes</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
