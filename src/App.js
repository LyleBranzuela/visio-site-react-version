import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
import Glasses from './Products/Glasses.js';
import Carousel from './Products/Carousel.js';
import NavBar from './NavigationBar/NavigationBar.js';
import Footer from './NavigationBar/Footer.js';

class App extends Component {
  state = {
    glasses: [
      {
        // Zeniac
        glassesName: 'Zeniac',
        glassesType: 'Casual',
        classFont: "zeniac-font-color",
        slogan: 'Simple, elegant, and personalized...',
        referencePage: "./Products/zeniac.html"
      },
      {
        // Noctem
        glassesName: 'Noctem',
        glassesType: 'N.V. Glasses',
        classFont: "noctem-font-color",
        slogan: 'Adapting through various situations...',
        referencePage: "./Products/noctem.html"
      },
      {
        // Z2 Cloud
        glassesName: 'Z2 Cloud',
        glassesType: '3D Glasses',
        classFont: "z2cloud-font-color",
        slogan: 'How a 3D Glasses should be...',
        referencePage: "./Products/z2cloud.html"
      }
    ],

    glassesStyle: [
      {
        glassesColor: 'Plain Black',
        colorStyle: { color: 'black' },
        glassesPrice: '$50',
        glassesNVPrice: '$70',
        glasses3DPrice: '$45',
        glassesImage: require('./Images/Other/Glasses-Black.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Black.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Black.jpg')
      },
      {
        glassesColor: 'Royal Blue',
        colorStyle: { color: 'royalblue' },
        glassesPrice: '$55',
        glassesNVPrice: '$75',
        glasses3DPrice: '$50',
        glassesImage: require('./Images/Other/Glasses-Blue.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Blue.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Blue.jpg')
      },
      {
        glassesColor: 'Earthy Green',
        colorStyle: { color: 'green' },
        glassesPrice: '$60',
        glassesNVPrice: '$80',
        glasses3DPrice: '$55',
        glassesImage: require('./Images/Other/Glasses-Green.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Green.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Green.jpg')
      },
      {
        glassesColor: 'Blood Red',
        colorStyle: { color: 'darkred' },
        glassesPrice: '$55',
        glassesNVPrice: '$75',
        glasses3DPrice: '$50',
        glassesImage: require('./Images/Other/Glasses-Red.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Red.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Red.jpg')
      },
      {
        glassesColor: 'Golden Yellow',
        colorStyle: { color: 'gold' },
        glassesPrice: '$55',
        glassesNVPrice: '$75',
        glasses3DPrice: '$50',
        glassesImage: require('./Images/Other/Glasses-Yellow.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Yellow.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Yellow.jpg')
      },
      {
        glassesColor: 'Fancy Magenta',
        colorStyle: { color: 'magenta' },
        glassesPrice: '$60',
        glassesNVPrice: '$80',
        glasses3DPrice: '$55',
        glassesImage: require('./Images/Other/Glasses-Yellow.jpg'),
        glassesNVImage: require('./Images/Other/Night Vision Goggles-Yellow.jpg'),
        glasses3DImage: require('./Images/Other/3D Glasses-Yellow.jpg')
      }
    ]
  }

  createGlasses = () => {
    let glassItems = [];
    this.state.glasses.forEach(glass => {
      this.state.glassesStyle.forEach(style => {
        glassItems.push(
          <Glasses
            glassesName={glass.glassesName}
            glassesType={glass.glassesType}
            glassesPrice={style.glassesPrice}
            glassesColor={style.glassesColor}
            glassesImage={style.glassesImage}
            colorStyle={style.colorStyle}
            classFont={glass.classFont}
          />)
      })
    })
    return glassItems;
  }

  render() {
    return (
      <div className="App">
        < NavBar />
        {/* Slogan */}
        <div className="jumbotron text-center">
          <h1><img src={require('./Images/Logo Name Only.png')} alt="Visio Logo Name Only" /></h1>
          <h2><strong>The Vision of your Future</strong></h2>
        </div>
        {/* End of Slogan */}

        {/* Carousel */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li id="carouselcontainer1" data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li id="carouselcontainer2" data-target="#myCarousel" data-slide-to="1"></li>
            <li id="carouselcontainer3" data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          {/* End of Indicator Code */}
          <div className="carousel-inner">
            {/* Product: Zeniac */}
            <div className="item active" role="listbox">
              <Carousel 
               classFont = {this.state.glasses[0].classFont}
               glassesName = {this.state.glasses[0].glassesName}
               glassesPrice = {this.state.glassesStyle[0].glassesPrice}
               slogan = {this.state.glasses[0].slogan}
               glassesImage = {this.state.glassesStyle[0].glassesImage}
               referencePage = {this.state.glasses[0].referencePage}
               />
            </div>
            {/* Product: Noctem */}
            <div className="item">
              <Carousel 
                classFont = {this.state.glasses[1].classFont}
                glassesName = { this.state.glasses[1].glassesName}
                glassesPrice = {this.state.glassesStyle[0].glassesNVPrice}
                slogan = {this.state.glasses[1].slogan}
                glassesImage = {this.state.glassesStyle[0].glassesNVImage}
                referencePage = {this.state.glasses[1].referencePage}
              />
            </div>
            {/* Product: Z2 Cloud */}
            <div className="item">
              <Carousel 
                classFont = {this.state.glasses[2].classFont}
                glassesName = {this.state.glasses[2].glassesName}
                glassesPrice = {this.state.glassesStyle[0].glasses3DPrice}
                slogan = {this.state.glasses[2].slogan}
                glassesImage = {this.state.glassesStyle[0].glasses3DImage}
                referencePage = {this.state.glasses[2].referencePage}
              />
            </div>
            {/* Carousel Control */}
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev" id="carouselcontrols">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next" id="carouselcontrols">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* Carousel Control End */}
        {/* End of Carousel Code */}

        {/* Shopping List */}
        <div className="col-lg-9">
          <div className="row">
            <div id="line1">
              {this.createGlasses()}
            </div>
          </div>
        </div>
        {/* End of Shopping List Code */}
        <Footer />
      </div >
    );
  }
}

export default App;
