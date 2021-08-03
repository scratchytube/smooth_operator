import React from 'react'
import styled from 'styled-components'
import Icon1 from '../images/stonks-2.svg' 
import Icon2 from '../images/stock-prices.svg'
import Icon3 from '../images/stonks-3.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Total Supply</ServicesH2>
                    <ServicesP>$hehe Coin launched on May 1st, 2021 with a total supply of 1,000,000,000,000 $hehe Tokens, and currently has a total of 356,730,435,556 that have been burned.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Liquidity Lock</ServicesH2>
                    <ServicesP>Every trade generates liquidity that is locked inside PancakeSwap.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Transaction Tax</ServicesH2>
                    <ServicesP>Every $hehe Coin transaction has an automatic 9% transaction tax, which is then divided 3% back to Locked LP, 3% back to Holders, and 3% deposited for Charity Funds.</ServicesP>
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
height: 160px;
width: 160px;
margin-bottom: 10px;
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