import React, { Component } from 'react'

import { Helmet } from "react-helmet";
import Header from './Header'
import Layout from './Layout'
import Footer from './Footer'

import styled, { keyframes } from 'styled-components'


const HeroPropCTAIcon = styled.img`
    position:absolute;
    width: 27px;
    height: 15px;
    right:8px;
    vertical-align:middle;
    margin-top:14px;
    animation: ${HeroPropCTAIconAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
`

const HeroPropCTATextAnimation = keyframes`
      0%{
        opacity:0;
      }
      70%{
        opacity:0;
        animation-timing-function: cubic-bezier(0.64, 0.04, 0.35, 1);
      }
      100%{
        opacity: 1;
      }

`

const HeroPropCTA = styled.p`
    background-image: linear-gradient(-141deg, #656BFF 0%, #9F57FF 99%);
    color:#fff;
    /* padding: 12px 16px 12px 40px; */
    display:inline-block;
    margin-top:24px;
    ${'' /* cursor: ${props => props.cursor !== 'pointer' ? 'pointer' : 'none'}; */}
    border-radius: 30px;
    position: relative;
    white-space:nowrap;
    width: 44px;
    height: 44px;
    animation: ${props => props.width ? HeroPropCTAAnimation(props.width) : HeroPropCTAAnimation("260px")};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    &>span{
      position:absolute;
      top:12px;
      left:20px; // change this later to 40
      opacity:0;
      animation: ${HeroPropCTATextAnimation};
      animation-duration: 2s;
      animation-fill-mode: forwards;
      }

    /* ${props => props.selected ? "#5529F0" : "#efefef"}; */
`

const HeroSection = styled.div`
  width:100vw;
  height: 80vh;
  position:relative;
  padding-top:50px;
  @media (max-width:700px){
    height: 580px;
  }
`

const Container = styled.div`
    max-width:960px;
    width:100%;
    margin: 0 auto;
    padding: 0 20px;
`


const HeroProp = styled.div`
  height: 80vh;
`

const HeroPropAnimation = keyframes`
  from {
    opacity:0;
    transform: translateY(-25px);
  }
  to {
    opacity:0.88;
    transform: translateY(0px);
  }
`

const HeroPropTitle = styled.h1`
    &>span{
      display:block;
    }
    font-size: 52px;
    letter-spacing: -1.49px;
    line-height: 55px;
    font-weight:800;
    margin-bottom:0;
    margin-top:0;
    opacity:0;
    animation: ${HeroPropAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    color: #FFFFFF;

    @media (max-width: 700px) {
      font-size: 40px;
      letter-spacing: -1.14px;
      line-height: 42px;
    }
`

const HeroPropSubtitle = styled.p`
      font-size: 14px;
      line-height: 18px;
      margin-top:12px;
      opacity:0;
      animation: ${HeroPropAnimation};
      animation-duration: 1s;
      animation-fill-mode: forwards;
      color: #FFFFFF;
      @media (max-width: 700px) {
        max-width:300px;
        line-height: 23px;
        margin-top: 15px;
      }
`

const HeroPropNumber = styled.span`
      display: inline;
      @media (max-width: 700px) {
        max-width:250px;
        display: block;
      }
`
const HeroPropMail = styled.span`
      display: inline;

  @media (max-width: 700px) {
        display: block;
    max-width:280px;
  }

`

const HeroBG = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    margin: 0 30px;
    border-radius: 20px;
    background-image: url(${props => props.desktopbgURL ? props.desktopbgURL : ""});
    background-repeat: no-repeat;
    background-size: 100%;
    @media (max-width: 700px) {
    margin: 0;
    background-image: url(${props => props.mobilebgURL ? props.mobilebgURL : ""});
    background-repeat: repeat;
    }
`

const WhyAckoDriveWrapper = styled.div`
    display:grid;
    margin-top: 100px;
    grid-template-columns: 340px 1fr;
    align-items:start;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
    }

`

// const WhyAckoDriveTitle = styled.div`   
// `

const WhyAckoDriveTitleGroup = styled.div`
    position:sticky;
    top:150px;
    z-index:2;
    
    
    &>h2{
      opacity: 1;
      font-size: 46px;
      color: #000;
      letter-spacing: -1.31px;
      line-height: 56px;
      padding-bottom:30px;
      margin-bottom:0;
      background:#fff;
    }
    @media (max-width: 700px) {
      top:-150px;
    }
`

