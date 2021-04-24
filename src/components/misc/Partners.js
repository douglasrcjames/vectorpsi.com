import React, { Component } from 'react'
import Slider from "react-slick";

export default class Partners extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            partnersArray: [],
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
            console.log("partners.length: ")
            console.log(partners.length)
            return (
                <div className="slider-container">
                    <div className="m-margin-b">
                        <Slider {...settings1}>
                            {this.state.partnersArray.map((partner, index) => (
                                <div key={index}>
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


//                     Pending Final Approval
//                     IMI Critical Engineering - http://www.imi-critical.com/Pages/default.aspx
//                     Clearguard - http://clearguard.com/
//                     Bray International - https://bray.com/
//                     Rexa - https://www.rexa.com/


const partners = [
    {
        webUrl: `https://www.us.azbil.com`,
        picPath: require("../../assets/images/external-logos/azbil.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.badgermeter.com`,
        picPath: require("../../assets/images/external-logos/badger-meter.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.products.slb.com/valves`,
        picPath: require("../../assets/images/external-logos/cameron.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.questtecsolutions.com/`,
        picPath: require("../../assets/images/external-logos/questtec.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://spifil.com/en/`,
        picPath: require("../../assets/images/external-logos/spifil.png"),
        picSize: "small"
    },
    {
        webUrl: `http://www.warrencontrols.com/`,
        picPath: require("../../assets/images/external-logos/warren-controls.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://clearguard.com/`,
        picPath: require("../../assets/images/external-logos/clearguard.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.vortekinst.com/`,
        picPath: require("../../assets/images/external-logos/vortek.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.rexa.com/`,
        picPath: require("../../assets/images/external-logos/rexa.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://www.imi-critical.com/Pages/default.aspx`,
        picPath: require("../../assets/images/external-logos/imi.png"),
        picSize: "small"
    },
    {
        webUrl: `https://reotemp.com/`,
        picPath: require("../../assets/images/external-logos/reotemp-instruments.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.dft-valves.com/`,
        picPath: require("../../assets/images/external-logos/dft.png"),
        picSize: "medium"
    },
    // {
    //     webUrl: `https://www.delvalflow.com/`,
    //     picPath: require("../../assets/images/external-logos/delval.png"),
    //     picSize: "small"
    // },
    {
        webUrl: `https://www.contdisc.com/`,
        picPath: require("../../assets/images/external-logos/contdisc.png"),
        picSize: "small"
    },    {
        webUrl: `https://www.controlair.com/`,
        picPath: require("../../assets/images/external-logos/controlair.png"),
        picSize: "xmedium"
    },
    {
        webUrl: `https://www.bray.com/`,
        picPath: require("../../assets/images/external-logos/bray.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://www.qtrco.com/`,
        picPath: require("../../assets/images/external-logos/QTRCO.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://taylorvalve.com/`,
        picPath: require("../../assets/images/external-logos/taylor-valve.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://jflowcontrols.com/`,
        picPath: require("../../assets/images/external-logos/jflow-controls.png"),
        picSize: "medium"
    },
]

