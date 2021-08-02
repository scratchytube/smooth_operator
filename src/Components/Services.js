import React from 'react'
import styled from 'styled-components'
import Icon1 from '../images/basic-mixer2.svg'
import Icon2 from '../images/software-paintbucket.svg'
import Icon3 from '../images/snow.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon className='tune-up' src={Icon1}/>
                    <ServicesH2>Full Tune-Ups</ServicesH2>
                    <ServicesP>As a preventative measure, motorcycle tune-ups should be performed once every season or every 3000 miles. We'll have you in and out in no time.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon className='paintbucket' src={Icon2}/>
                    <ServicesH2>Powder Coating</ServicesH2>
                    <ServicesP>Customize your bike and have it stand out in a crowd with our powder coating service. We have a wide range of powder coating color options.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon className='snowflake' src={Icon3}/>
                    <ServicesH2>Winter Storage</ServicesH2>
                    <ServicesP>We know it can be a hassle dealing with your motorcycle during the cold weather. Store it with us and we'll give you a great deal.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #060606;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02)
    transition: all 0.2s ease-in-out;
}
`

const ServicesIcon = styled.img`
height: 100px;
width: 100px;
margin-bottom: 10px;

.paintbucket {
    color: #e2a600;
}
`

const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`