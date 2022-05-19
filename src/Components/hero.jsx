import React, { Component } from 'react'
import Slider from 'react-slick';
class hero extends Component {
    state = {  } 
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }; 
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src={require('./Images/1.jpg')} alt="Dragon 1"/></div>
                    <div><img src={require('./Images/2.jpg')} alt="Dragon 2"/></div>
                    <div><img src={require('./Images/3.jpg')} alt="Dragon 3"/></div>
                </Slider>
            </div>
        );
    }
}
 
export default hero;