const WhyAckoDriveIcon = styled.img`
    height: 40px;
    width: 40px;
    transform:${props => props.highlight ? "scale(1.7)" : "scale(1)"};
    transition: all 700ms cubic-bezier(.2,.8,.2,1);
`

const WhyAckoDriveIconsGroup = styled.div`
    display:grid;
    grid-gap: 20px;
    background: #fff;
    grid-template-columns: repeat(3, 70px);
    ${'' /* background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 12%, #000016 56%); */}
    padding-bottom: 50px;
    
    @media (max-width: 700px) {
      padding-left:15px;
    }
`

const WhyAckoDriveContent = styled.div`
    position:relative;
    z-index:1;
    padding-top:50px;
    
`

const WhyAckoDriveContentItem = styled.div`
    opacity:${props => props.highlight ? 1 : 0.3};
    transform:${props => props.highlight ? "scale(1)translateY(0px)" : "scale(0.95)translateY(20px)"};
    transition: all 700ms cubic-bezier(.2,.8,.2,1);
    margin-top:80px;
    &>h3{
      opacity: 0.9;
      font-size: 32px;
      color: #000;
      letter-spacing: 0;
      line-height: 40px;
    }
    &>p{
      opacity: 0.88;
      font-size: 21px;
      color: #000;
      letter-spacing: 0;
      line-height: 32px;
    }
    
`

const WhyAckoDriveDesc = styled.p`
    opacity: 0.88;
    font-size: 21px;
    color: #000;
    letter-spacing: 0;
    line-height: 32px;
`

const HeroReminder = styled.div`
    display:grid;
    background-image: url(${props => props.bgURL ? props.bgURL : ""});
    background-size:cover;
    background-repeat: no-repeat;
    background-position:center center;
    height: 360px;
    margin-top:  200px;
    margin-bottom: 100px;
    border-radius:12px;
    overflow:hidden;
    padding: 20px;
`



const HeroReminderGroup = styled.div`
    align-self: center;
    justify-self: center;
    max-width: 500px;
    display:grid;
    justify-items: center;
    &>h2{
      font-size: 36px;
      color: #FFFFFF;
      text-align: center;
      line-height: 42px;
      margin-bottom:0;
      margin-top:0;
    }
    @media (max-width: 700px) {
      &>h2{
        font-size: 32px;
        line-height: 40px;
      }
    }
`





