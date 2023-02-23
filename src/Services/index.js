import React from 'react'
import Icon1 from '../components/images/svg-1.svg'
import Icon2 from '../components/images/svg-2.svg'
import Icon3 from '../components/images/svg-3.svg'
import {
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServiceElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Some Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Project Athena</ServicesH2>
                <ServicesP>Data illustrating how AMD products are utilized by product users</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Preformance</ServicesH2>
                <ServicesP>Sandbox tool for generating Game Priority List and showing Game Media Data</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Team Vanguard</ServicesH2>
                <ServicesP>Tool to investigate the Sentiment of Reddit Threads and Issue Flagging</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services