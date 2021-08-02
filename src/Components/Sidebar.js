import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const Sidebar = ({ isOpen, handleToggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={handleToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={handleToggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={handleToggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={handleToggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={handleToggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
color: #fff;
`

const Icon = styled.div`
position: absolute;
top: 0.2rem;
padding-top: 1rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

const SidebarWrapper = styled.div`
color: #fff;
`

const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.25rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`

const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

const SidebarMenu = styled.ul`
display: grid;
grid-template-column: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

