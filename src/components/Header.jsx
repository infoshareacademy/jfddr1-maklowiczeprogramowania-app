import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import HamburgerMenuSrc from '../img/icons_hamburger-menu-light.svg'
import Wrapper from '../components/Wrapper'
import styled from 'styled-components'
import HeaderEllipseBackgroundSrc from '../img/header-ellipse-vector.svg'
import HeaderEllipseInnerImageSrc from '../img/Product-Release.svg'

const HeaderHeading = styled.h1`
font-size: 2.2em;
margin-top:4em;
`

const CreateHeroButton = styled.button`
padding:1.3em 1em;
margin-top:2em;
background: #FBECCC;
font-family: Quicksand;
font-weight:600;
border:none;
border-radius:4px;
`
const HowItWorksButton = styled(CreateHeroButton)`
background:transparent;
padding:1.2em 3em;
margin-left:2em;
border:2px solid #FBECCC;
color:#FBECCC;
border-radius:4px;
`
const HeaderEllipseBackground = styled.img`
position:absolute;
bottom:0;
right:0;
transform:rotate(90deg);
width:13em
`

const HeaderEllipseInnerImage = styled.img`
position:absolute;
bottom:0;
right:0;
width:9em
`
const Hero = styled.section`
font-size:2rem;
border 1px solid green;
min-width:40vw;
text-align:left;
`

const Header = () => {
return (
<Wrapper>
<HamburgerMenu src = {HamburgerMenuSrc} />
<Hero>
<HeaderHeading>Bądź częścią czegoś <span style = {{color: '#FBECCC'}}> wielkiego. </span> </HeaderHeading>
<p>Przedstaw światu swój pomysł i zbierz odpowiedni zespół, z którym wspólnie  zbudujecie solidny produkt!</p>
<p>Opisz nad czym chciałbyś pracować i kogo poszukujesz do wspólnej przygody! Czas spełnić swoje marzenia!</p>
<CreateHeroButton>Stwórz swojego bohatera</CreateHeroButton>
<HowItWorksButton>Jak to działa?</HowItWorksButton>
</Hero>
<HeaderEllipseBackground src = {HeaderEllipseBackgroundSrc}/>
<HeaderEllipseInnerImage src = {HeaderEllipseInnerImageSrc} />
</Wrapper>
)

}

export default Header
