import React, { useState } from 'react'
import { Nav, Sidebar, Hero, Info } from '../Components'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Nav handleToggle={handleToggle} />
            <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
            <Hero />
            <Info />
        </div>
    )
}

export default Home
