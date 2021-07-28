import React, { useState } from 'react'
import { Nav, Sidebar, Hero, Info, } from '../Components'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/Data'


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
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree} />
        </div>
    )
}

export default Home
