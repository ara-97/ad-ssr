import React from 'react'
import styled from 'styled-components'

import * as Fb from './Images/facebook.png'
import * as Insta from './Images/instagram.png'

const Container = styled.div`
    max-width:960px;
    width:100%;
    margin: 0 auto;
    padding: 0 20px;
`

const FooterWrapper = styled.div`
    text-align:center;
    color:#fff;
    padding-bottom:100px;
    display:grid;
`

const FooterGroup = styled.div`
    max-width: 500px;
    align-self:center;
    justify-self:center;
    color: #000;
    &>p{
      font-size: 12px;
      line-height: 16px;
    }
`

const TnC = styled.p`
    font-size: 14px;
    color: #4A90E2;
    letter-spacing: -0.4px;
    font-weight: bold;
    :hover{
      text-decoration: underline;
    }
`

const SocialMediaLinks = styled.div`
    height: 50px;
`

const Facebook = styled.img`
    height: 40px;
    width: 40px;
    margin: 0 20px;
    transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    transform: translateY(0);
      cursor: pointer;
    &:hover{
      transform: scale(1.08, 1.08);
    }
`

const Instagram = styled.img`
    height: 40px;
    width: 40px;
    transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    transform: translateY(0);
      cursor: pointer;
    &:hover{
      transform: scale(1.08, 1.08);
    }
  `

class Footer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
     
    }
  }



 render(){
   return(
    <Container>
        <FooterWrapper>
          <FooterGroup>
            <h2>
              Get in touch with us
            </h2>
            <SocialMediaLinks>
              <Facebook onClick={()=> window.open("https://www.facebook.com/ackodrive/", "_blank")} src={Fb}></Facebook>
              <Instagram onClick={()=> window.open("https://www.instagram.com/ackodrive/", "_blank")} src={Insta}></Instagram>
            </SocialMediaLinks>
            <p>
              We’d love to hear how we could make AckoDrive better for you. Get in touch and share your feedback, ask questions or, just to say hi! <strong>Drop us few lines on drive@acko.com</strong>.
            </p>
            <p>
              <strong>Acko Technology and Services Limited</strong> <br/> 9, 17th A Main Rd, Near Sukh Sagar Restaurant, 5th Block, Koramangala, Bengaluru, Karnataka 560095
            </p>
            {/* <Link to="/terms-and-conditions/"><TnC>Terms and Conditions</TnC></Link> */}
            <a href="https://www.ackodrive.com/privacy-policy/" target="_blank"><TnC>Privacy Policy</TnC></a>
            <a href="https://www.ackodrive.com/terms-and-conditions/" target="_blank"><TnC>Terms and Conditions</TnC></a>
          </FooterGroup>
        </FooterWrapper>
      </Container>
    ) 
  } 
}

export default Footer;