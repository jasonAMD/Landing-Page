import React from 'react';
import { Button } from '../ButtonElement';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow, 
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnContainer,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    buttonLabel2,
    img,
    alt,
    primary,
    dark, 
    dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnContainer>
                  <BtnWrap>
                    <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                  </BtnWrap>
                  <BtnWrap>
                    <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel2}</Button>
                  </BtnWrap>
                </BtnContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection