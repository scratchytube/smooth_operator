import React, { useState } from 'react'
import { Nav, Sidebar } from '../Components'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Nav isOpen={isOpen} handleToggle={handleToggle} />
            <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
        </div>
    )
}

export default Home