export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.firstItem = React.createRef()
    this.secondItem = React.createRef()
    this.thirdItem = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      pageLoaded: false,
      highlightedItem: null
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.setState({
      pageLoaded: true
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }



  handleScroll = (event) => {

    console.log(this.firstItem.current.getBoundingClientRect().top)
    if (this.firstItem.current.getBoundingClientRect().top < 300) {
      this.setState({
        highlightedItem: "first"
      })
    }

    if (this.secondItem.current.getBoundingClientRect().top < 300) {
      this.setState({
        highlightedItem: "second"
      })
    }

    if (this.thirdItem.current.getBoundingClientRect().top < 300) {
      this.setState({
        highlightedItem: "third"
      })
    }

  }

  render() {

    return (
      <Layout>
        <Header />
        <Helmet>
          <meta name="description" content="Buy cars in India at the best prices @ AckoDrive. We aim to make the entire process of buying a car smarter, transparent and hassle-free – so sit back and relax and enjoy the ride." />
          <title>Buy Cars in India at the Best Price Guaranteed | AckoDrive.com </title>
          <meta name="google-site-verification" content="W60NOXuXKmZel1mdNEAmef9XhLPtpYDNpbLTdz-cNM0"></meta>
          <link rel="canonical" href="https://www.ackodrive.com/" />
        </Helmet>
        {/* Hero Section */}
        <HeroSection>
          <HeroBG mobilebgURL={require('./Images/homepage-hero-mobile-bg.jpg')} desktopbgURL={require('./Images/homepage-hero-desktop-bg.jpg')}></HeroBG>
          <Container>
            <HeroProp>
              <HeroPropTitle><span>Our deals.</span> Your wheels.</HeroPropTitle>
              <HeroPropSubtitle>
                Acko Drive your one-stop solution for the ultimate car ownership experience.
                {/* <strong>We are fueling up. Meanwhile you can call us on</strong> */}
              </HeroPropSubtitle>
              {/* <Link to={"/car-finder"}> */}
              <HeroPropCTA width="180px" >
                <span>Coming soon</span>
                <HeroPropCTAIcon src={require('./Images/cta-car-icon.svg')} />
              </HeroPropCTA>
              {/* </Link> */}
              <HeroPropSubtitle>
                {/* <HeroPropNumber>You can also call us toll free on 1800 2099 915 </HeroPropNumber> */}
                <HeroPropMail>You can write to us on drive@acko.com</HeroPropMail>
              </HeroPropSubtitle>
            </HeroProp>
          </Container>
        </HeroSection>


        {/* Why Acko Drive Section */}

        <Container>
          <WhyAckoDriveWrapper>
            <WhyAckoDriveTitleGroup>
              <h2>Why <br />Acko Drive</h2>
              <WhyAckoDriveIconsGroup>
                <WhyAckoDriveIcon highlight={this.state.highlightedItem === "first"} src={this.state.highlightedItem === "first" ? require('./Images/great-cars-on.svg') : require('./Images/Group5-off.png')} />
                <WhyAckoDriveIcon highlight={this.state.highlightedItem === "second"} src={this.state.highlightedItem === "second" ? require('./Images/human-assistance-on.svg') : require('./Images/Group7-off.png')} />
                <WhyAckoDriveIcon highlight={this.state.highlightedItem === "third"} src={this.state.highlightedItem === "third" ? require('./Images/trust-on.svg') : require('./Images/Group9-off.png')} />
              </WhyAckoDriveIconsGroup>
            </WhyAckoDriveTitleGroup>
            <WhyAckoDriveContent>
              <WhyAckoDriveDesc>
                Acko Drive your one-stop solution for the ultimate car ownership experience, right from car discovery to delivery – where we keep only the best prices (and your best interests) in mind. <br /> <br /> At Acko Drive, we aim to make the entire process of buying a car smarter, transparent and hassle-free – so sit back and relax and enjoy the ride, while we take over as the driving force in getting you your brand-new car!
            </WhyAckoDriveDesc>
              <WhyAckoDriveContentItem highlight={this.state.highlightedItem === "first"} innerRef={this.firstItem}>
                <h3>Great Cars at Great Prices</h3>
                <p>Ever wondered whether the price you see on your car is the best one? With Acko Drive, we put a brake on all your doubts.  Since our prices are pre-negotiated with authorized dealers in your local area, they will always be at their accelerated best!</p>
              </WhyAckoDriveContentItem>

              <WhyAckoDriveContentItem highlight={this.state.highlightedItem === "second"} innerRef={this.secondItem}>
                <h3>Human assistance to find the perfect car</h3>
                <p>Find that perfect car for you and your family with a relationship manager whose only job is to help you discover the best possible prices for your car! Get complete help with research, but retain complete control over all the decision-making – so you get to decide the car you buy, but we make sure that we nudge you in the right direction!</p>
              </WhyAckoDriveContentItem>

              <WhyAckoDriveContentItem highlight={this.state.highlightedItem === "third"} innerRef={this.thirdItem}>
                <h3>Backed with trust, buy with confidence!</h3>
                <p>Apprehensive about buying a car online? What if it doesn’t feel right? It’s time to throw those problems off the dashboard. Since we only work with authorized new car dealers, you get a test drive and the works (warranty and paperwork et al) with only the best car dealerships.</p>
              </WhyAckoDriveContentItem>


            </WhyAckoDriveContent>

          </WhyAckoDriveWrapper>
        </Container>

        <Container>
          <HeroReminder bgURL={require('./Images/reminder-bg.jpg')}>
            <HeroReminderGroup>
              <h2>Drive away with the best deals on a new car.</h2>
              {/* <HeroPropCTA>
                <span>Toll Free: 1800 2099 915</span>
                <HeroPropCTAIcon src={require('./img/cta-car-icon.svg')} />
              </HeroPropCTA> */}
            </HeroReminderGroup>
          </HeroReminder>
        </Container>


        <Footer />



      </Layout>
    )

  }
}


