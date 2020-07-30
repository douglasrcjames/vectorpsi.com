import React, { Component } from 'react'
import Slider from "react-slick";

export default class Partners extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            partnersFirstHalf: [],
            partnersSecondHalf: []
        }
    }

    componentDidMount(){
        let partnersArray = shuffle(partners);

        this.setState({
            partnersArray: partnersArray
        });
    }
    
    render() {
        if(!this.state.partnersArray){
            return(
                <div className="center-text">Loading...</div>
            )
        } else {
            return (
                <div>
                    <div className="m-margin-b">
                        <Slider {...settings1}>
                            {this.state.partnersArray.map((partner, index) => (
                                <div key={index} className="m-padding">
                                     <a 
                                        href={partner.webUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >        
                                        <img
                                            className={`responsive ${partner.picSize}`}
                                            alt="partner logo"
                                            src={partner.picPath}
                                            />
                                    </a>
                                </div>
                             ))}
                        </Slider>
                    </div>
    
                    {/* <Grid fluid>
                        <Row center="xs" className="box-text-v-align">
                           
                                {partners.map((partner, index) => (
                                    // Odd rows 4 columns, Even rows 3 columns. (backwards from what you would think lol)
                                    <Col xs={12} sm={6} lg={3} className="s-margin-b" key={index}>
                                            <a 
                                                href={partner.webUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >        
                                                <img
                                                    className={`responsive ${partner.picSize}`}
                                                    alt="partner logo"
                                                    src={partner.picPath}
                                                    />
                                            </a>
                                    </Col>
                                ))}
                            
                        </Row>
                    </Grid> */}
                </div>
            )
        }
        
    }
}

const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    variableWidth: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


//    {/* <p>
//                     Badger Meter – www.badgermeter.com
//                     Spifil - http://spifil.com/en/
//                     Azbil North America – www.us.azbil.com
//                     Questtec Solutions - https://www.questtecsolutions.com/
//                     Warren Controls - http://www.warrencontrols.com/
//                     Cameron - https://www.products.slb.com/valves

//                     Pending Final Approval
//                     IMI Critical Engineering - http://www.imi-critical.com/Pages/default.aspx
//                     Clearguard - http://clearguard.com/
//                     Bray International - https://bray.com/
//                     Rexa - https://www.rexa.com/
//                     Andronaco - https://www.andronaco.com/
//                 </p> */}

const partners = [
    {
        webUrl: `https://www.adl.org/`,
        picPath: require("../../assets/images/external-logos/azbil.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.alz.org/`,
        picPath: require("../../assets/images/external-logos/badger-meter.png"),
        picSize: "large"
    },
    {
        webUrl: `https://democracymonth.org/`,
        picPath: require("../../assets/images/external-logos/cameron.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://attolloprep.org/`,
        picPath: require("../../assets/images/external-logos/questtec.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.benderjccgw.org/`,
        picPath: require("../../assets/images/external-logos/spifil.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://bipartisanpolicy.org/`,
        picPath: require("../../assets/images/external-logos/warren-controls.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.adl.org/`,
        picPath: require("../../assets/images/external-logos/azbil.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.alz.org/`,
        picPath: require("../../assets/images/external-logos/badger-meter.png"),
        picSize: "large"
    },
    {
        webUrl: `https://democracymonth.org/`,
        picPath: require("../../assets/images/external-logos/cameron.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://attolloprep.org/`,
        picPath: require("../../assets/images/external-logos/questtec.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.benderjccgw.org/`,
        picPath: require("../../assets/images/external-logos/spifil.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://bipartisanpolicy.org/`,
        picPath: require("../../assets/images/external-logos/warren-controls.png"),
        picSize: "medium"
    },
]

