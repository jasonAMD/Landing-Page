import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>AMD</SocialLogo>
              <WebsiteRights>© {new Date().getFullYear()} Please Contact Shane Parfitt for all website inquires.</WebsiteRights>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer